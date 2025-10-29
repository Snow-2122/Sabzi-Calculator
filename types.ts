export enum CalculationMode {
  ByBudget = 'ByBudget',
  ByQuantity = 'ByQuantity',
}

export type Unit = 'g' | 'kg' | 'ml' | 'L';

// FIX: Add missing CommonItem interface to resolve import error in constants.ts.
export interface CommonItem {
  name: string;
  price: number;
}
