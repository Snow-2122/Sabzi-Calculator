export enum CalculationMode {
  ByBudget = 'ByBudget',
  ByQuantity = 'ByQuantity',
}

export type Unit = 'g' | 'kg' | 'ml' | 'L';

export interface CommonItem {
  name: string;
  refQuantity: number;
  refUnit: Unit;
}