import { Injectable } from '@angular/core';
import { SalesSummaryResult, SalesTrendDataPoint, ReportGrouping, SalesDetailRow, PaymentMethodData, ProductPerformance, OfferPerformance } from '../application/dto/report.dto';
@Injectable()
export abstract class IReportRepository {
  abstract getSalesSummary(fromDate?: string, toDate?: string): SalesSummaryResult;
  abstract getSalesTrend(grouping: ReportGrouping, fromDate?: string, toDate?: string): SalesTrendDataPoint[];
  abstract getSalesDetails(fromDate?: string, toDate?: string): SalesDetailRow[];
  abstract getPaymentMethodBreakdown(fromDate?: string, toDate?: string): PaymentMethodData[];
  abstract getTopProducts(fromDate?: string, toDate?: string, limit?: number): ProductPerformance[];
  abstract getOffersPerformance(fromDate?: string, toDate?: string): OfferPerformance[];
}
