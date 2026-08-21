import { Injectable } from '@angular/core';
import { BillEntity, BillItemEntity } from '../models/bill.entity';

@Injectable()
export abstract class IBillRepository {
  abstract saveCompletedBill(bill: Omit<BillEntity, 'bill_number'>, items: BillItemEntity[], billNumber: string): BillEntity;
  abstract getBillWithItems(billId: string): { bill: BillEntity, items: BillItemEntity[] } | null;
  abstract update(id: string, bill: BillEntity): void;
}
