import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface KpiData {
  totalSales: number;
  totalBills: number;
  averageBill: number;
  discountGiven: number;
}

@Component({
  selector: 'app-reports-kpi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-kpi.component.html',
  styleUrls: ['./reports-kpi.component.scss']
})
export class ReportsKpiComponent {
  @Input() data: KpiData = {
    totalSales: 24680,
    totalBills: 128,
    averageBill: 192.86,
    discountGiven: 1240
  };
}
