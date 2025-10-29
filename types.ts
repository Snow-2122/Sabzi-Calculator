export enum CalculationMode {
  ByBudget = 'ByBudget',
  ByQuantity = 'ByQuantity',
}

// FIX: Add missing CommonItem interface to resolve import error in constants.ts.
export interface CommonItem {
  name: string;
  price: number;
}
