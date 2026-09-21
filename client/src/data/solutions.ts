export interface StakeholderSolution {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  capabilities: string[];
  workflow: string[];
}

export const solutions: StakeholderSolution[] = [
  {
    id: 'insurers',
    label: 'Insurance Companies',
    shortLabel: 'Insurer',
    description:
      'Manage vehicle service operations with full visibility across surveyors, workshops and cases. Coordinate the entire intervention from a single operational view.',
    capabilities: [
      'Case portfolio visibility',
      'Workshop network management',
      'Cost intelligence',
      'Carbon reporting',
      'Surveyor coordination',
    ],
    workflow: [
      'Register vehicle case',
      'Assign surveyor',
      'Receive inspection report',
      'Approve workshop assignment',
      'Monitor repair progress',
      'Review completion and delivery',
    ],
  },
  {
    id: 'surveyors',
    label: 'Surveyors',
    shortLabel: 'Surveyor',
    description:
      'Create cases, document inspections and track progress across your active portfolio. Capture damage assessments and transmit structured data directly into the case workflow.',
    capabilities: [
      'Case creation',
      'Vehicle inspection documentation',
      'Damage assessment capture',
      'Image and document management',
      'Progress tracking',
    ],
    workflow: [
      'Receive case assignment',
      'Conduct vehicle inspection',
      'Document damage assessment',
      'Submit inspection report',
      'Track case through repair',
    ],
  },
  {
    id: 'workshops',
    label: 'Workshops',
    shortLabel: 'Workshop',
    description:
      'Receive and manage repair cases while keeping all stakeholders updated throughout the repair lifecycle. Coordinate operations and communicate milestones in real time.',
    capabilities: [
      'Case reception',
      'Repair milestone tracking',
      'Stakeholder communication',
      'Documentation management',
      'Delivery coordination',
    ],
    workflow: [
      'Receive workshop assignment',
      'Accept and schedule repair',
      'Update repair milestones',
      'Document repair progress',
      'Quality check and delivery',
      'Case closure',
    ],
  },
  {
    id: 'customers',
    label: 'Customers',
    shortLabel: 'Customer',
    description:
      'Gain visibility into vehicle repair progress and expected delivery. Stay informed at each stage without needing to chase updates across multiple stakeholders.',
    capabilities: [
      'Repair progress visibility',
      'Stage-by-stage updates',
      'Delivery tracking',
      'Case status transparency',
    ],
    workflow: [
      'Case registered for vehicle',
      'Workshop assigned',
      'Repair in progress',
      'Quality check',
      'Vehicle delivered',
    ],
  },
];
