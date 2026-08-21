export interface ApplicationResponse<T = any> { success: boolean; data?: T; error?: { code: string; message: string; }; }

export interface SaleItemRequest {
  productId: string;
  quantity: number;
}

export interface CompleteSaleRequest { operationId?: string; deviceId: string; userId: string; sessionId?: string; items: SaleItemRequest[]; customerId?: string; customer_id?: string; paymentMethod?: string; amountPaid: number; appliedOfferIds?: string[]; }

export interface CalculateOffersRequest {
  userId: string;
  items: SaleItemRequest[];
}

export interface OfferCandidateDto {
  offer_id: string;
  name: string;
  description: string;
  discount_amount: number;
  category: string;
  requires_operator_selection: boolean;
  conflicting_offer_ids?: string[];
}

export interface CalculateOffersResponse {
  applicable_offers: OfferCandidateDto[];
}

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

export interface CancelSaleRequest {
  userId: string;
  billId: string;
}

export interface ReprintBillRequest {
  userId: string;
  billId: string;
}
