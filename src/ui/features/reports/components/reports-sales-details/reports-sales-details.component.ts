import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SalesDetailRow } from '@runtime/report/application/dto/report.dto';

@Component({
  selector: 'app-reports-sales-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-sales-details.component.html',
  styleUrls: ['./reports-sales-details.component.scss']
})
export class ReportsSalesDetailsComponent {
  @Input() allRecords: SalesDetailRow[] = [];

  @Input() currentPage: number = 1;
  @Input() pageSize: number = 5;

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  pageSizeOptions: number[] = [5, 10, 20];
  sortAscending: boolean = false;

  get totalRecords(): number {
    return this.allRecords.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize) || 1;
  }

  get startIndex(): number {
    if (this.totalRecords === 0) return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endIndex(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalRecords);
  }

  get displayedRecords(): SalesDetailRow[] {
    const sorted = [...this.allRecords].sort((a, b) => {
      return this.sortAscending ? a.index - b.index : b.index - a.index;
    });
    const start = (this.currentPage - 1) * this.pageSize;
    return sorted.slice(start, start + this.pageSize);
  }

  get pageItems(): Array<{ type: 'page' | 'dots'; value?: number }> {
    const total = this.totalPages;

    if (total <= 6) {
      return Array.from({ length: total }, (_, i) => ({ type: 'page', value: i + 1 }));
    }

    const items: Array<{ type: 'page' | 'dots'; value?: number }> = [];
    for (let i = 1; i <= 5; i++) {
      items.push({ type: 'page', value: i });
    }
    items.push({ type: 'dots' });
    items.push({ type: 'page', value: total });

    return items;
  }


  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(page);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  onPageSizeSelect(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const newSize = parseInt(select.value, 10);
    this.pageSize = newSize;
    this.currentPage = 1;
    this.pageSizeChange.emit(newSize);
  }

  toggleDateSort(): void {
    this.sortAscending = !this.sortAscending;
  }
}

