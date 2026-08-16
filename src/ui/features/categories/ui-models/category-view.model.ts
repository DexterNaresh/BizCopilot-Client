export interface CategoryViewModel {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  status: 'active' | 'inactive';
  productCount: number;
  createdAt: Date;
}
