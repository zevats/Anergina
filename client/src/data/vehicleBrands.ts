// Supported vehicle brands — centralized single source of truth
// Do not imply official partnership unless verified.

export const vehicleBrands = [
  'Audi',
  'BMW',
  'Mercedes',
  'Toyota',
  'Honda',
  'Hyundai',
  'Tata',
  'Kia',
  'Skoda',
  'Volvo',
  'Ford',
  'Porsche',
  'BYD',
  'MG',
  'Nissan',
  'Volkswagen',
] as const;

export type VehicleBrand = (typeof vehicleBrands)[number];
