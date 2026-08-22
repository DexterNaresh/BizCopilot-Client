import { ProductType } from '@runtime/product/models/product.entity';

export interface BillEntity { bill_id?: string; bill_number?: string; device_id?: string; user_id?: string; session_id?: string; customer_id?: string; subtotal?: number; discount_total?: number; tax_total?: number; grand_total?: number; payment_method?: string; status?: string; created_at?: string; }
export interface BillItemEntity { bill_item_id?: string; bill_id?: string; product_id?: string; product_name?: string; product_type?: ProductType; quantity?: number; price_per_unit?: number; discount?: number; total?: number; }
