import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

export interface BillingCategory {
  id: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-billing-filter',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './billing-filter.component.html',
  styleUrls: ['./billing-filter.component.scss']
})
export class BillingFilterComponent {
  @Input() activeFilter: string = 'all';
  @Input() categories: BillingCategory[] = [];
  @Output() filterChange = new EventEmitter<string>();

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.filterChange.emit(filter);
  }
}
