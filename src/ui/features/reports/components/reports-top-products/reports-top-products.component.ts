import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductPerformance } from '@runtime/report/application/dto/report.dto';

type ProductSortDirection = 'top' | 'low';
type ProductSortMetric = 'revenue' | 'units';

@Component({
  selector: 'app-reports-top-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-top-products.component.html',
  styleUrls: ['./reports-top-products.component.scss']
})
export class ReportsTopProductsComponent {
  @Input() products: ProductPerformance[] = [];

  sortDirection: ProductSortDirection = 'top';
  sortMetric: ProductSortMetric = 'revenue';

  get cardTitle(): string {
    return this.sortDirection === 'top' ? 'Top Selling Products' : 'Low Selling Products';
  }

  get cardSubtitle(): string {
    const metricLabel = this.sortMetric === 'revenue' ? 'revenue' : 'units sold';
    return `Ranked by ${metricLabel}`;
  }

  get sortedProducts(): ProductPerformance[] {
    const sorted = [...this.products].sort((a, b) => {
      const key = this.sortMetric === 'revenue' ? 'revenue' : 'unitsSold';
      return this.sortDirection === 'top' ? b[key] - a[key] : a[key] - b[key];
    });

    // Re-derive percentage relative to the highest value in the current sorted set
    const topFive = sorted.slice(0, 5);
    const key = this.sortMetric === 'revenue' ? 'revenue' : 'unitsSold';
    const maxVal = Math.max(...topFive.map(p => p[key]));

    return topFive.map((p, i) => ({
      ...p,
      rank: i + 1,
      percentage: maxVal > 0 ? Math.round((p[key] / maxVal) * 100) : 0
    }));
  }

  setSortDirection(dir: ProductSortDirection): void {
    this.sortDirection = dir;
  }

  setSortMetric(metric: ProductSortMetric): void {
    this.sortMetric = metric;
  }
}
