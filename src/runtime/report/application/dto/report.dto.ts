export type ReportGrouping = 'DAY' | 'WEEK' | 'MONTH';
export interface ReportFilterRequest { userId: string; sessionId?: string; from_date?: string; to_date?: string; }
export interface TrendFilterRequest { userId: string; sessionId?: string; from_date?: string; to_date?: string; grouping: any; }
export interface SalesSummaryResult { totalSales?: number; totalRevenue?: number; totalOrders?: number; totalBills?: number; totalDiscount?: number; cancelledBills?: number; averageBillValue?: number; }
export interface SalesTrendResult { grouping: string; dataPoints: any[]; }
export interface SalesTrendDataPoint { date?: string; value?: number; period?: any; bills?: any; revenue?: any; discount?: any; averageBillValue?: number; }
