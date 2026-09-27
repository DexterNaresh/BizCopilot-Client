import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { HomeNewBillComponent } from './components/home-new-bill/home-new-bill.component';
import { HomeMetricsComponent } from './components/home-metrics/home-metrics.component';
import { HomeQuickActionsComponent } from './components/home-quick-actions/home-quick-actions.component';
import { HomeAttentionComponent } from './components/home-attention/home-attention.component';
import { HomeActivityComponent } from './components/home-activity/home-activity.component';
import { HomeAiBriefComponent } from './components/home-ai-brief/home-ai-brief.component';
import { HomeStatusComponent } from './components/home-status/home-status.component';

import { ReportApplication } from '@runtime/report/application/report.application';
import { ProductApplication } from '@runtime/product/application/product.application';
import { SalesApplication } from '@runtime/billing/application/sales.application';
import { ISessionService } from '@shared/abstractions/session.service.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HomeBannerComponent,
    HomeNewBillComponent,
    HomeMetricsComponent,
    HomeQuickActionsComponent,
    HomeAttentionComponent,
    HomeActivityComponent,
    HomeAiBriefComponent,
    HomeStatusComponent
  ],
  providers: [DatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  private reportApp = inject(ReportApplication);
  private productApp = inject(ProductApplication);
  private salesApp = inject(SalesApplication);
  private sessionService = inject(ISessionService);
  private datePipe = inject(DatePipe);

  loaded = false;
  metrics = { totalSales: 0, totalBills: 0, avgBill: 0, discountGiven: 0 };
  attention = { billsOnHold: 0, productsUnavailable: 0 };
  recentBills: any[] = [];

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    const user = this.sessionService.getCurrentUser();
    if (!user) {
      this.loaded = true;
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];

    // 1. Load Metrics
    const metricsRes = this.reportApp.getSalesSummary({ userId: user.id, from_date: todayStr, to_date: todayStr });
    if (metricsRes.success && metricsRes.data) {
      const sales = metricsRes.data.totalSales || 0;
      const bills = metricsRes.data.totalBills || 0;
      this.metrics = {
        totalSales: sales,
        totalBills: bills,
        avgBill: bills > 0 ? (sales / bills) : 0,
        discountGiven: metricsRes.data.totalDiscount || 0
      };
    }

    // 2. Load Activity (Recent bills)
    const activityRes = this.salesApp.getRecentBills({ userId: user.id, limit: 5 });
    if (activityRes.success && activityRes.data) {
      this.recentBills = activityRes.data.map(b => ({
        time: this.datePipe.transform(b.created_at, 'h:mm a') || '',
        id: b.bill_number,
        amount: b.grand_total,
        method: b.payment_method
      }));
    }

    // 3. Load Attention (unavailable products)
    const productsRes = this.productApp.getAllProducts({ userId: user.id });
    if (productsRes.success && productsRes.data) {
      this.attention.productsUnavailable = productsRes.data.filter(p => p.available === 0 || p.status !== 'ACTIVE').length;
    }

    this.loaded = true;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
