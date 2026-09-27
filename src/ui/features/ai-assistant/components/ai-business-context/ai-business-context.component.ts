import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiMetrics, AiAttentionItem, AiQuickLink } from '../../models/ai-assistant.models';

@Component({
  selector: 'app-ai-business-context',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-business-context.component.html',
  styleUrls: ['./ai-business-context.component.scss']
})
export class AiBusinessContextComponent {
  @Input() metrics: AiMetrics = { totalSales: 0, totalBills: 0, avgBill: 0, totalDiscount: 0 };
  @Input() attentionItems: AiAttentionItem[] = [];
  @Input() quickLinks: AiQuickLink[] = [];
  @Output() linkClick = new EventEmitter<AiQuickLink>();
  @Output() close = new EventEmitter<void>();

  get formattedSales(): string {
    return '₹' + this.metrics.totalSales.toLocaleString('en-IN');
  }
  get formattedAvg(): string {
    return '₹' + Math.round(this.metrics.avgBill).toLocaleString('en-IN');
  }
}
