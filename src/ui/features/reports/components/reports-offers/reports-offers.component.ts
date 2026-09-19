import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface OfferPerformance {
  name: string;
  type: string;
  usageCount: number;
  revenue: number;
  discountGiven: number;
  conversionRate: number;
}

type OfferSortMode = 'most-used' | 'best-conversion' | 'highest-revenue';

@Component({
  selector: 'app-reports-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-offers.component.html',
  styleUrls: ['./reports-offers.component.scss']
})
export class ReportsOffersComponent {
  @Input() offers: OfferPerformance[] = [
    { name: 'Morning Coffee 10%', type: 'Percentage', usageCount: 85, revenue: 24500, discountGiven: 2450, conversionRate: 68 },
    { name: 'Weekend Special', type: 'Flat Amount', usageCount: 42, revenue: 31000, discountGiven: 4200, conversionRate: 45 },
    { name: 'Buy 1 Get 1 Bakery', type: 'BOGO', usageCount: 38, revenue: 12400, discountGiven: 3800, conversionRate: 82 },
    { name: 'Student Discount', type: 'Percentage', usageCount: 24, revenue: 6800, discountGiven: 1020, conversionRate: 55 },
    { name: 'Happy Hour 20%', type: 'Percentage', usageCount: 60, revenue: 18600, discountGiven: 3720, conversionRate: 72 },
    { name: 'New Customer Flat ₹50', type: 'Flat Amount', usageCount: 15, revenue: 4500, discountGiven: 750, conversionRate: 90 }
  ];

  sortMode: OfferSortMode = 'most-used';

  sortModes: Array<{ key: OfferSortMode; label: string }> = [
    { key: 'most-used', label: 'Most Used' },
    { key: 'best-conversion', label: 'Best Conversion' },
    { key: 'highest-revenue', label: 'Highest Revenue' }
  ];

  get sortedOffers(): OfferPerformance[] {
    const sorted = [...this.offers].sort((a, b) => {
      switch (this.sortMode) {
        case 'most-used':
          return b.usageCount - a.usageCount;
        case 'best-conversion':
          return b.conversionRate - a.conversionRate;
        case 'highest-revenue':
          return b.revenue - a.revenue;
        default:
          return 0;
      }
    });
    return sorted.slice(0, 4);
  }

  setSortMode(mode: OfferSortMode): void {
    this.sortMode = mode;
  }
}
