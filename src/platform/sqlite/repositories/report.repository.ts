import { Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';
import { IReportRepository } from '@runtime/report/repositories/report.repository.interface';
import { SalesSummaryResult, SalesTrendDataPoint, ReportGrouping, SalesDetailRow, PaymentMethodData, ProductPerformance, OfferPerformance } from '@runtime/report/application/dto/report.dto';

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
      
      totalDiscount: result?.total_discount || 0,
      averageBillValue: result?.total_bills > 0 ? result.total_revenue / result.total_bills : 0
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

  getSalesDetails(fromDate?: string, toDate?: string): SalesDetailRow[] {
    let sql = `
      SELECT 
        substr(created_at, 1, 10) as date,
        COUNT(bill_id) as bills,
        SUM(grand_total) as sales,
        SUM(discount_total) as discountGiven
      FROM bills 
      WHERE status = "COMPLETED"
    `;
    const params: any[] = [];
    if (fromDate) { sql += ' AND created_at >= ?'; params.push(fromDate); }
    if (toDate) { sql += ' AND created_at <= ?'; params.push(toDate); }
    sql += ` GROUP BY date ORDER BY date DESC`;

    const results = this.db.query<any>(sql, params);
    
    return results.map((row, index) => {
      const d = new Date(row.date);
      const dayStr = d.toLocaleDateString('en-US', { weekday: 'short' });
      const dateStr = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      return {
        index: index + 1,
        date: dateStr,
        day: dayStr,
        bills: row.bills,
        sales: row.sales,
        discountGiven: row.discountGiven,
        averageBill: row.bills > 0 ? row.sales / row.bills : 0
      };
    });
  }

  getPaymentMethodBreakdown(fromDate?: string, toDate?: string): PaymentMethodData[] {
    let sql = `
      SELECT 
        payment_method as name,
        SUM(grand_total) as amount
      FROM bills 
      WHERE status = "COMPLETED"
    `;
    const params: any[] = [];
    if (fromDate) { sql += ' AND created_at >= ?'; params.push(fromDate); }
    if (toDate) { sql += ' AND created_at <= ?'; params.push(toDate); }
    sql += ` GROUP BY payment_method ORDER BY amount DESC`;

    const results = this.db.query<any>(sql, params);
    const totalAmount = results.reduce((sum, row) => sum + row.amount, 0);

    const colors: Record<string, string> = {
      'UPI': '#6366F1',
      'Cash': '#10B981',
      'Card': '#0088FF',
      'Mixed': '#F59E0B'
    };

    return results.map(row => ({
      name: row.name,
      amount: row.amount,
      percentage: totalAmount > 0 ? Math.round((row.amount / totalAmount) * 100) : 0,
      color: colors[row.name] || '#9CA3AF'
    }));
  }

  getTopProducts(fromDate?: string, toDate?: string, limit: number = 10): ProductPerformance[] {
    let sql = `
      SELECT 
        bi.product_name as name,
        bi.product_type as category,
        SUM(bi.quantity) as unitsSold,
        SUM(bi.total) as revenue
      FROM bill_items bi
      JOIN bills b ON bi.bill_id = b.bill_id
      WHERE b.status = "COMPLETED"
    `;
    const params: any[] = [];
    if (fromDate) { sql += ' AND b.created_at >= ?'; params.push(fromDate); }
    if (toDate) { sql += ' AND b.created_at <= ?'; params.push(toDate); }
    sql += ` GROUP BY bi.product_name, bi.product_type ORDER BY revenue DESC LIMIT ?`;
    params.push(limit);

    const results = this.db.query<any>(sql, params);
    const maxRevenue = Math.max(...results.map(r => r.revenue), 0);

    return results.map((row, index) => ({
      rank: index + 1,
      name: row.name,
      category: row.category,
      unitsSold: row.unitsSold,
      revenue: row.revenue,
      percentage: maxRevenue > 0 ? Math.round((row.revenue / maxRevenue) * 100) : 0
    }));
  }

  getOffersPerformance(fromDate?: string, toDate?: string): OfferPerformance[] {
    // SQLite doesn't explicitly store offer_id in bills in this schema (we just added discountTotal to bills).
    // For V1, the offers are tracked if we have a table for it. Wait, the schema in database-seeder just subtracts discount.
    // If we want real offer performance without modifying the schema to link bill_id to offer_id, 
    // we'll return mock aggregations here if we don't have the table, or empty array.
    // Let's check if we can return a basic aggregation. Since we didn't add offer_id to bills, we can't accurately track it yet.
    // We will return an empty array for now.
    return [];
  }
}
