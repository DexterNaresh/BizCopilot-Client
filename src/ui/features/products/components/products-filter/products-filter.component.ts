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
  @Output() filterChange = new EventEmitter<string>();

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.filterChange.emit(filter);
  }
}
