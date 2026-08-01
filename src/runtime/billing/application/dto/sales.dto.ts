export interface ApplicationResponse<T = any> { success: boolean; data?: T; error?: { code: string; message: string; }; }
export interface CompleteSaleRequest { deviceId: any; userId: string; sessionId?: string; items: any[]; customerId?: string; customer_id?: string; paymentMethod?: string; amountPaid: any; }

export interface BillItemInfo {
  bill_item_id?: string;
  product_id?: string;
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
