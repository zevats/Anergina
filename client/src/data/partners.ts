// Insurance partner data — centralized single source of truth
//
// NOTE: The metric is "13+" partners. Only 10 names are currently supplied.
// The UI must NOT imply these 10 names are exhaustive.
// The partnerCount string is independently configurable.

export const partnerCount = '13+';

export const insurancePartners = [
  'HDFC ERGO',
  'ICICI Lombard',
  'Tata AIG',
  'Digit Insurance',
  'SBI General',
  'Kotak General',
  'IFFCO Tokio',
  'Zuno',
  'Reliance General',
  'Magma HDI',
] as const;

export type InsurancePartner = (typeof insurancePartners)[number];
