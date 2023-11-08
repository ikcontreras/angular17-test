describe('Inital page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct title', () => {
    cy.title().should('equal','Items Management')
  })

  it('Visits the initial project page', () => {
    cy.contains('Hello, items-management')
  })
})
