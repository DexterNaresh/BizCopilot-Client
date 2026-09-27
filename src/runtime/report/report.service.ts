import { ValidationException } from '@shared/exceptions/validation.exception';
import { Injectable } from '@angular/core';
import { IReportRepository } from './repositories/report.repository.interface';
import { ReportFilterRequest, TrendFilterRequest, SalesSummaryResult, SalesTrendResult, SalesDetailRow, PaymentMethodData, ProductPerformance, OfferPerformance } from '@runtime/report/application/dto/report.dto';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private reportRepository: IReportRepository) {}

  getSalesSummary(request: ReportFilterRequest): SalesSummaryResult {
    this.validateDates(request.from_date, request.to_date);
    return this.reportRepository.getSalesSummary(request.from_date, request.to_date);
  }

  getSalesTrend(request: TrendFilterRequest): SalesTrendResult {
    this.validateDates(request.from_date, request.to_date);
    const dataPoints = this.reportRepository.getSalesTrend(request.grouping, request.from_date, request.to_date);
    
    return {
      grouping: request.grouping,
      dataPoints
    };
  }

  getSalesDetails(request: ReportFilterRequest): SalesDetailRow[] {
    this.validateDates(request.from_date, request.to_date);
    return this.reportRepository.getSalesDetails(request.from_date, request.to_date);
  }

  getPaymentMethodBreakdown(request: ReportFilterRequest): PaymentMethodData[] {
    this.validateDates(request.from_date, request.to_date);
    return this.reportRepository.getPaymentMethodBreakdown(request.from_date, request.to_date);
  }

  getTopProducts(request: ReportFilterRequest): ProductPerformance[] {
    this.validateDates(request.from_date, request.to_date);
    return this.reportRepository.getTopProducts(request.from_date, request.to_date, 10);
  }

  getOffersPerformance(request: ReportFilterRequest): OfferPerformance[] {
    this.validateDates(request.from_date, request.to_date);
    return this.reportRepository.getOffersPerformance(request.from_date, request.to_date);
  }

  private validateDates(from?: string, to?: string): void {
    if (from && to && from > to) {
      throw new ValidationException('from_date cannot be after to_date.');
    }
  }
}
