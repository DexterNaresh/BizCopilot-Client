import {
  BusinessProfile,
  CustomerCaptureSettings,
  PaymentSettings,
  PrinterSettings,
  TaxSettings
} from './settings.model';

export const SETTINGS_EVENT_TYPES = {
  TAX_SETTINGS_CHANGED: 'TaxSettingsChanged',
  PAYMENT_SETTINGS_CHANGED: 'PaymentSettingsChanged',
  PRINTER_SETTINGS_CHANGED: 'PrinterSettingsChanged',
  CUSTOMER_CAPTURE_SETTINGS_CHANGED: 'CustomerCaptureSettingsChanged',
  BUSINESS_PROFILE_CHANGED: 'BusinessProfileChanged',
  FEATURE_ENABLED: 'FeatureEnabled',
  FEATURE_DISABLED: 'FeatureDisabled'
} as const;

export interface TaxSettingsChangedPayload {
  tax: TaxSettings;
}

export interface PaymentSettingsChangedPayload {
  payment: PaymentSettings;
}

export interface PrinterSettingsChangedPayload {
  printer: PrinterSettings;
}

export interface CustomerCaptureSettingsChangedPayload {
  customerCapture: CustomerCaptureSettings;
}

export interface BusinessProfileChangedPayload {
  businessProfile: BusinessProfile;
}

export interface FeatureFlagPayload {
  featureKey: string;
}
