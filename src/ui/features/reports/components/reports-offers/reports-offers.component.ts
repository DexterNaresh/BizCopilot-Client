import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OfferPerformance } from '@runtime/report/application/dto/report.dto';

type OfferSortMode = 'most-used' | 'best-conversion' | 'highest-revenue';

@Component({
  selector: 'app-reports-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-offers.component.html',
  styleUrls: ['./reports-offers.component.scss']
})
export class ReportsOffersComponent {
  @Input() offers: OfferPerformance[] = [];

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
