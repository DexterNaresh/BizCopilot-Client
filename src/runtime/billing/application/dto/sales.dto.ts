import { ProductType } from '@runtime/product/models/product.entity';
import { PaymentMethod } from '../../../../shared/enums/payment-method.enum';

export interface ApplicationResponse<T = any> { success: boolean; data?: T; error?: { code: string; message: string; }; }
export interface CompleteSaleRequest { 
  deviceId: any; 
  userId: string; 
  sessionId?: string; 
  items: any[]; 
  customerId?: string; 
  customer_id?: string; 
  paymentMethod?: PaymentMethod | string; 
  amountPaid: any; 
  
  // New fields for extended payment details
  paymentDetails?: {
    method: PaymentMethod;
    cashAmount?: number;
    upiAmount?: number;
    cardAmount?: number;
    referenceNumber?: string;
  };
  appliedOfferCode?: string;
}
export interface BillItemInfo {
  bill_item_id?: string;
  product_id?: string;
  product_name?: string;
  product_type?: ProductType;
  quantity?: number;
  price_per_unit?: number;
  discount?: number;
  total?: number;
}

export interface BillInfo {
  bill_id?: string;
  bill_number?: string;
  customer_id?: string;
  subtotal?: number;
  discount_total?: number;
  tax_total?: number;
  grand_total?: number;
  payment_method?: string;
  status?: string;
  created_at?: string;
  items?: BillItemInfo[];
}
