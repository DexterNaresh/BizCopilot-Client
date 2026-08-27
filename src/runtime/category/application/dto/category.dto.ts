export interface CategoryCreateRequest {
  userId: string;
  sessionId?: string;
  name: string;
  description?: string | null;
  icon: string;
  color_hint: string;
}

export interface CategoryUpdateRequest {
  userId: string;
  sessionId?: string;
  category_id: string;
  name: string;
  description?: string | null;
  icon: string;
  color_hint: string;
}

export interface CategoryArchiveRequest {
  userId: string;
  category_id: string;
}

export interface CategoryStatusRequest {
  userId: string;
  category_id: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'INACTIVE';
}

export interface CategoryInfo {
  category_id: string;
  name: string;
  description?: string | null;
  icon: string;
  color_hint: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'INACTIVE';
  created_at: string;
}
