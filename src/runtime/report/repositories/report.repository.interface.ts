import { Injectable } from '@angular/core';
import { SalesSummaryResult, SalesTrendDataPoint, ReportGrouping } from '../application/dto/report.dto';
@Injectable()
export abstract class IReportRepository {
  abstract getSalesSummary(fromDate?: string, toDate?: string): SalesSummaryResult;
  abstract getSalesTrend(grouping: ReportGrouping, fromDate?: string, toDate?: string): SalesTrendDataPoint[];
}
