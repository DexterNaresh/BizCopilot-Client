import { Component, EventEmitter, Input, Output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-pagination',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-pagination.component.html',
  styleUrls: ['./category-pagination.component.scss']
})
export class CategoryPaginationComponent {
  @Input({ required: true }) page = 1;
  @Input({ required: true }) pageSize = 10;
  @Input({ required: true }) totalCount = 0;

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  pageSizeOptions = [6, 8, 10];

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.totalCount / this.pageSize));
  }

  get pages(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, this.page - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;

    if (end > this.totalPages) {
      end = this.totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  get showingStart(): number {
    if (this.totalCount === 0) return 0;
    return (this.page - 1) * this.pageSize + 1;
  }

  get showingEnd(): number {
    return Math.min(this.page * this.pageSize, this.totalCount);
  }

  onPageChange(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages && newPage !== this.page) {
      this.pageChange.emit(newPage);
    }
  }

  onPageSizeChange(newSize: number) {
    this.pageSizeChange.emit(newSize);
  }
}
