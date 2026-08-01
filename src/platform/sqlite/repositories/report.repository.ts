import { Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';
import { IReportRepository } from '@runtime/report/repositories/report.repository.interface';
import { SalesSummaryResult, SalesTrendDataPoint, ReportGrouping } from '@runtime/report/application/dto/report.dto';

@Injectable({
  providedIn: 'root'
})
export class SqliteReportRepository implements IReportRepository {
  constructor(private db: DatabaseService) {}

  getSalesSummary(fromDate?: string, toDate?: string): SalesSummaryResult {
    let sql = 'SELECT COUNT(bill_id) as total_bills, SUM(grand_total) as total_revenue, SUM(tax_total) as total_tax, SUM(discount_total) as total_discount FROM bills WHERE status = "COMPLETED"';
    const params: any[] = [];
    if (fromDate) { sql += ' AND created_at >= ?'; params.push(fromDate); }
    if (toDate) { sql += ' AND created_at <= ?'; params.push(toDate); }

    const result = this.db.queryOne<any>(sql, params);
    return {
      totalRevenue: result?.total_revenue || 0,
      totalBills: result?.total_bills || 0,
      
      totalDiscount: result?.total_discount || 0
    };
  }

  getSalesTrend(grouping: ReportGrouping, fromDate?: string, toDate?: string): SalesTrendDataPoint[] {
    let dateModifier = '';
    if (grouping === 'DAY') dateModifier = "substr(created_at, 1, 10)";
    else if (grouping === 'WEEK') dateModifier = "substr(created_at, 1, 7)"; // roughly weekly or use strftime
    else dateModifier = "substr(created_at, 1, 4)"; // month or year

    let sql = `SELECT ${dateModifier} as period, SUM(grand_total) as revenue FROM bills WHERE status = "COMPLETED"`;
    const params: any[] = [];
    if (fromDate) { sql += ' AND created_at >= ?'; params.push(fromDate); }
    if (toDate) { sql += ' AND created_at <= ?'; params.push(toDate); }
    sql += ` GROUP BY period ORDER BY period ASC`;

    return this.db.query<SalesTrendDataPoint>(sql, params);
  }
}
