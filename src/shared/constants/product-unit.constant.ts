export const PRODUCT_UNITS = {
  QTY: 'Qty',
  KG: 'Kg',
  LTR: 'Ltr',
  METER: 'Meter',
  PACK: 'Pack'
} as const;

export type ProductUnitKey = keyof typeof PRODUCT_UNITS;
export type ProductUnitDisplay = typeof PRODUCT_UNITS[ProductUnitKey];
