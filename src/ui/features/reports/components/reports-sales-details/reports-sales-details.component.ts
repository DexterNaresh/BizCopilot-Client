import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SalesDetailRow {
  index: number;
  date: string;
  day: string;
  bills: number;
  sales: number;
  discountGiven: number;
  averageBill: number;
}

@Component({
  selector: 'app-reports-sales-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-sales-details.component.html',
  styleUrls: ['./reports-sales-details.component.scss']
})
export class ReportsSalesDetailsComponent {
  @Input() allRecords: SalesDetailRow[] = [
    { index: 1, date: '25 Aug 2025', day: 'Mon', bills: 128, sales: 24680, discountGiven: 1240, averageBill: 192.86 },
    { index: 2, date: '24 Aug 2025', day: 'Sun', bills: 116, sales: 21420, discountGiven: 980, averageBill: 184.65 },
    { index: 3, date: '23 Aug 2025', day: 'Sat', bills: 121, sales: 23180, discountGiven: 1120, averageBill: 191.57 },
    { index: 4, date: '22 Aug 2025', day: 'Fri', bills: 98, sales: 18760, discountGiven: 820, averageBill: 191.43 },
    { index: 5, date: '21 Aug 2025', day: 'Thu', bills: 104, sales: 20340, discountGiven: 940, averageBill: 195.58 },
    { index: 6, date: '20 Aug 2025', day: 'Wed', bills: 110, sales: 22100, discountGiven: 1050, averageBill: 200.91 },
    { index: 7, date: '19 Aug 2025', day: 'Tue', bills: 115, sales: 22800, discountGiven: 1100, averageBill: 198.26 },
    { index: 8, date: '18 Aug 2025', day: 'Mon', bills: 125, sales: 24100, discountGiven: 1200, averageBill: 192.80 },
    { index: 9, date: '17 Aug 2025', day: 'Sun', bills: 108, sales: 20500, discountGiven: 890, averageBill: 189.81 },
    { index: 10, date: '16 Aug 2025', day: 'Sat', bills: 130, sales: 25800, discountGiven: 1350, averageBill: 198.46 }
  ];

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

