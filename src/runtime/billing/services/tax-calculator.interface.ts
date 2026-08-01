import { Injectable } from '@angular/core';
import { BillEntity, BillItemEntity } from '../models/bill.entity';
@Injectable()
export abstract class ITaxCalculator { abstract calculateTax(subtotal: number, items: BillItemEntity[]): number; }
