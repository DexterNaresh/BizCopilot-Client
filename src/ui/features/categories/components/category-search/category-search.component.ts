import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-search',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.scss']
})
export class CategorySearchComponent {
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
