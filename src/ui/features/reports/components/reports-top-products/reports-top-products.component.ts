import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProductPerformance {
  rank: number;
  name: string;
  category: string;
  unitsSold: number;
  revenue: number;
  percentage: number;
}

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
  @Input() products: ProductPerformance[] = [
    { rank: 1, name: 'Espresso', category: 'Beverages', unitsSold: 450, revenue: 67500, percentage: 100 },
    { rank: 2, name: 'Butter Croissant', category: 'Bakery', unitsSold: 320, revenue: 48000, percentage: 71 },
    { rank: 3, name: 'Cappuccino', category: 'Beverages', unitsSold: 280, revenue: 50400, percentage: 75 },
    { rank: 4, name: 'Grilled Sandwich', category: 'Snacks', unitsSold: 190, revenue: 47500, percentage: 70 },
    { rank: 5, name: 'Green Tea', category: 'Beverages', unitsSold: 150, revenue: 15000, percentage: 22 },
    { rank: 6, name: 'Iced Latte', category: 'Beverages', unitsSold: 140, revenue: 21000, percentage: 31 },
    { rank: 7, name: 'Veg Puff', category: 'Snacks', unitsSold: 130, revenue: 7800, percentage: 12 },
    { rank: 8, name: 'Chocolate Muffin', category: 'Bakery', unitsSold: 110, revenue: 13200, percentage: 20 },
    { rank: 9, name: 'Masala Chai', category: 'Beverages', unitsSold: 95, revenue: 5700, percentage: 8 },
    { rank: 10, name: 'Plain Soda', category: 'Beverages', unitsSold: 60, revenue: 1800, percentage: 3 }
  ];

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
