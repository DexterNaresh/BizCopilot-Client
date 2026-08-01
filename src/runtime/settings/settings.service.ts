import { Injectable } from '@angular/core';
import { IEventBus } from '@shared/abstractions/event-bus';
import { IConfigProvider } from '@shared/abstractions/config-provider';
import {
  ApplicationSettings,
  BusinessProfile,
  CustomerCaptureSettings,
  EmployeeAuthSettings,
  FullSettings,
  PaymentSettings,
  PrinterSettings,
  ProductSettings,
  ReportSettings,
  TaxSettings,
  UserPreferences
} from './settings.model';
import { SETTINGS_EVENT_TYPES } from './settings-events';

const DEFAULT_SETTINGS: FullSettings = {
  businessProfile: {
    businessName: 'BizCopilot Store',
    address: '123 Main St',
    phone: '9876543210',
    email: 'store@bizcopilot.com',
    currency: '₹',
    timezone: 'Asia/Kolkata'
  },
  tax: {
    gstEnabled: false,
    gstPercentage: 18,
    isInclusive: true
  },
  payment: {
    cashEnabled: true,
    upiEnabled: true,
    merchantName: 'BizCopilot Store',
    merchantUpiId: '',
    qrEnabled: true,
    cardEnabled: true,
    mixedEnabled: true
  },
  customerCapture: {
    mode: 'OPTIONAL',
    quickCustomerEnabled: true,
    requirePhoneNumber: false
  },
  employeeAuth: {
    pinLength: 4,
    requirePasswordForOwner: false
  },
  product: {
    barcodeEnabled: true,
    cameraScannerEnabled: false,
    productImagesEnabled: true
  },
  printer: {
    defaultPrinter: '',
    paperWidth: 80,
    printLogo: false,
    header: 'Thank you for shopping!',
    footer: 'Visit again!',
    autoPrint: true,
    copies: 1
  },
  reports: {
    dailyReportEnabled: true,
    weeklyReportEnabled: true,
    monthlyReportEnabled: true,
    reportTime: '21:00',
    whatsappNumber: ''
  },
  application: {
    theme: 'system',
    language: 'en',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '12h',
    currencyFormat: 'INR',
    autoLogoutMinutes: 30,
    lockScreenEnabled: false
  },
  userPreferences: {
    dashboardWidgets: ['sales', 'topProducts', 'recentTransactions'],
    defaultScreen: 'billing',
    favoriteActions: ['newSale', 'addProduct'],
    notificationSounds: true,
    gridSize: 'medium',
    recentProductsLimit: 10
  }
};

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settings: FullSettings = { ...DEFAULT_SETTINGS };

  constructor(
    private readonly eventBus: IEventBus,
    private readonly configProvider: IConfigProvider
  ) {
    this.loadFromStorage();
  }

  getSettings(): FullSettings {
    return JSON.parse(JSON.stringify(this.settings));
  }

  getBusinessProfile(): BusinessProfile {
    return { ...this.settings.businessProfile };
  }

  updateBusinessProfile(profile: Partial<BusinessProfile>): void {
    this.settings.businessProfile = { ...this.settings.businessProfile, ...profile };
    this.persistAndSync();
    this.eventBus.publish(SETTINGS_EVENT_TYPES.BUSINESS_PROFILE_CHANGED, {
      businessProfile: this.getBusinessProfile()
    });
  }

  getTaxSettings(): TaxSettings {
    return { ...this.settings.tax };
  }

  updateTaxSettings(tax: Partial<TaxSettings>): void {
    this.settings.tax = { ...this.settings.tax, ...tax };
    this.persistAndSync();
    this.eventBus.publish(SETTINGS_EVENT_TYPES.TAX_SETTINGS_CHANGED, {
      tax: this.getTaxSettings()
    });
  }

  getPaymentSettings(): PaymentSettings {
    return { ...this.settings.payment };
  }

  updatePaymentSettings(payment: Partial<PaymentSettings>): void {
    this.settings.payment = { ...this.settings.payment, ...payment };
    this.persistAndSync();
    this.eventBus.publish(SETTINGS_EVENT_TYPES.PAYMENT_SETTINGS_CHANGED, {
      payment: this.getPaymentSettings()
    });
  }

  getCustomerCaptureSettings(): CustomerCaptureSettings {
    return { ...this.settings.customerCapture };
  }

  updateCustomerCaptureSettings(customerCapture: Partial<CustomerCaptureSettings>): void {
    this.settings.customerCapture = { ...this.settings.customerCapture, ...customerCapture };
    this.persistAndSync();
    this.eventBus.publish(SETTINGS_EVENT_TYPES.CUSTOMER_CAPTURE_SETTINGS_CHANGED, {
      customerCapture: this.getCustomerCaptureSettings()
    });
  }

  getPrinterSettings(): PrinterSettings {
    return { ...this.settings.printer };
  }

  updatePrinterSettings(printer: Partial<PrinterSettings>): void {
    this.settings.printer = { ...this.settings.printer, ...printer };
    this.persistAndSync();
    this.eventBus.publish(SETTINGS_EVENT_TYPES.PRINTER_SETTINGS_CHANGED, {
      printer: this.getPrinterSettings()
    });
  }

  getEmployeeAuthSettings(): EmployeeAuthSettings {
    return { ...this.settings.employeeAuth };
  }

  getProductSettings(): ProductSettings {
    return { ...this.settings.product };
  }

  getReportSettings(): ReportSettings {
    return { ...this.settings.reports };
  }

  getApplicationSettings(): ApplicationSettings {
    return { ...this.settings.application };
  }

  getUserPreferences(): UserPreferences {
    return { ...this.settings.userPreferences };
  }

  private persistAndSync(): void {
    localStorage.setItem('bizcopilot_full_settings', JSON.stringify(this.settings));
    this.configProvider.set('businessName', this.settings.businessProfile.businessName);
    this.configProvider.set('currency', this.settings.businessProfile.currency);
    this.configProvider.set('gstEnabled', this.settings.tax.gstEnabled);
    this.configProvider.set('gstPercentage', this.settings.tax.gstPercentage);
    this.configProvider.set('gstInclusive', this.settings.tax.isInclusive);
    this.configProvider.set('customerCaptureMode', this.settings.customerCapture.mode);
    this.configProvider.set('cashEnabled', this.settings.payment.cashEnabled);
    this.configProvider.set('upiEnabled', this.settings.payment.upiEnabled);
    this.configProvider.set('merchantUpiId', this.settings.payment.merchantUpiId);
    this.configProvider.set('cardEnabled', this.settings.payment.cardEnabled);
    this.configProvider.set('pinLength', this.settings.employeeAuth.pinLength);
  }

  private loadFromStorage(): void {
    const raw = localStorage.getItem('bizcopilot_full_settings');
    if (raw) {
      try {
        this.settings = { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
      } catch {
        this.settings = { ...DEFAULT_SETTINGS };
      }
    }
  }
}
