const ITEMS = [
  { id: 1, name: "item 1", is_completed: false },
  { id: 2, name: "item 2", is_completed: false },
  { id: 3, name: "item 3", is_completed: false },
  { id: 4, name: "item 4", is_completed: false },
  { id: 5, name: "item 5", is_completed: true },
  { id: 6, name: "item 6", is_completed: true },
];

function autoIncrementId() {
  if (ITEMS.length === 0) {
    return 1; 
  } else {
    const maxId = Math.max(...ITEMS.map((item) => item.id));
    return maxId + 1;
  }
}

module.exports = [
  {
    id: "get-items", // route id
    url: "/api/items", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: ITEMS, // body to send
        },
      },
      {
        id: "error", // variant id
        type: "json", // variant handler id
        options: {
          status: 400, // status to send
          body: { message: "Error" }, // body to send
        },
      },
    ],
  },
  {
    id: "get-item", // route id
    url: "/api/item/:id", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: ITEMS[0], // body to send
        },
      },
      {
        id: "error", // variant id
        type: "json", // variant handler id
        options: {
          status: 400, // status to send
          body: { message: "Error" }, // body to send
        },
      },
      {
        id: "real", // variant id
        type: "middleware", // variant handler id
        options: {
          // Express middleware to execute
          middleware: (req, res) => {
            const itemId = req.params.id;
            const item = ITEMS.find((itemData) => itemData.id === Number(itemId));
            if (item) {
              res.status(200);
              res.send(item);
            } else {
              res.status(404);
              res.send({
                message: "Item not found",
              });
            }
          },
        },
      },
    ],
  },
  {
    id: "post-item", // route id
    url: "/api/item", // url in express format
    method: "POST", // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: ITEMS[0], // body to send
        },
      },
      {
        id: "error", // variant id
        type: "json", // variant handler id
        options: {
          status: 400, // status to send
          body: { message: "Error" }, // body to send
        },
      },
      {
        id: "real", // variant id
        type: "middleware", // variant handler id
        options: {
          // Express middleware to execute
          middleware: (req, res) => {
            const body = req.body;
            const idNewItem = autoIncrementId();
            ITEMS.push({
              id: idNewItem,
              ...body
            });
            const item = ITEMS.find((itemData) => itemData.id === Number(idNewItem));
            if (item) {
              res.status(200);
              res.send(item);
            } else {
              res.status(404);
              res.send({
                message: "Item not found",
              });
            }
          },
        },
      }
    ]
  }
]