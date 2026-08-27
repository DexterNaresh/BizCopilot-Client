export interface CategoryEntity {
  category_id: string;
  name: string;
  description?: string | null;
  icon: string;
  color_hint: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'INACTIVE';
  created_at: string;
  updated_at?: string | null;
}
