import type { LucideIcon } from 'lucide-react';

export interface Capability {
  id: string;
  title: string;
  description: string;
  visualConcept: string; // describes the distinct visual treatment
  icon: string; // lucide icon name
  accentColor: 'accent' | 'green';
}

export const capabilities: Capability[] = [
  {
    id: 'case-management',
    title: 'Case Management',
    description:
      'Create and manage vehicle cases from registration through completion. Every stakeholder, document and decision captured in one place.',
    visualConcept: 'timeline',
    icon: 'ClipboardList',
    accentColor: 'accent',
  },
  {
    id: 'survey-inspection',
    title: 'Survey & Inspection',
    description:
      'Capture vehicle details, damage assessment, images and inspection information. Structured data from the point of assessment.',
    visualConcept: 'schematic',
    icon: 'ScanSearch',
    accentColor: 'accent',
  },
  {
    id: 'workshop-network',
    title: 'Workshop Network',
    description:
      'Connect cases with appropriate workshops based on operational requirements. Manage network availability and assignment.',
    visualConcept: 'network',
    icon: 'Network',
    accentColor: 'accent',
  },
  {
    id: 'repair-tracking',
    title: 'Repair Tracking',
    description:
      'Monitor repair progress, milestones, documentation and updates across every active case in your network.',
    visualConcept: 'progress',
    icon: 'Activity',
    accentColor: 'accent',
  },
  {
    id: 'cost-intelligence',
    title: 'Cost Intelligence',
    description:
      'Visibility into repair-related operational costs and performance across your workshop network and case portfolio.',
    visualConcept: 'data',
    icon: 'BarChart3',
    accentColor: 'accent',
  },
  {
    id: 'carbon-intelligence',
    title: 'Carbon Intelligence',
    description:
      'Track environmental impact associated with automotive service operations. Measure and manage carbon across vehicle interventions.',
    visualConcept: 'environmental',
    icon: 'Leaf',
    accentColor: 'green',
  },
];
