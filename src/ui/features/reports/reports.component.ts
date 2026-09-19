import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsHeaderComponent } from './components/reports-header/reports-header.component';
import { ReportsControlsComponent, FilterState } from './components/reports-controls/reports-controls.component';
import { ReportsKpiComponent, KpiData } from './components/reports-kpi/reports-kpi.component';
import { ReportsSalesTrendComponent } from './components/reports-sales-trend/reports-sales-trend.component';
import { ReportsPaymentMethodsComponent, PaymentMethodData } from './components/reports-payment-methods/reports-payment-methods.component';
import { ReportsSalesDetailsComponent, SalesDetailRow } from './components/reports-sales-details/reports-sales-details.component';
import { ReportsTopProductsComponent } from './components/reports-top-products/reports-top-products.component';
import { ReportsOffersComponent } from './components/reports-offers/reports-offers.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    ReportsHeaderComponent,
    ReportsControlsComponent,
    ReportsKpiComponent,
    ReportsSalesTrendComponent,
    ReportsPaymentMethodsComponent,
    ReportsSalesDetailsComponent,
    ReportsTopProductsComponent,
    ReportsOffersComponent
  ],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  selectedPeriod: string = 'Today (25 Aug 2025)';
  activeFilterCount: number = 2;

  masterRecords: SalesDetailRow[] = [
    { index: 1, date: '25 Aug 2025', day: 'Mon', bills: 128, sales: 24680, discountGiven: 1240, averageBill: 192.86 },
    { index: 2, date: '24 Aug 2025', day: 'Sun', bills: 116, sales: 21420, discountGiven: 980, averageBill: 184.65 },
    { index: 3, date: '23 Aug 2025', day: 'Sat', bills: 121, sales: 23180, discountGiven: 1120, averageBill: 191.57 },
    { index: 4, date: '22 Aug 2025', day: 'Fri', bills: 98, sales: 18760, discountGiven: 820, averageBill: 191.43 },
    { index: 5, date: '21 Aug 2025', day: 'Thu', bills: 104, sales: 20340, discountGiven: 940, averageBill: 195.58 },
    { index: 6, date: '20 Aug 2025', day: 'Wed', bills: 110, sales: 22100, discountGiven: 1050, averageBill: 200.91 },
    { index: 7, date: '19 Aug 2025', day: 'Tue', bills: 115, sales: 22800, discountGiven: 1100, averageBill: 198.26 },
    { index: 8, date: '18 Aug 2025', day: 'Mon', bills: 125, sales: 24100, discountGiven: 1200, averageBill: 192.80 },
    { index: 9, date: '17 Aug 2025', day: 'Sun', bills: 108, sales: 20500, discountGiven: 890, averageBill: 189.81 },
    { index: 10, date: '16 Aug 2025', day: 'Sat', bills: 130, sales: 25800, discountGiven: 1350, averageBill: 198.46 },
    { index: 11, date: '15 Aug 2025', day: 'Fri', bills: 142, sales: 28400, discountGiven: 1500, averageBill: 200.00 },
    { index: 12, date: '14 Aug 2025', day: 'Thu', bills: 95, sales: 17900, discountGiven: 750, averageBill: 188.42 },
    { index: 13, date: '13 Aug 2025', day: 'Wed', bills: 102, sales: 19600, discountGiven: 880, averageBill: 192.16 },
    { index: 14, date: '12 Aug 2025', day: 'Tue', bills: 112, sales: 21800, discountGiven: 1020, averageBill: 194.64 },
    { index: 15, date: '11 Aug 2025', day: 'Mon', bills: 118, sales: 23000, discountGiven: 1100, averageBill: 194.92 },
    { index: 16, date: '10 Aug 2025', day: 'Sun', bills: 122, sales: 23800, discountGiven: 1150, averageBill: 195.08 },
    { index: 17, date: '09 Aug 2025', day: 'Sat', bills: 135, sales: 26900, discountGiven: 1400, averageBill: 199.26 },
    { index: 18, date: '08 Aug 2025', day: 'Fri', bills: 105, sales: 20100, discountGiven: 920, averageBill: 191.43 },
    { index: 19, date: '07 Aug 2025', day: 'Thu', bills: 99, sales: 18900, discountGiven: 840, averageBill: 190.91 },
    { index: 20, date: '06 Aug 2025', day: 'Wed', bills: 107, sales: 20800, discountGiven: 960, averageBill: 194.39 },
    { index: 21, date: '05 Aug 2025', day: 'Tue', bills: 114, sales: 22200, discountGiven: 1060, averageBill: 194.74 },
    { index: 22, date: '04 Aug 2025', day: 'Mon', bills: 120, sales: 23400, discountGiven: 1120, averageBill: 195.00 },
    { index: 23, date: '03 Aug 2025', day: 'Sun', bills: 115, sales: 22100, discountGiven: 1000, averageBill: 192.17 },
    { index: 24, date: '02 Aug 2025', day: 'Sat', bills: 128, sales: 25200, discountGiven: 1300, averageBill: 196.88 },
    { index: 25, date: '01 Aug 2025', day: 'Fri', bills: 110, sales: 21000, discountGiven: 950, averageBill: 190.91 },
    { index: 26, date: '31 Jul 2025', day: 'Thu', bills: 103, sales: 19700, discountGiven: 870, averageBill: 191.26 },
    { index: 27, date: '30 Jul 2025', day: 'Wed', bills: 106, sales: 20400, discountGiven: 930, averageBill: 192.45 },
    { index: 28, date: '29 Jul 2025', day: 'Tue', bills: 111, sales: 21600, discountGiven: 1010, averageBill: 194.59 },
    { index: 29, date: '28 Jul 2025', day: 'Mon', bills: 119, sales: 23100, discountGiven: 1100, averageBill: 194.12 },
    { index: 30, date: '27 Jul 2025', day: 'Sun', bills: 114, sales: 22000, discountGiven: 1040, averageBill: 192.98 }
  ];

  filteredRecords: SalesDetailRow[] = [];
  
  kpiData: KpiData = {
    totalSales: 24680,
    totalBills: 128,
    averageBill: 192.86,
    discountGiven: 1240
  };

  paymentMethodsData: PaymentMethodData[] = [
    { name: 'UPI', percentage: 42, amount: 10366, color: '#6366F1' },
    { name: 'Cash', percentage: 28, amount: 6910, color: '#10B981' },
    { name: 'Card', percentage: 20, amount: 4936, color: '#0088FF' },
    { name: 'Mixed', percentage: 10, amount: 2468, color: '#F59E0B' }
  ];

  trendSubtitle: string = 'Hourly sales for 25 Aug 2025';
  trendRawData: Array<{ time: string; value: number }> = [
    { time: '6 AM', value: 1500 },
    { time: '9 AM', value: 3200 },
    { time: '12 PM', value: 5000 },
    { time: '3 PM', value: 8240 },
    { time: '6 PM', value: 4000 },
    { time: '9 PM', value: 4200 }
  ];

  currentPage: number = 1;
  pageSize: number = 5;

  ngOnInit(): void {
    this.filteredRecords = [...this.masterRecords];
    this.recalculateDashboard();
  }

  onPeriodChange(period: string): void {
    this.selectedPeriod = period;
    this.currentPage = 1;

    if (period.includes('Today')) {
      this.filteredRecords = this.masterRecords.slice(0, 1);
      this.trendSubtitle = 'Hourly sales for 25 Aug 2025';
      this.trendRawData = [
        { time: '6 AM', value: 1500 },
        { time: '9 AM', value: 3200 },
        { time: '12 PM', value: 5000 },
        { time: '3 PM', value: 8240 },
        { time: '6 PM', value: 4000 },
        { time: '9 PM', value: 4200 }
      ];
    } else if (period.includes('Yesterday')) {
      this.filteredRecords = this.masterRecords.slice(1, 2);
      this.trendSubtitle = 'Hourly sales for 24 Aug 2025';
      this.trendRawData = [
        { time: '6 AM', value: 1200 },
        { time: '9 AM', value: 2800 },
        { time: '12 PM', value: 7100 },
        { time: '3 PM', value: 5400 },
        { time: '6 PM', value: 3200 },
        { time: '9 PM', value: 1720 }
      ];
    } else if (period.includes('This Week')) {
      this.filteredRecords = this.masterRecords.slice(0, 7);
      this.trendSubtitle = 'Daily sales for this week (19 Aug - 25 Aug)';
      this.trendRawData = [
        { time: 'Tue', value: 22800 },
        { time: 'Wed', value: 22100 },
        { time: 'Thu', value: 20340 },
        { time: 'Fri', value: 18760 },
        { time: 'Sat', value: 23180 },
        { time: 'Sun', value: 21420 },
        { time: 'Mon', value: 24680 }
      ];
    } else if (period.includes('This Month')) {
      this.filteredRecords = this.masterRecords.slice(0, 25);
      this.trendSubtitle = 'Sales trend for this month (Aug 2025)';
      this.trendRawData = [
        { time: 'Aug 1-7', value: 148500 },
        { time: 'Aug 8-14', value: 158200 },
        { time: 'Aug 15-21', value: 165000 },
        { time: 'Aug 22-25', value: 88080 }
      ];
    } else if (period.includes('This Year')) {
      this.filteredRecords = [...this.masterRecords];
      this.trendSubtitle = 'Monthly sales trend for 2025';
      this.trendRawData = [
        { time: 'Jan', value: 420000 },
        { time: 'Mar', value: 480000 },
        { time: 'May', value: 510000 },
        { time: 'Jul', value: 540000 },
        { time: 'Sep', value: 490000 },
        { time: 'Nov', value: 530000 }
      ];
    } else {
      this.filteredRecords = [...this.masterRecords];
      this.trendSubtitle = `Sales trend for ${period}`;
      this.trendRawData = [
        { time: 'Start', value: 18000 },
        { time: 'Mid', value: 24000 },
        { time: 'End', value: 21000 }
      ];
    }

    this.recalculateDashboard();
  }


  onFilterApply(filters: FilterState): void {
    const activeFilters = Object.values(filters).filter(v => !v.startsWith('All'));
    this.activeFilterCount = activeFilters.length || 2;
    this.currentPage = 1;
    this.recalculateDashboard();
  }

  onFilterClear(): void {
    this.activeFilterCount = 0;
    this.filteredRecords = [...this.masterRecords];
    this.currentPage = 1;
    this.recalculateDashboard();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
  }

  private recalculateDashboard(): void {
    if (this.filteredRecords.length === 0) return;

    const totalSales = this.filteredRecords.reduce((acc, r) => acc + r.sales, 0);
    const totalBills = this.filteredRecords.reduce((acc, r) => acc + r.bills, 0);
    const discountGiven = this.filteredRecords.reduce((acc, r) => acc + r.discountGiven, 0);
    const averageBill = totalBills > 0 ? totalSales / totalBills : 0;

    this.kpiData = {
      totalSales,
      totalBills,
      averageBill,
      discountGiven
    };

    this.paymentMethodsData = [
      { name: 'UPI', percentage: 42, amount: Math.round(totalSales * 0.42), color: '#6366F1' },
      { name: 'Cash', percentage: 28, amount: Math.round(totalSales * 0.28), color: '#10B981' },
      { name: 'Card', percentage: 20, amount: Math.round(totalSales * 0.20), color: '#0088FF' },
      { name: 'Mixed', percentage: 10, amount: Math.round(totalSales * 0.10), color: '#F59E0B' }
    ];
  }
}

