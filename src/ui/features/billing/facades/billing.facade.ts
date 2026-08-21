import { Injectable, inject } from '@angular/core';
import { SalesApplication } from '@application/contracts/sales/sales.application';
import { CompleteSaleRequest, CancelSaleRequest, ReprintBillRequest, BillInfo } from '@application/contracts/sales/sales.dto';

@Injectable({
  providedIn: 'root'
})
export class BillingFacade {
  private salesApp = inject(SalesApplication);
  private _error: string | null = null;

  get error(): string | null {
    return this._error;
  }

  async completeSale(request: CompleteSaleRequest): Promise<BillInfo | null> {
    this._error = null;
    const response = await this.salesApp.completeSale(request);
    
    if (response.success && response.data) {
      return response.data;
    } else {
      this._error = response.error?.message || 'Failed to complete sale';
      return null;
    }
  }

  async cancelSale(request: CancelSaleRequest): Promise<BillInfo | null> {
    this._error = null;
    const response = await this.salesApp.cancelSale(request);
    
    if (response.success && response.data) {
      return response.data;
    } else {
      this._error = response.error?.message || 'Failed to cancel sale';
      return null;
    }
  }

  async reprintBill(request: ReprintBillRequest): Promise<BillInfo | null> {
    this._error = null;
    const response = await this.salesApp.reprintBill(request);
    
    if (response.success && response.data) {
      return response.data;
    } else {
      this._error = response.error?.message || 'Failed to reprint bill';
      return null;
    }
  }
}
