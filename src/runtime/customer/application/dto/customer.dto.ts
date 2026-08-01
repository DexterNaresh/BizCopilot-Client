export interface CustomerCreateRequest { userId: string; sessionId?: string; name: string; phone?: any; email?: any; }
export interface CustomerUpdateRequest { userId: string; sessionId?: string; customer_id: string; name: string; phone?: any; email?: any; }
export interface CustomerArchiveRequest { userId: string; sessionId?: string; customer_id: string; }

export interface CustomerInfo {
  customer_id: string;
  name: string;
  phone?: any;
  email?: any;
  status: 'ACTIVE' | 'ARCHIVED';
  is_system?: number;
  isSystem?: boolean;
  created_at: string;
}
