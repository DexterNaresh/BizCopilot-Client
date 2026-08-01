import { ValidationException } from '@shared/exceptions/validation.exception';
import { Injectable } from '@angular/core';
import { IReportRepository } from './repositories/report.repository.interface';
import { ReportFilterRequest, TrendFilterRequest, SalesSummaryResult, SalesTrendResult } from '@runtime/report/application/dto/report.dto';

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

  private validateDates(from?: string, to?: string): void {
    if (from && to && from > to) {
      throw new ValidationException('from_date cannot be after to_date.');
    }
  }
}
