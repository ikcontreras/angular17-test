import { Component, OnInit } from '@angular/core';
import { ItemsListComponent } from './items-list/items-list.component';
import { Items } from '../../core/interfaces/items';
import { SharedModule } from '../../shared/shared.module';
import { ItemsService } from '../../core/services/items.service';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SharedModule, ItemsListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [ItemsService]
})
export class MainComponent implements OnInit {
  items: Items[] = [];
  failRequest: boolean = false;
  constructor(private itemService: ItemsService) {}

  ngOnInit(): void {
    this.itemService.list().subscribe({
      next: r => {
        this.items = r.result || [];
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
        this.failRequest = true;
      }
    });
  }
}
