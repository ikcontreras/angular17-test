import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Items } from '../../../core/interfaces/items';
import {ItemsService} from "../../../core/services/items.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent {
  @Input() items!: Items[] | undefined;

  constructor(private itemsService: ItemsService) {}
  
  loadItems() {
    this.itemsService.list().subscribe(r => {
      this.items = r.result;
    });
  }

  onChecked(id: number) {
    this.itemsService.completeItem(id.toString()).subscribe({
      next: r => {
        console.log(r);
      },
      error: (e: HttpErrorResponse) => {
        console.log(e)
      }
    })
    this.loadItems();
  }
}
