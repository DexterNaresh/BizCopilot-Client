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
    console.log('[DatabaseSeeder] Seeding café demo data...');
    this.seedCategories();
    this.seedProducts();
    console.log('[DatabaseSeeder] Café demo data seeded successfully.');
  }

  private seedCategories() {
    const categories = [
      { name: 'Hot Coffee', icon: 'local_cafe', color: '#FEF3C7' },
      { name: 'Cold Coffee', icon: 'icecream', color: '#E0E7FF' },
      { name: 'Tea & Chai', icon: 'local_drink', color: '#D1FAE5' },
      { name: 'Smoothies & Shakes', icon: 'water_drop', color: '#FFEDD5' },
      { name: 'Pastries', icon: 'bakery_dining', color: '#F3E8FF' },
      { name: 'Sandwiches & Wraps', icon: 'fastfood', color: '#FEF9C3' },
      { name: 'Desserts', icon: 'cake', color: '#FCE7F3' },
      { name: 'Snacks', icon: 'set_meal', color: '#ECFDF5' },
      { name: 'Fresh Juices', icon: 'eco', color: '#FFF7ED' },
      { name: 'Add-ons & Extras', icon: 'local_offer', color: '#F1F5F9' }
    ];

    for (const cat of categories) {
      const id = this.identityService.generateId();

      this.dbService.execute(`
        INSERT OR IGNORE INTO categories (category_id, name, description, icon, color_hint, status, created_at)
        VALUES (?, ?, ?, ?, ?, 'ACTIVE', datetime('now'))
      `, [id, cat.name, null, cat.icon, cat.color]);
    }
  }

  private seedProducts() {
    const testProducts = [
      // ── Hot Coffee ──
      { name: 'Espresso',              type: 'QTY',  price: 120,  category: 'Hot Coffee' },
      { name: 'Americano',             type: 'QTY',  price: 150,  category: 'Hot Coffee' },
      { name: 'Cappuccino',            type: 'QTY',  price: 180,  category: 'Hot Coffee' },
      { name: 'Café Latte',            type: 'QTY',  price: 200,  category: 'Hot Coffee' },
      { name: 'Flat White',            type: 'QTY',  price: 220,  category: 'Hot Coffee' },
      { name: 'Caramel Macchiato',     type: 'QTY',  price: 250,  category: 'Hot Coffee' },
      { name: 'Mocha',                 type: 'QTY',  price: 230,  category: 'Hot Coffee' },

      // ── Cold Coffee ──
      { name: 'Iced Americano',        type: 'QTY',  price: 180,  category: 'Cold Coffee' },
      { name: 'Iced Latte',            type: 'QTY',  price: 220,  category: 'Cold Coffee' },
      { name: 'Cold Brew',             type: 'QTY',  price: 250,  category: 'Cold Coffee' },
      { name: 'Frappe',                type: 'QTY',  price: 260,  category: 'Cold Coffee' },
      { name: 'Iced Mocha',            type: 'QTY',  price: 250,  category: 'Cold Coffee' },
      { name: 'Affogato',              type: 'QTY',  price: 280,  category: 'Cold Coffee' },

      // ── Tea & Chai ──
      { name: 'Masala Chai',           type: 'QTY',  price: 60,   category: 'Tea & Chai' },
      { name: 'Green Tea',             type: 'QTY',  price: 100,  category: 'Tea & Chai' },
      { name: 'Lemon Iced Tea',        type: 'QTY',  price: 120,  category: 'Tea & Chai' },
      { name: 'Matcha Latte',          type: 'QTY',  price: 220,  category: 'Tea & Chai' },
      { name: 'Chamomile Tea',         type: 'QTY',  price: 140,  category: 'Tea & Chai' },

      // ── Smoothies & Shakes ──
      { name: 'Mango Smoothie',        type: 'QTY',  price: 200,  category: 'Smoothies & Shakes' },
      { name: 'Berry Blast Smoothie',  type: 'QTY',  price: 220,  category: 'Smoothies & Shakes' },
      { name: 'Chocolate Milkshake',   type: 'QTY',  price: 180,  category: 'Smoothies & Shakes' },
      { name: 'Oreo Shake',            type: 'QTY',  price: 220,  category: 'Smoothies & Shakes' },
      { name: 'Peanut Butter Shake',   type: 'QTY',  price: 240,  category: 'Smoothies & Shakes' },

      // ── Pastries ──
      { name: 'Butter Croissant',      type: 'QTY',  price: 120,  category: 'Pastries' },
      { name: 'Chocolate Muffin',      type: 'QTY',  price: 100,  category: 'Pastries' },
      { name: 'Blueberry Scone',       type: 'QTY',  price: 130,  category: 'Pastries' },
      { name: 'Cinnamon Roll',         type: 'QTY',  price: 140,  category: 'Pastries' },
      { name: 'Almond Danish',         type: 'QTY',  price: 150,  category: 'Pastries' },
      { name: 'Banana Bread Slice',    type: 'QTY',  price: 90,   category: 'Pastries' },

      // ── Sandwiches & Wraps ──
      { name: 'Grilled Cheese Sandwich',   type: 'QTY',  price: 160,  category: 'Sandwiches & Wraps' },
      { name: 'Chicken Club Sandwich',     type: 'QTY',  price: 220,  category: 'Sandwiches & Wraps' },
      { name: 'Paneer Tikka Wrap',         type: 'QTY',  price: 200,  category: 'Sandwiches & Wraps' },
      { name: 'Egg & Mayo Sandwich',       type: 'QTY',  price: 140,  category: 'Sandwiches & Wraps' },
      { name: 'Veggie Wrap',               type: 'QTY',  price: 180,  category: 'Sandwiches & Wraps' },

      // ── Desserts ──
      { name: 'Chocolate Brownie',     type: 'QTY',  price: 130,  category: 'Desserts' },
      { name: 'Cheesecake Slice',      type: 'QTY',  price: 200,  category: 'Desserts' },
      { name: 'Tiramisu',              type: 'QTY',  price: 250,  category: 'Desserts' },
      { name: 'Red Velvet Cake',       type: 'QTY',  price: 180,  category: 'Desserts' },
      { name: 'Fruit Tart',            type: 'QTY',  price: 170,  category: 'Desserts' },

      // ── Snacks ──
      { name: 'French Fries',          type: 'QTY',  price: 120,  category: 'Snacks' },
      { name: 'Garlic Bread',          type: 'QTY',  price: 100,  category: 'Snacks' },
      { name: 'Nachos with Salsa',     type: 'QTY',  price: 180,  category: 'Snacks' },
      { name: 'Bruschetta',            type: 'QTY',  price: 160,  category: 'Snacks' },

      // ── Fresh Juices ──
      { name: 'Orange Juice',          type: 'QTY',  price: 120,  category: 'Fresh Juices' },
      { name: 'Watermelon Juice',      type: 'QTY',  price: 100,  category: 'Fresh Juices' },
      { name: 'Apple Juice',           type: 'QTY',  price: 130,  category: 'Fresh Juices' },
      { name: 'Pineapple Juice',       type: 'QTY',  price: 120,  category: 'Fresh Juices' },

      // ── Add-ons & Extras ──
      { name: 'Extra Espresso Shot',   type: 'QTY',  price: 50,   category: 'Add-ons & Extras' },
      { name: 'Oat Milk Upgrade',      type: 'QTY',  price: 40,   category: 'Add-ons & Extras' },
      { name: 'Whipped Cream',         type: 'QTY',  price: 30,   category: 'Add-ons & Extras' },
      { name: 'Caramel Syrup',         type: 'QTY',  price: 30,   category: 'Add-ons & Extras' },
      { name: 'Hazelnut Syrup',        type: 'QTY',  price: 30,   category: 'Add-ons & Extras' },
      { name: 'Vanilla Syrup',         type: 'QTY',  price: 30,   category: 'Add-ons & Extras' },
      { name: 'Chocolate Sauce Drizzle', type: 'QTY', price: 25,  category: 'Add-ons & Extras' }
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

    // Update the sequence
    this.dbService.execute(`UPDATE sequences SET next_value = ? WHERE sequence_name = 'PRODUCT_CODE'`, [codeSeq]);
  }
}
