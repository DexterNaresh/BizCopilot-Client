import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsHeaderComponent } from './components/reports-header/reports-header.component';
import { ReportsControlsComponent, FilterState } from './components/reports-controls/reports-controls.component';
import { ReportsKpiComponent, KpiData } from './components/reports-kpi/reports-kpi.component';
import { ReportsSalesTrendComponent } from './components/reports-sales-trend/reports-sales-trend.component';
import { ReportsPaymentMethodsComponent } from './components/reports-payment-methods/reports-payment-methods.component';
import { ReportsSalesDetailsComponent } from './components/reports-sales-details/reports-sales-details.component';
import { ReportsTopProductsComponent } from './components/reports-top-products/reports-top-products.component';
import { ReportsOffersComponent } from './components/reports-offers/reports-offers.component';
import { ReportApplication } from '@runtime/report/application/report.application';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ReportFilterRequest, TrendFilterRequest, SalesDetailRow, PaymentMethodData, ProductPerformance, OfferPerformance } from '@runtime/report/application/dto/report.dto';

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
  selectedPeriod: string = 'This Month';
  activeFilterCount: number = 0;

  filteredRecords: SalesDetailRow[] = [];
  
  kpiData: KpiData = {
    totalSales: 0,
    totalBills: 0,
    averageBill: 0,
    discountGiven: 0
  };

  paymentMethodsData: PaymentMethodData[] = [];
  topProductsData: ProductPerformance[] = [];
  offersData: OfferPerformance[] = [];

  trendSubtitle: string = '';
  trendRawData: Array<{ time: string; value: number }> = [];

  currentPage: number = 1;
  pageSize: number = 5;

  constructor(
    private reportApp: ReportApplication,
    private sessionService: ISessionService
  ) {}

  ngOnInit(): void {
    // Set a default period and load
    const now = new Date();
    const month = now.toLocaleString('default', { month: 'short' });
    this.selectedPeriod = `This Month (${month} ${now.getFullYear()})`;
    this.loadReportData();
  }

  onPeriodChange(period: string): void {
    this.selectedPeriod = period;
    this.currentPage = 1;
    this.loadReportData();
  }

  onFilterApply(filters: FilterState): void {
    const activeFilters = Object.values(filters).filter(v => !v.startsWith('All'));
    this.activeFilterCount = activeFilters.length;
    this.currentPage = 1;
    this.loadReportData();
  }

  onFilterClear(): void {
    this.activeFilterCount = 0;
    this.currentPage = 1;
    this.loadReportData();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
  }

  private getDateRange(period: string): { fromDate?: string; toDate?: string; grouping: 'DAY' | 'WEEK' | 'MONTH' } {
    const now = new Date();
    const startOfDay = (d: Date) => { const x = new Date(d); x.setHours(0,0,0,0); return x; };
    const endOfDay = (d: Date) => { const x = new Date(d); x.setHours(23,59,59,999); return x; };
    
    if (period.includes('Today')) {
      return { fromDate: startOfDay(now).toISOString().replace('T', ' '), toDate: endOfDay(now).toISOString().replace('T', ' '), grouping: 'DAY' };
    }
    if (period.includes('Yesterday')) {
      const y = new Date(now);
      y.setDate(y.getDate() - 1);
      return { fromDate: startOfDay(y).toISOString().replace('T', ' '), toDate: endOfDay(y).toISOString().replace('T', ' '), grouping: 'DAY' };
    }
    if (period.includes('This Week')) {
      const startOfWeek = new Date(now);
      const day = startOfWeek.getDay();
      const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
      startOfWeek.setDate(diff);
      return { fromDate: startOfDay(startOfWeek).toISOString().replace('T', ' '), toDate: endOfDay(now).toISOString().replace('T', ' '), grouping: 'DAY' };
    }
    if (period.includes('This Month')) {
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      return { fromDate: startOfDay(startOfMonth).toISOString().replace('T', ' '), toDate: endOfDay(now).toISOString().replace('T', ' '), grouping: 'DAY' };
    }
    if (period.includes('This Year')) {
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      return { fromDate: startOfDay(startOfYear).toISOString().replace('T', ' '), toDate: endOfDay(now).toISOString().replace('T', ' '), grouping: 'MONTH' };
    }
    
    return { grouping: 'DAY' };
  }

  private loadReportData(): void {
    const user = this.sessionService.getCurrentUser();
    if (!user) return;
    
    const range = this.getDateRange(this.selectedPeriod);
    const req: ReportFilterRequest = {
      userId: user.id,
      from_date: range.fromDate,
      to_date: range.toDate
    };

    // 1. KPI
    const summaryRes = this.reportApp.getSalesSummary(req);
    if (summaryRes.success && summaryRes.data) {
      this.kpiData = {
        totalSales: summaryRes.data.totalRevenue || 0,
        totalBills: summaryRes.data.totalBills || 0,
        averageBill: summaryRes.data.averageBillValue || 0,
        discountGiven: summaryRes.data.totalDiscount || 0
      };
    } else {
      this.kpiData = { totalSales: 0, totalBills: 0, averageBill: 0, discountGiven: 0 };
    }

    // 2. Trend
    const trendReq: TrendFilterRequest = { ...req, grouping: range.grouping };
    const trendRes = this.reportApp.getSalesTrend(trendReq);
    if (trendRes.success && trendRes.data) {
      this.trendSubtitle = `Sales Trend (${this.selectedPeriod})`;
      this.trendRawData = trendRes.data.dataPoints.map((dp: any) => ({
        time: dp.period,
        value: dp.revenue
      }));
    } else {
      this.trendRawData = [];
    }

    // 3. Payment Methods
    const pmRes = this.reportApp.getPaymentMethodBreakdown(req);
    if (pmRes.success && pmRes.data) {
      this.paymentMethodsData = pmRes.data;
    } else {
      this.paymentMethodsData = [];
    }

    // 4. Sales Details
    const detailsRes = this.reportApp.getSalesDetails(req);
    if (detailsRes.success && detailsRes.data) {
      this.filteredRecords = detailsRes.data;
    } else {
      this.filteredRecords = [];
    }

    // 5. Top Products
    const productsRes = this.reportApp.getTopProducts(req);
    if (productsRes.success && productsRes.data) {
      this.topProductsData = productsRes.data;
    } else {
      this.topProductsData = [];
    }

    // 6. Offers
    const offersRes = this.reportApp.getOffersPerformance(req);
    if (offersRes.success && offersRes.data) {
      this.offersData = offersRes.data;
    } else {
      this.offersData = [];
    }
  }
}
