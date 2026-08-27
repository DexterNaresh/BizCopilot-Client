import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'biz-filter-sheet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-sheet.component.html',
  styleUrls: ['./filter-sheet.component.scss']
})
export class FilterSheetComponent {
  @Input() title: string = 'Filters';
  @Output() closeSheet = new EventEmitter<void>();

  onClose() {
    this.closeSheet.emit();
  }
}
