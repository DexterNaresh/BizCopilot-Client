import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AiHistoryComponent } from './components/ai-history/ai-history.component';
import { AiChatAreaComponent } from './components/ai-chat-area/ai-chat-area.component';
import { AiBusinessContextComponent } from './components/ai-business-context/ai-business-context.component';
import { ReportApplication } from '@runtime/report/application/report.application';
import { ProductApplication } from '@runtime/product/application/product.application';
import { SalesApplication } from '@runtime/billing/application/sales.application';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { AiMetrics, AiAttentionItem, AiQuickLink, ChatHistoryGroup, ChatMessage } from './models/ai-assistant.models';

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [CommonModule, AiHistoryComponent, AiChatAreaComponent, AiBusinessContextComponent],
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.scss']
})
export class AiAssistantComponent implements OnInit {
  private router = inject(Router);
  private reportApp = inject(ReportApplication);
  private productApp = inject(ProductApplication);
  private salesApp = inject(SalesApplication);
  private sessionService = inject(ISessionService);

  loaded = false;
  showHistory = false;
  showContext = false;

  metrics: AiMetrics = { totalSales: 0, totalBills: 0, avgBill: 0, totalDiscount: 0 };
  attentionItems: AiAttentionItem[] = [];
  quickLinks: AiQuickLink[] = [
    { icon: 'description', label: "Today's Bills", route: '/bills', color: 'blue' },
    { icon: 'pause', label: 'Held Bills', route: '/bills', color: 'red' },
    { icon: 'inventory_2', label: 'Products', route: '/products', color: 'blue' },
    { icon: 'group', label: 'Customers', route: '/customers', color: 'blue' },
    { icon: 'local_offer', label: 'Offers', route: '/offers', color: 'blue' },
    { icon: 'bar_chart', label: 'Reports', route: '/reports', color: 'blue' }
  ];

  historyGroups: ChatHistoryGroup[] = [];
  activeHistoryId = '';

  messages: ChatMessage[] = [];
  showInitialState = true;

  suggestions = [
    { icon: 'bar_chart', text: 'Why are sales lower today?', color: 'blue' },
    { icon: 'inventory_2', text: 'What are my best-selling products this week?', color: 'blue' },
    { icon: 'local_offer', text: 'How are my offers performing?', color: 'red' },
    { icon: 'lightbulb', text: 'What should I focus on today?', color: 'orange' }
  ];

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    const user = this.sessionService.getCurrentUser();
    if (!user) { this.loaded = true; return; }

    const todayStr = new Date().toISOString().split('T')[0];

    // Metrics
    const metricsRes = this.reportApp.getSalesSummary({ userId: user.id, from_date: todayStr, to_date: todayStr });
    if (metricsRes.success && metricsRes.data) {
      const s = metricsRes.data;
      this.metrics = {
        totalSales: s.totalRevenue || 0,
        totalBills: s.totalBills || 0,
        avgBill: s.averageBillValue || 0,
        totalDiscount: s.totalDiscount || 0
      };
    }

    // Attention
    const productsRes = this.productApp.getAllProducts({ userId: user.id });
    const unavailable = productsRes.success && productsRes.data
      ? productsRes.data.filter(p => p.available === 0 || p.status !== 'ACTIVE').length : 0;

    this.attentionItems = [];
    if (unavailable > 0) {
      this.attentionItems.push({
        icon: 'block', label: `${unavailable} Product${unavailable > 1 ? 's' : ''} Unavailable`,
        sublabel: 'Cannot be added to bill', color: 'orange', route: '/products'
      });
    }

