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
import { BillingStateService } from '@ui/features/billing/services/billing-state.service';

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
  private billingStateService = inject(BillingStateService);
  private datePipe = inject(DatePipe);

  loaded = false;
  userName = 'Owner';
  businessName = 'Green Bites Café';
  greetingPrefix = 'Good day';
  metrics = { totalSales: 0, totalBills: 0, avgBill: 0, discountGiven: 0 };
  attention = { billsOnHold: 0, productsUnavailable: 0 };
  recentBills: any[] = [];

  ngOnInit() {
    this.calculateGreeting();
    this.loadDashboardData();
  }

  private calculateGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greetingPrefix = 'Good morning';
    } else if (hour < 17) {
      this.greetingPrefix = 'Good afternoon';
    } else {
      this.greetingPrefix = 'Good evening';
    }
  }

  loadDashboardData() {
    const user = this.sessionService.getCurrentUser();
    if (user) {
      this.userName = user.name || 'Owner';
    }

    const userId = user?.id || 'TEST-USER-0000';
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    const fromDate = `${todayStr} 00:00:00`;
    const toDate = `${todayStr} 23:59:59`;

    // 1. Load Metrics for Today
    const metricsRes = this.reportApp.getSalesSummary({ userId, from_date: fromDate, to_date: toDate });
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
    const activityRes = this.salesApp.getRecentBills({ userId, limit: 5 });
    if (activityRes.success && activityRes.data) {
      this.recentBills = activityRes.data.map(b => ({
        time: this.datePipe.transform(b.created_at, 'h:mm a') || '',
        id: b.bill_number,
        amount: b.grand_total,
        method: b.payment_method
      }));
    }

    // 3. Load Attention (held bills & unavailable products)
    this.attention.billsOnHold = this.billingStateService.heldBills?.length || 0;

    const productsRes = this.productApp.getAllProducts({ userId });
    if (productsRes.success && productsRes.data) {
      this.attention.productsUnavailable = productsRes.data.filter(p => p.available === 0 || p.status !== 'ACTIVE').length;
    }

    this.loaded = true;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}

