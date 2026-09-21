// Network data — centralized single source of truth
// All metric values are configurable here.
// Map node positions are abstract geographic indicators only —
// they do NOT imply specific cities, depots, or facilities.

export const networkMetrics = [
  { value: '13+', label: 'Insurance Partners' },
  { value: '280+', label: 'Workshop Partners' },
  { value: '12', label: 'States & UTs' },
  { value: '20+', label: 'Repair Services' },
  { value: '16+', label: 'Vehicle Brands' },
] as const;

// Supplied coverage states
export const coverageStates = [
  'Delhi',
  'Haryana',
  'Punjab',
  'Chandigarh',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Uttarakhand',
  'Uttar Pradesh',
  'Rajasthan',
  'Madhya Pradesh',
  'Bihar',
  'Karnataka',
] as const;

export type CoverageState = (typeof coverageStates)[number];

// Map display stats
export const mapStats = {
  states: '12',
  insurancePartners: '13+',
  workshops: '280+',
} as const;
