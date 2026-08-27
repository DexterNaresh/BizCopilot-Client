import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.scss']
})
export class CategoriesFilterComponent {
  @Input() activeFilter: string = 'all';
  @Input() totalCount: number = 0;
  @Input() activeCount: number = 0;
  @Input() inactiveCount: number = 0;
  @Output() filterChange = new EventEmitter<string>();

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.filterChange.emit(filter);
  }
}
