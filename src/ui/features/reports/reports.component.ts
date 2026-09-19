import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  dateFilters = ['Today', 'Yesterday', 'This Week', 'This Month'];
  activeDateFilter = 'This Month';

  topProducts = [
    { rank: 1, name: 'Apple Juice (Fresh)', units: 142, revenue: 21300 },
    { rank: 2, name: 'Orange Juice', units: 118, revenue: 17700 },
    { rank: 3, name: 'Mango Smoothie', units: 96, revenue: 14400 },
    { rank: 4, name: 'Club Sandwich', units: 75, revenue: 9000 },
    { rank: 5, name: 'Cold Coffee', units: 64, revenue: 7680 }
  ];

  exportReport() {
    alert('Exporting Sales Analytics Report (PDF)...');
  }
}
