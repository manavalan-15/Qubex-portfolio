export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Lightbulb' | 'Target' | 'ShieldCheck' | 'Handshake';
  metricLabel: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  imageUrl: string;
  deliverables: string[];
  typicalTimeline: string;
  coreStack: string[];
}

export type TechCategory = 'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools';

export interface TechnologyItem {
  name: string;
  category: Exclude<TechCategory, 'All'>;
  summary: string;
  accentColor: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  focusArea: string;
  iconName:
    | 'ShoppingBag'
    | 'HeartPulse'
    | 'GraduationCap'
    | 'Building2'
    | 'Utensils'
    | 'Truck'
    | 'Landmark'
    | 'Rocket';
}

export interface PricingPlan {
  id: string;
  name: string;
  audience: string;
  pricePlaceholder: string;
  billingNote: string;
  recommended?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface TestimonialItem {
  id: string;
  clientNamePlaceholder: string;
  rolePlaceholder: string;
  companyPlaceholder: string;
  projectCategory: string;
  quote: string;
  initials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  companyName: string;
  serviceRequired: string;
}
