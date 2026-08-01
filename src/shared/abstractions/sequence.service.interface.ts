import { Injectable } from '@angular/core';

export enum SequenceType {
  BILL_NUMBER = 'BILL_NUMBER',
  PRODUCT_CODE = 'PRODUCT_CODE',
  PURCHASE_NUMBER = 'PURCHASE_NUMBER',
  SUPPLIER_CODE = 'SUPPLIER_CODE'
}

@Injectable()
export abstract class ISequenceService {
  abstract next(sequenceType: SequenceType): number;
}
