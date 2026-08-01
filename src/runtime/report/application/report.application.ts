import { Injectable } from '@angular/core';
import { ReportService } from '@runtime/report/report.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ApplicationResponse } from '@runtime/billing/application/dto/sales.dto';
import { ReportFilterRequest, TrendFilterRequest, SalesSummaryResult, SalesTrendResult } from '@runtime/report/application/dto/report.dto';

@Injectable({
  providedIn: 'root'
})
export class ReportApplication {
  constructor(
    private reportService: ReportService,
    private IPermissionService: IPermissionService,
    private ISessionService: ISessionService
  ) {}

  getSalesSummary(request: ReportFilterRequest): ApplicationResponse<SalesSummaryResult> {
    return this.executeWithPermission(request.userId, 'REPORT_VIEW', () => {
      return this.reportService.getSalesSummary(request);
    });
  }

  getSalesTrend(request: TrendFilterRequest): ApplicationResponse<SalesTrendResult> {
    return this.executeWithPermission(request.userId, 'REPORT_VIEW', () => {
      return this.reportService.getSalesTrend(request);
    });
  }

  private executeWithPermission<T>(userId: string, permission: any, operation: () => T): ApplicationResponse<T> {
    try {
      const currentUser = this.ISessionService.getCurrentUser();
      if (!currentUser || currentUser.id !== userId) {
        return {
          success: false,
          error: {
            code: 'PERMISSION_DENIED',
            message: 'Invalid session or user mismatch.'
          }
        };
      }

      if (!this.IPermissionService.hasPermission(currentUser.role, permission)) {
        return {
          success: false,
          error: {
            code: 'PERMISSION_DENIED',
            message: 'You do not have permission to perform this action.'
          }
        };
      }

      const result = operation();
      return {
        success: true,
        data: result
      };

    } catch (error: any) {
      const message = error.message || 'Unknown error occurred.';
      const [code, ...msgParts] = message.split(': ');
      
      return {
        success: false,
        error: {
          code: msgParts.length > 0 ? code : 'UNKNOWN_ERROR',
          message: msgParts.length > 0 ? msgParts.join(': ').trim() : message
        }
      };
    }
  }
}
