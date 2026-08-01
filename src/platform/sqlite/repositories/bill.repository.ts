import { Injectable } from '@angular/core';
import { BaseRepository } from '../base.repository';
import { BillEntity, BillItemEntity } from '@runtime/billing/models/bill.entity';
import { DatabaseService } from '../database.service';
import { IBillRepository } from '@runtime/billing/repositories/bill.repository.interface';

@Injectable({
  providedIn: 'root'
})
export class SqliteBillRepository extends BaseRepository<BillEntity> implements IBillRepository {
  constructor(db: DatabaseService) {
    super(db, 'bills', 'bill_id');
  }

  saveCompletedBill(bill: Omit<BillEntity, 'bill_number'>, items: BillItemEntity[], billNumber: string): BillEntity {
    const finalBill: BillEntity = {
      ...bill,
      bill_number: billNumber
    };
    
    this.create(finalBill);
    
    items.forEach(item => {
      const keys = Object.keys(item);
      const values = Object.values(item);
      const columns = keys.join(', ');
      const placeholders = keys.map(() => '?').join(', ');
      const sql = `INSERT INTO bill_items (${columns}) VALUES (${placeholders})`;
      this.db.execute(sql, values);
    });
    
    return finalBill;
  }

  getBillWithItems(billId: string): { bill: BillEntity, items: BillItemEntity[] } | null {
    const bill = this.findById(billId);
    if (!bill) return null;
    
    const sql = `SELECT * FROM bill_items WHERE bill_id = ?`;
    const items = this.db.query<BillItemEntity>(sql, [billId]);
    
    return { bill, items };
  }
}
