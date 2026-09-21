// Shared TypeScript types for the Anergina website

export interface MetricItem {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export type AccentColor = 'accent' | 'green';

export type VisualConcept =
  | 'timeline'
  | 'schematic'
  | 'network'
  | 'progress'
  | 'data'
  | 'environmental';

export interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  interestedIn: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}
