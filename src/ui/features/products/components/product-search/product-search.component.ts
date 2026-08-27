import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']})
export class ProductSearchComponent {
  @Output() search = new EventEmitter<string>();
  @Output() filter = new EventEmitter<void>();

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value);
  }

  onFilter() {
    this.filter.emit();
  }
} 
