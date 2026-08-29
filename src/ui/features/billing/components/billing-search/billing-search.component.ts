import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-billing-search',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './billing-search.component.html',
  styleUrls: ['./billing-search.component.scss']
})
export class BillingSearchComponent {
  @Output() search = new EventEmitter<string>();
  @Output() scan = new EventEmitter<void>();

  onSearch(event: any) {
    this.search.emit(event.target.value);
  }
}
