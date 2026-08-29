import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { IIdentityService } from '@shared/abstractions/identity.service.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseSeederService {
  constructor(
    private dbService: DatabaseService,
    private identityService: IIdentityService
  ) {}

  seed(): void {
    console.log('[DatabaseSeeder] Seeding test data...');
    this.seedCategories();
    this.seedProducts();
    console.log('[DatabaseSeeder] Test data seeded successfully.');
  }

  private seedCategories() {
    const categories = [
      { name: 'Vegetables', icon: 'grass' },
      { name: 'Fruits', icon: 'apple' },
      { name: 'Grocery', icon: 'local_grocery_store' },
      { name: 'Dairy', icon: 'local_drink' },
      { name: 'Beverages', icon: 'emoji_food_beverage' },
      { name: 'Personal Care', icon: 'spa' },
      { name: 'Hardware', icon: 'build' },
      { name: 'Oil & Ghee', icon: 'opacity' },
      { name: 'Snacks', icon: 'local_pizza' },
      { name: 'Bakery', icon: 'cake' },
      { name: 'Electronics', icon: 'devices' },
      { name: 'Stationery', icon: 'edit' }
    ];

    for (const cat of categories) {
      const id = this.identityService.generateId();
      const color = this.getColorForCategory(cat.name);
      
      this.dbService.execute(`
        INSERT OR IGNORE INTO categories (category_id, name, description, icon, color_hint, status, created_at)
        VALUES (?, ?, ?, ?, ?, 'ACTIVE', datetime('now'))
      `, [id, cat.name, null, cat.icon, color]);
    }
  }

  private seedProducts() {
    const testProducts = [
      // Vegetables
      { name: 'Carrot', type: 'KG', price: 80.00, category: 'Vegetables' },
      { name: 'Potato', type: 'KG', price: 35.00, category: 'Vegetables' },
      { name: 'Onion', type: 'KG', price: 40.00, category: 'Vegetables' },
      // Fruits
      { name: 'Apple', type: 'KG', price: 150.00, category: 'Fruits' },
      { name: 'Banana', type: 'QTY', price: 5.00, category: 'Fruits' },
      { name: 'Mango', type: 'KG', price: 120.00, category: 'Fruits' },
      // Grocery
      { name: 'Basmati Rice', type: 'KG', price: 120.00, category: 'Grocery' },
      { name: 'Sugar', type: 'KG', price: 45.00, category: 'Grocery' },
      { name: 'Salt 1kg', type: 'PACK', price: 20.00, category: 'Grocery' },
      // Oil & Ghee
      { name: 'Cooking Oil', type: 'LTR', price: 180.00, category: 'Oil & Ghee' },
      { name: 'Pure Ghee', type: 'KG', price: 600.00, category: 'Oil & Ghee' },
      // Dairy
      { name: 'Amul Milk 1L', type: 'PACK', price: 61.00, category: 'Dairy' },
      { name: 'Fresh Paneer', type: 'KG', price: 350.00, category: 'Dairy' },
      { name: 'Curd 500g', type: 'PACK', price: 30.00, category: 'Dairy' },
      // Beverages
      { name: 'Tata Tea Premium 250g', type: 'PACK', price: 140.00, category: 'Beverages' },
      { name: 'Coca Cola 500ml', type: 'QTY', price: 35.00, category: 'Beverages' },
      // Personal Care
      { name: 'Lux Soap 125g', type: 'PACK', price: 45.00, category: 'Personal Care' },
      { name: 'Shampoo 500ml', type: 'QTY', price: 250.00, category: 'Personal Care' },
      // Hardware
      { name: 'Electrical Wire', type: 'METER', price: 45.00, category: 'Hardware' },
      { name: 'Screwdriver Set', type: 'QTY', price: 150.00, category: 'Hardware' },
      // Snacks
      { name: 'Parle-G Biscuit 150g', type: 'PACK', price: 20.00, category: 'Snacks' },
      { name: 'Lays Classic Salted', type: 'PACK', price: 10.00, category: 'Snacks' },
      // Bakery
      { name: 'Brown Bread', type: 'PACK', price: 40.00, category: 'Bakery' },
      // Electronics
      { name: 'USB-C Cable', type: 'QTY', price: 199.00, category: 'Electronics' },
      // Stationery
      { name: 'Ruled Notebook', type: 'QTY', price: 50.00, category: 'Stationery' }
    ];

    let codeSeq = 1;
    for (const p of testProducts) {
      const id = this.identityService.generateId();
      const code = 'PRD-' + codeSeq.toString().padStart(4, '0');
      codeSeq++;
      
      this.dbService.execute(`
        INSERT OR IGNORE INTO products (product_id, product_code, name, type, price, category, barcode, available, status, created_at)
        VALUES (?, ?, ?, ?, ?, ?, NULL, 1, 'ACTIVE', datetime('now'))
      `, [id, code, p.name, p.type, p.price, p.category]);
    }
    
    // Update the sequence sequence_name = 'PRODUCT_CODE' to codeSeq
    this.dbService.execute(`UPDATE sequences SET next_value = ? WHERE sequence_name = 'PRODUCT_CODE'`, [codeSeq]);
  }

  private getColorForCategory(cat: string): string {
    const colors = ['#F3E8FF', '#FEF3C7', '#E0E7FF', '#D1FAE5', '#FFEDD5'];
    const hash = cat.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  }
}
