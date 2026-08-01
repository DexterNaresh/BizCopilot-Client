import { Injectable } from '@angular/core';
import { BillEntity, BillItemEntity } from '../models/bill.entity';
@Injectable()
export abstract class IDiscountCalculator { abstract calculateDiscount(subtotal: number, items: BillItemEntity[]): number; }
