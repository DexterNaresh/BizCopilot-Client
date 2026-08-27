import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-filter',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']})
export class ProductsFilterComponent {
  @Input() activeFilter: string = 'all';
  @Input() totalCount: number = 0;
  @Input() availableCount: number = 0;
  @Input() unavailableCount: number = 0;
  @Input() favouriteCount: number = 0;
  @Output() filterChange = new EventEmitter<string>();

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.filterChange.emit(filter);
  }
}