    // Chat history (test data for test profile)
    this.historyGroups = [
      {
        label: 'Today', items: [
          { id: 'c1', title: 'Why are sales lower today?', time: '10:42 AM', icon: 'bar_chart' },
          { id: 'c2', title: 'Best selling products this week', time: '09:15 AM', icon: 'inventory_2' },
          { id: 'c3', title: 'How are my offers performing?', time: '08:33 AM', icon: 'local_offer' }
        ]
      },
      {
        label: 'Yesterday', items: [
          { id: 'c4', title: 'Customer visit patterns', time: '5:21 PM', icon: 'group' },
          { id: 'c5', title: 'Monthly sales summary', time: '3:10 PM', icon: 'bar_chart' },
          { id: 'c6', title: 'Product performance', time: '11:05 AM', icon: 'bar_chart' }
        ]
      },
      {
        label: 'This Week', items: [
          { id: 'c7', title: 'Which items to promote?', time: 'Sep 24', icon: 'local_offer' },
          { id: 'c8', title: 'Compare this week vs last week', time: 'Sep 23', icon: 'compare_arrows' }
        ]
      }
    ];

    // Load demo conversation
    this.selectConversation('c1');
    this.loaded = true;
  }

  selectConversation(id: string) {
    this.activeHistoryId = id;
    this.showInitialState = false;

    const sales = this.metrics.totalSales;
    const bills = this.metrics.totalBills;
    const avg = this.metrics.avgBill;

    this.messages = [
      {
        id: 'm1', type: 'user', text: 'Why are sales lower today?', time: '10:42 AM'
      },
      {
        id: 'm2', type: 'ai', time: '10:42 AM',
        text: `Today's sales are ₹${sales.toLocaleString('en-IN')} across ${bills} bills, which is 18% lower than the same day last week (₹22,540). The main difference is fewer bills during the afternoon.`,
        metrics: [
          { label: 'Total Sales', value: `₹${sales.toLocaleString('en-IN')}`, trend: '↓ 18%', trendDir: 'down', icon: 'payments', iconBg: '#ECFDF5', iconColor: '#10B981' },
          { label: 'Bills', value: `${bills}`, trend: '↓ 12%', trendDir: 'down', icon: 'receipt_long', iconBg: '#FEF2F2', iconColor: '#EF4444' },
          { label: 'Average Bill', value: `₹${Math.round(avg).toLocaleString('en-IN')}`, trend: '↓ 7%', trendDir: 'down', icon: 'payments', iconBg: '#EFF6FF', iconColor: '#3B82F6' }
        ],
        reasons: [
          { icon: 'trending_down', iconBg: '#FEF2F2', iconColor: '#EF4444', title: 'Lower customer footfall in the afternoon', detail: 'Bills between 2 PM – 5 PM are 35% lower than last Tuesday.' },
          { icon: 'local_offer', iconBg: '#FFFBEB', iconColor: '#F59E0B', title: 'Fewer offer redemptions', detail: 'Only 3 offer redemptions today vs 9 last Tuesday.' },
          { icon: 'group', iconBg: '#EEF2FF', iconColor: '#5B3BEB', title: 'Some regular customers have not visited yet', detail: '5 of your regular customers typically visit on Tuesdays, but haven\'t visited today.' }
        ],
        actions: [
          { num: 1, text: 'Consider a lunch offer to drive afternoon traffic.' },
          { num: 2, text: 'Check if any regular customers have upcoming reservations.' },
          { num: 3, text: 'Review today\'s held bills and complete them.' }
        ],
        evidence: ["Today's completed bills", "Last Tuesday's completed bills", "Hourly sales data"],
        followUps: [
          { label: "View Today's Bills", icon: 'description', color: 'blue' },
          { label: 'View Held Bills', icon: 'pause', color: 'red' },
          { label: 'Show Hourly Sales', icon: 'bar_chart', color: 'blue' }
        ]
      }
    ];
  }

  onNewChat() {
    this.activeHistoryId = '';
    this.showInitialState = true;
    this.messages = [];
  }

  onSuggestionClick(suggestion: { text: string }) {
    this.showInitialState = false;
    this.selectConversation('c1');
  }

  onQuickLinkClick(link: AiQuickLink) {
    this.router.navigate([link.route]);
  }

  toggleHistory() {
    this.showHistory = !this.showHistory;
  }

  toggleContext() {
    this.showContext = !this.showContext;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
