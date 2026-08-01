import { Injectable } from '@angular/core';
import { SettingsService } from '@runtime/settings/settings.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ApplicationResponse } from '@runtime/billing/application/dto/sales.dto';
import {
  BusinessProfile,
  CustomerCaptureSettings,
  FullSettings,
  PaymentSettings,
  PrinterSettings,
  TaxSettings
} from '@runtime/settings/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsApplication {
  constructor(
    private readonly settingsService: SettingsService,
    private readonly IPermissionService: IPermissionService,
    private readonly ISessionService: ISessionService
  ) {}

  getSettings(userId: string): ApplicationResponse<FullSettings> {
    return this.executeWithPermission(userId, 'SETTINGS_VIEW', () => {
      return this.settingsService.getSettings();
    });
  }

  updateBusinessProfile(userId: string, profile: Partial<BusinessProfile>): ApplicationResponse<BusinessProfile> {
    return this.executeWithPermission(userId, 'SETTINGS_MANAGE', () => {
      this.settingsService.updateBusinessProfile(profile);
      return this.settingsService.getBusinessProfile();
    });
  }

  updateTaxSettings(userId: string, tax: Partial<TaxSettings>): ApplicationResponse<TaxSettings> {
    return this.executeWithPermission(userId, 'SETTINGS_MANAGE', () => {
      this.settingsService.updateTaxSettings(tax);
      return this.settingsService.getTaxSettings();
    });
  }

  updatePaymentSettings(userId: string, payment: Partial<PaymentSettings>): ApplicationResponse<PaymentSettings> {
    return this.executeWithPermission(userId, 'SETTINGS_MANAGE', () => {
      this.settingsService.updatePaymentSettings(payment);
      return this.settingsService.getPaymentSettings();
    });
  }

  updateCustomerCaptureSettings(userId: string, customerCapture: Partial<CustomerCaptureSettings>): ApplicationResponse<CustomerCaptureSettings> {
    return this.executeWithPermission(userId, 'SETTINGS_MANAGE', () => {
      this.settingsService.updateCustomerCaptureSettings(customerCapture);
      return this.settingsService.getCustomerCaptureSettings();
    });
  }

  updatePrinterSettings(userId: string, printer: Partial<PrinterSettings>): ApplicationResponse<PrinterSettings> {
    return this.executeWithPermission(userId, 'SETTINGS_MANAGE', () => {
      this.settingsService.updatePrinterSettings(printer);
      return this.settingsService.getPrinterSettings();
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
      return {
        success: false,
        error: {
          code: 'UNKNOWN_ERROR',
          message
        }
      };
    }
  }
}
