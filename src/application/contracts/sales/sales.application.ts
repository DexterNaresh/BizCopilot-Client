import { Injectable } from '@angular/core';
import { BillingService } from '@runtime/billing/billing.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { CompleteSaleRequest, CancelSaleRequest, ReprintBillRequest, ApplicationResponse, BillInfo, CalculateOffersRequest, CalculateOffersResponse } from '@application/contracts/sales/sales.dto';
import { BillEntity } from '@runtime/billing/models/bill.entity';

import { ISessionService } from '@shared/abstractions/session.service.interface';

@Injectable({
  providedIn: 'root'
})
export class SalesApplication {
  constructor(
    private billingService: BillingService,
    private IPermissionService: IPermissionService,
    private ISessionService: ISessionService
  ) {}

  /**
   * Orchestrates the sale completion workflow.
   * Enforces permissions and standardizes the response.
   */
  completeSale(request: CompleteSaleRequest): ApplicationResponse<BillInfo> {
    try {
      // 1. Permission Check
      const currentUser = this.ISessionService.getCurrentUser();
      if (!currentUser || currentUser.id !== request.userId) {
        return {
          success: false,
          error: {
            code: 'PERMISSION_DENIED',
            message: 'Invalid session or user mismatch.'
          }
        };
      }

      const hasPermission = this.IPermissionService.hasPermission(currentUser.role, 'BILL_CREATE');
      if (!hasPermission) {
        return {
          success: false,
          error: {
            code: 'PERMISSION_DENIED',
            message: 'You do not have permission to create bills.'
          }
        };
      }

      // 2. Execute Business Logic
      const bill = this.billingService.processSale(request);

      // 3. Publish Event / Sync (Mocked for V1)
      // eventBus.publish(new BillCreatedEvent(bill));

      // 4. Return Standard Envelope
      return {
        success: true,
        data: this.mapToInfo(bill)
      };
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  evaluateOffers(request: CalculateOffersRequest): ApplicationResponse<CalculateOffersResponse> {
    try {
      const currentUser = this.ISessionService.getCurrentUser();
      if (!currentUser || currentUser.id !== request.userId) {
        return { success: false, error: { code: 'PERMISSION_DENIED', message: 'Invalid session or user mismatch.' } };
      }

      // No special permission needed to evaluate offers if they can bill
      const hasPermission = this.IPermissionService.hasPermission(currentUser.role, 'BILL_CREATE');
      if (!hasPermission) {
        return { success: false, error: { code: 'PERMISSION_DENIED', message: 'You do not have permission to evaluate offers.' } };
      }

      const applicableOffers = this.billingService.evaluateApplicableOffers(request);
      
      return {
        success: true,
        data: { applicable_offers: applicableOffers }
      };
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  cancelSale(request: CancelSaleRequest): ApplicationResponse<BillInfo> {
    try {
      const currentUser = this.ISessionService.getCurrentUser();
      if (!currentUser || currentUser.id !== request.userId) {
        return { success: false, error: { code: 'PERMISSION_DENIED', message: 'Invalid session or user mismatch.' } };
      }

      const hasPermission = this.IPermissionService.hasPermission(currentUser.role, 'BILL_CANCEL');
      if (!hasPermission) {
        return { success: false, error: { code: 'PERMISSION_DENIED', message: 'You do not have permission to cancel bills.' } };
      }

      const bill = this.billingService.cancelSale(request.billId);
      return { success: true, data: this.mapToInfo(bill) };
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  reprintBill(request: ReprintBillRequest): ApplicationResponse<BillInfo> {
    try {
      const currentUser = this.ISessionService.getCurrentUser();
      if (!currentUser || currentUser.id !== request.userId) {
        return { success: false, error: { code: 'PERMISSION_DENIED', message: 'Invalid session or user mismatch.' } };
      }

      const hasPermission = this.IPermissionService.hasPermission(currentUser.role, 'BILL_REPRINT');
      if (!hasPermission) {
        return { success: false, error: { code: 'PERMISSION_DENIED', message: 'You do not have permission to reprint bills.' } };
      }

      const bill = this.billingService.reprintBill(request.billId);
      return { success: true, data: this.mapToInfo(bill) };
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  private handleError(error: any): ApplicationResponse<any> {
      const message = error.message || 'Unknown error occurred.';
      const [code, ...msgParts] = message.split(': ');
      return {
        success: false,
        error: {
          code: msgParts.length > 0 ? code : 'UNKNOWN_ERROR',
          message: msgParts.length > 0 ? msgParts.join(': ') : message
        }
      };
  }

  private mapToInfo(entity: BillEntity): BillInfo {
    return {
      bill_id: entity.bill_id,
      bill_number: entity.bill_number,
      customer_id: entity.customer_id,
      subtotal: entity.subtotal,
      discount_total: entity.discount_total,
      tax_total: entity.tax_total,
      grand_total: entity.grand_total,
      payment_method: entity.payment_method,
      status: entity.status,
      created_at: entity.created_at
    };
  }
}
