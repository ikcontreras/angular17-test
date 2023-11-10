import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './Item.component.html',
  styleUrls: ['./Item.component.scss']
})
export class ItemComponent {
  @Input() id!: string;

  @Input() label!: string;

  @Input() isComplete: boolean = false;

  @Output() OnChecked = new EventEmitter();

  checked() {
    this.isComplete = !this.isComplete;
    this.OnChecked.emit(this.isComplete);
  }
}
