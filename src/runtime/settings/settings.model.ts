/**
 * Settings Domain Models & Interfaces
 * Specification: docs/specifications/Settings.md
 */

export interface BusinessProfile {
  businessName: string;
  logoUrl?: string;
  address: string;
  phone: string;
  email: string;
  currency: string;
  timezone: string;
}

export interface TaxSettings {
  gstEnabled: boolean;
  gstNumber?: string;
  gstPercentage: number;
  isInclusive: boolean;
}

export interface PaymentSettings {
  cashEnabled: boolean;
  upiEnabled: boolean;
  merchantName: string;
  merchantUpiId: string;
  qrEnabled: boolean;
  cardEnabled: boolean;
  mixedEnabled: boolean;
}

export type CustomerCapturePolicy = 'NEVER' | 'OPTIONAL' | 'ALWAYS';

export interface CustomerCaptureSettings {
  mode: CustomerCapturePolicy;
  quickCustomerEnabled: boolean;
  requirePhoneNumber: boolean;
}

export interface EmployeeAuthSettings {
  pinLength: 4 | 6;
  requirePasswordForOwner: boolean;
}

export interface ProductSettings {
  barcodeEnabled: boolean;
  cameraScannerEnabled: boolean;
  productImagesEnabled: boolean;
}

export interface PrinterSettings {
  defaultPrinter: string;
  paperWidth: number; // e.g. 58 or 80 mm
  printLogo: boolean;
  header: string;
  footer: string;
  autoPrint: boolean;
  copies: number;
}

export interface ReportSettings {
  dailyReportEnabled: boolean;
  weeklyReportEnabled: boolean;
  monthlyReportEnabled: boolean;
  reportTime: string;
  whatsappNumber: string;
  email?: string;
}

export interface ApplicationSettings {
  theme: 'light' | 'dark' | 'system';
  language: string;
  dateFormat: string;
  timeFormat: string;
  currencyFormat: string;
  autoLogoutMinutes: number;
  lockScreenEnabled: boolean;
}

export interface UserPreferences {
  dashboardWidgets: string[];
  defaultScreen: string;
  favoriteActions: string[];
  notificationSounds: boolean;
  gridSize: 'small' | 'medium' | 'large';
  recentProductsLimit: number;
}

export interface FullSettings {
  businessProfile: BusinessProfile;
  tax: TaxSettings;
  payment: PaymentSettings;
  customerCapture: CustomerCaptureSettings;
  employeeAuth: EmployeeAuthSettings;
  product: ProductSettings;
  printer: PrinterSettings;
  reports: ReportSettings;
  application: ApplicationSettings;
  userPreferences: UserPreferences;
}
