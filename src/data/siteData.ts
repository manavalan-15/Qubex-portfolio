import {
  BenefitItem,
  FaqItem,
  IndustryItem,
  NavLinkItem,
  PricingPlan,
  ProcessStep,
  ServiceItem,
  TechnologyItem,
  TestimonialItem,
} from '../types';

export const HERO_VISUAL_PATH = '/src/assets/images/hero_qubex_architecture_1794981365226.jpg';

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'technologies', label: 'Technologies', href: '#technologies' },
  { id: 'industries', label: 'Industries', href: '#industries' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'process', label: 'Our Process', href: '#process' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const HERO_HIGHLIGHTS: string[] = [
  'Innovation Driven',
  'Business Focused',
  'Technology Powered',
];

export const BENEFIT_CARDS: BenefitItem[] = [
  {
    id: 'innovation-first',
    title: 'Innovation First',
    description: 'We build modern solutions using innovative technologies.',
    iconName: 'Lightbulb',
    metricLabel: 'Modern Architecture',
  },
  {
    id: 'customer-focused',
    title: 'Customer Focused',
    description: 'Every project is designed around actual customer requirements.',
    iconName: 'Target',
    metricLabel: 'Tailored Delivery',
  },
  {
    id: 'quality-development',
    title: 'Quality Development',
    description: 'We prioritize performance, security, scalability and usability.',
    iconName: 'ShieldCheck',
    metricLabel: 'Engineering Standards',
  },
  {
    id: 'long-term-partnership',
    title: 'Long-Term Partnership',
    description: 'We support clients beyond project delivery.',
    iconName: 'Handshake',
    metricLabel: 'Continuous Support',
  },
];

export const ENGINEERING_METRICS = [
  { value: 100, suffix: '%', label: 'Custom-Engineered Codebase' },
  { value: 7, suffix: ' Steps', label: 'Structured Delivery Lifecycle' },
  { value: 19, suffix: '+', label: 'Production Stack Technologies' },
  { value: 24, suffix: '/7', label: 'Dedicated Post-Launch Support' },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    shortDescription:
      'Fast, responsive corporate websites and brand platforms engineered for search visibility, credibility, and high conversion.',
    detailedDescription:
      'We architect responsive, accessible, and SEO-ready websites tailored to represent your brand with authority across desktop, tablet, and mobile devices.',
    imageUrl: '/src/assets/images/service_website_dev_1794981366130.jpg',
    deliverables: [
      'Responsive multi-device frontend architecture',
      'Technical SEO & structured semantic markup',
      'CMS integration & performance optimization',
      'Analytics & lead capture integration',
    ],
    typicalTimeline: '3–6 Weeks',
    coreStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 'custom-software-development',
    number: '02',
    title: 'Custom Software Development',
    shortDescription:
      'Bespoke internal platforms, ERP modules, and API integrations designed around your exact operational workflows.',
    detailedDescription:
      'When off-the-shelf software limits how your teams operate, we engineer secure, scalable systems tailored to your business logic and data governance needs.',
    imageUrl: '/src/assets/images/service_custom_software_1794981365784.jpg',
    deliverables: [
      'Domain-driven system & database architecture',
      'Role-based access control & security hardening',
      'REST / third-party API integrations',
      'Automated testing & technical documentation',
    ],
    typicalTimeline: '8–16 Weeks',
    coreStack: ['Python', 'Django', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'web-application-development',
    number: '03',
    title: 'Web Application Development',
    shortDescription:
      'Interactive SaaS products, client portals, and real-time analytics dashboards built for reliability at scale.',
    detailedDescription:
      'From early-stage startup MVPs to full-featured multi-tenant SaaS platforms, we deliver fast browser applications with intuitive workflows and resilient cloud backends.',
    imageUrl: '/src/assets/images/service_web_app_1794981366613.jpg',
    deliverables: [
      'Modular component architecture & state management',
      'Authentication, billing & workspace permissions',
      'Real-time reporting & data visualization views',
      'Cloud deployment & containerized CI/CD setup',
    ],
    typicalTimeline: '6–12 Weeks',
    coreStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'mobile-application-development',
    number: '04',
    title: 'Mobile Application Development',
    shortDescription:
      'Native-feel iOS and Android applications delivering seamless performance, offline resilience, and intuitive touch UX.',
    detailedDescription:
      'We design and engineer cross-platform and native mobile experiences that keep your customers and field teams connected anywhere.',
    imageUrl: '/src/assets/images/service_mobile_app_1794981366848.jpg',
    deliverables: [
      'iOS & Android unified mobile architecture',
      'Secure API synchronization & push notifications',
      'Touch-first interface & gesture optimization',
      'App Store & Google Play release preparation',
    ],
    typicalTimeline: '8–14 Weeks',
    coreStack: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
  },
  {
    id: 'ecommerce-development',
    number: '05',
    title: 'E-Commerce Development',
    shortDescription:
      'Scalable digital storefronts with streamlined checkout, inventory syncing, and integrated payment gateways.',
    detailedDescription:
      'We build high-converting online stores engineered to handle rich product catalogs, multi-currency checkout flows, and automated order fulfillment.',
    imageUrl: '/src/assets/images/service_ecommerce_1794981368386.jpg',
    deliverables: [
      'Custom storefront & product catalog filtering',
      'Secure payment gateway & tax integration',
      'Inventory, shipping & order tracking workflows',
      'Conversion rate & mobile checkout optimization',
    ],
    typicalTimeline: '5–10 Weeks',
    coreStack: ['Next.js', 'PHP', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 'ui-ux-design',
    number: '06',
    title: 'UI/UX Design',
    shortDescription:
      'Research-backed user flows, wireframes, design systems, and interactive prototypes crafted for clarity.',
    detailedDescription:
      'Great software starts with effortless usability. We map user journeys, build interactive Figma prototypes, and establish scalable design systems before code begins.',
    imageUrl: '/src/assets/images/service_uiux_design_1794981368809.jpg',
    deliverables: [
      'User research & information architecture',
      'Low- and high-fidelity Figma wireframes',
      'Interactive clickable prototypes for stakeholder testing',
      'Component library & accessibility contrast specs',
    ],
    typicalTimeline: '2–5 Weeks',
    coreStack: ['Figma', 'Design Systems', 'Prototyping', 'WCAG AA'],
  },
  {
    id: 'digital-marketing',
    number: '07',
    title: 'Digital Marketing',
    shortDescription:
      'Data-informed SEO, performance campaigns, and content funnels designed to turn visibility into qualified pipeline.',
    detailedDescription:
      'We pair technical site performance with targeted acquisition strategies so startups and established brands reach high-intent decision makers.',
    imageUrl: '/src/assets/images/service_digital_marketing_1794981367899.jpg',
    deliverables: [
      'Technical & on-page search engine optimization',
      'Conversion landing page strategy & A/B testing',
      'Campaign analytics & attribution dashboards',
      'Lead nurturing funnel architecture',
    ],
    typicalTimeline: 'Ongoing Retainer',
    coreStack: ['Technical SEO', 'Analytics', 'Conversion CRO', 'Content'],
  },
  {
    id: 'business-automation',
    number: '08',
    title: 'Business Automation',
    shortDescription:
      'Automated data pipelines, CRM synchronization, and custom scripts that eliminate repetitive manual tasks.',
    detailedDescription:
      'We connect your CRM, billing, inventory, and reporting tools into cohesive automated workflows that reduce human error and save hours every week.',
    imageUrl: '/src/assets/images/service_automation_1794981368598.jpg',
    deliverables: [
      'Cross-platform webhook & API orchestration',
      'Automated reporting, invoicing & notifications',
      'Internal admin tools & approval workflows',
      'Monitoring, logging & error recovery pipelines',
    ],
    typicalTimeline: '3–8 Weeks',
    coreStack: ['Python', 'Node.js', 'Docker', 'PostgreSQL'],
  },
];

export const TECHNOLOGIES_LIST: TechnologyItem[] = [
  // Frontend
  { name: 'HTML', category: 'Frontend', summary: 'Semantic markup & accessibility', accentColor: '#E34F26' },
  { name: 'CSS', category: 'Frontend', summary: 'Modern responsive layouts & motion', accentColor: '#1572B6' },
  { name: 'JavaScript', category: 'Frontend', summary: 'Interactive client & runtime logic', accentColor: '#F7DF1E' },
  { name: 'React', category: 'Frontend', summary: 'Component-driven UI engineering', accentColor: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', summary: 'Full-stack SSR & edge rendering', accentColor: '#0F172A' },
  { name: 'Tailwind CSS', category: 'Frontend', summary: 'Utility-first design systems', accentColor: '#06B6D4' },
  { name: 'Bootstrap', category: 'Frontend', summary: 'Rapid responsive grid frameworks', accentColor: '#7952B3' },
  // Backend
  { name: 'Python', category: 'Backend', summary: 'Automation, APIs & data workflows', accentColor: '#3776AB' },
  { name: 'Django', category: 'Backend', summary: 'Secure, batteries-included backends', accentColor: '#092E20' },
  { name: 'Node.js', category: 'Backend', summary: 'High-concurrency event APIs', accentColor: '#339933' },
  { name: 'PHP', category: 'Backend', summary: 'Web platforms & CMS integrations', accentColor: '#777BB4' },
  // Database
  { name: 'MySQL', category: 'Database', summary: 'Reliable relational transactional store', accentColor: '#4479A1' },
  { name: 'PostgreSQL', category: 'Database', summary: 'Enterprise-grade SQL & indexing', accentColor: '#4169E1' },
  { name: 'MongoDB', category: 'Database', summary: 'Flexible document data modeling', accentColor: '#47A248' },
  // Tools
  { name: 'Git', category: 'Tools', summary: 'Distributed version control', accentColor: '#F05032' },
  { name: 'GitHub', category: 'Tools', summary: 'Code review & CI/CD pipelines', accentColor: '#181717' },
  { name: 'Figma', category: 'Tools', summary: 'Collaborative UI/UX prototyping', accentColor: '#F24E1E' },
  { name: 'VS Code', category: 'Tools', summary: 'Structured TypeScript & Python IDE', accentColor: '#007ACC' },
  { name: 'Docker', category: 'Tools', summary: 'Reproducible containerized deploys', accentColor: '#2496ED' },
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: 'retail-ecommerce',
    title: 'Retail & E-Commerce',
    description:
      'Omnichannel storefronts, inventory synchronization, and frictionless checkout experiences built to maximize order value.',
    focusArea: 'Storefronts · POS Sync',
    iconName: 'ShoppingBag',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description:
      'Patient scheduling portals, telehealth workflows, and privacy-conscious clinical management platforms.',
    focusArea: 'Patient Portals · Scheduling',
    iconName: 'HeartPulse',
  },
  {
    id: 'education',
    title: 'Education',
    description:
      'Interactive learning management systems, student dashboards, and digital assessment portals for modern institutions.',
    focusArea: 'LMS Platforms · Student Portals',
    iconName: 'GraduationCap',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description:
      'High-speed property search engines, virtual tour showcases, and automated lead routing for brokerages and developers.',
    focusArea: 'Property Portals · CRM Sync',
    iconName: 'Building2',
  },
  {
    id: 'food-hospitality',
    title: 'Food & Hospitality',
    description:
      'Table reservation systems, online ordering engines, and multi-location guest loyalty applications.',
    focusArea: 'Booking Engines · Ordering',
    iconName: 'Utensils',
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description:
      'Real-time shipment tracking dashboards, fleet dispatch portals, and warehouse automation integrations.',
    focusArea: 'Fleet Tracking · Dispatch',
    iconName: 'Truck',
  },
  {
    id: 'finance',
    title: 'Finance',
    description:
      'Secure client advisory portals, automated invoicing systems, and structured financial reporting tools.',
    focusArea: 'Client Portals · Reporting',
    iconName: 'Landmark',
  },
  {
    id: 'startups-enterprises',
    title: 'Startups & Enterprises',
    description:
      'Rapid MVP launches for emerging founders alongside scalable internal platforms for established organizations.',
    focusArea: 'MVP Launch · Enterprise Scale',
    iconName: 'Rocket',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter-plan',
    name: 'Starter Plan',
    audience: 'For small businesses and startups.',
    pricePlaceholder: '$[Starter Price]',
    billingNote: 'Editable placeholder · Fixed scope',
    features: [
      'Responsive multi-page company website',
      'Mobile-first layout & core UI/UX styling',
      'Contact & enquiry form integration',
      'On-page SEO fundamentals & speed setup',
      'Post-launch handover & documentation',
    ],
    ctaLabel: 'Select Starter Plan',
  },
  {
    id: 'growth-plan',
    name: 'Growth Plan',
    audience: 'For growing businesses requiring advanced digital solutions.',
    pricePlaceholder: '$[Growth Price]',
    billingNote: 'Editable placeholder · Milestone based',
    recommended: true,
    features: [
      'Custom web application or e-commerce build',
      'Tailored UI/UX wireframes & Figma prototype',
      'CMS, payment gateway, or CRM integration',
      'Performance optimization & analytics setup',
      'Priority QA testing & extended support window',
    ],
    ctaLabel: 'Select Growth Plan',
  },
  {
    id: 'professional-plan',
    name: 'Professional Plan',
    audience: 'For companies requiring custom software and integrations.',
    pricePlaceholder: '$[Professional Price]',
    billingNote: 'Editable placeholder · Custom scoped',
    features: [
      'Bespoke software or multi-platform mobile app',
      'Custom REST APIs & third-party ERP sync',
      'Role-based access & database architecture',
      'Automated business workflow pipelines',
      'Dedicated project lead & staging environment',
    ],
    ctaLabel: 'Select Professional Plan',
  },
  {
    id: 'enterprise-plan',
    name: 'Enterprise Plan',
    audience: 'For large-scale business solutions.',
    pricePlaceholder: '[Custom Quote]',
    billingNote: 'Editable placeholder · Dedicated team',
    features: [
      'Full-scale enterprise architecture & cloud setup',
      'Cross-functional design, engineering & QA squad',
      'Security audits, CI/CD & Docker orchestration',
      'SLA-backed ongoing maintenance & scaling',
      'Executive roadmap & quarterly tech reviews',
    ],
    ctaLabel: 'Request Enterprise Quote',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discovery',
    description: "Understand the client's requirements and business objectives.",
    deliverable: 'Requirements Brief & Stakeholder Alignment',
  },
  {
    stepNumber: '02',
    title: 'Planning',
    description: 'Define the project scope, technology and strategy.',
    deliverable: 'Architecture Blueprint & Milestone Roadmap',
  },
  {
    stepNumber: '03',
    title: 'Design',
    description: 'Create wireframes, UI designs and prototypes.',
    deliverable: 'Interactive Figma Prototype & Design System',
  },
  {
    stepNumber: '04',
    title: 'Development',
    description: 'Build the solution with modern technologies.',
    deliverable: 'Modular Frontend, API & Database Implementation',
  },
  {
    stepNumber: '05',
    title: 'Testing',
    description: 'Ensure quality, performance and security.',
    deliverable: 'Cross-Device QA, Load & Security Audits',
  },
  {
    stepNumber: '06',
    title: 'Deployment',
    description: 'Launch the completed project.',
    deliverable: 'Production Release, DNS & Monitoring Setup',
  },
  {
    stepNumber: '07',
    title: 'Maintenance',
    description: 'Provide continuous support and improvements.',
    deliverable: 'Ongoing Updates, Backups & Feature Iteration',
  },
];

export const SAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sample-1',
    clientNamePlaceholder: '[Sample Client Name 01]',
    rolePlaceholder: 'Founder / Product Lead (Placeholder)',
    companyPlaceholder: '[Sample SaaS Startup]',
    projectCategory: 'Web Application Development',
    quote:
      'Replace this editable sample testimonial with real client feedback once your launch engagement concludes. Example format: "Qubex Tech Solutions translated our early product concept into a fast, structured web application ahead of schedule."',
    initials: 'C1',
  },
  {
    id: 'sample-2',
    clientNamePlaceholder: '[Sample Client Name 02]',
    rolePlaceholder: 'Operations Director (Placeholder)',
    companyPlaceholder: '[Sample Logistics Firm]',
    projectCategory: 'Custom Software & Automation',
    quote:
      'Replace this editable sample testimonial with verified partner outcomes. Example format: "Consolidating our manual dispatch spreadsheets into a custom portal streamlined daily operations across our entire regional team."',
    initials: 'C2',
  },
  {
    id: 'sample-3',
    clientNamePlaceholder: '[Sample Client Name 03]',
    rolePlaceholder: 'Head of Commerce (Placeholder)',
    companyPlaceholder: '[Sample Retail Brand]',
    projectCategory: 'E-Commerce & UI/UX Design',
    quote:
      'Replace this editable sample testimonial with authentic customer results. Example format: "Their attention to mobile checkout clarity and clean visual hierarchy gave our online storefront a markedly smoother customer journey."',
    initials: 'C3',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What services does your company offer?',
    answer:
      'Qubex Tech Solutions provides end-to-end digital engineering and design, including Website Development, Custom Software Development, Web Application Development, Mobile Application Development, E-Commerce Development, UI/UX Design, Digital Marketing, and Business Automation.',
  },
  {
    id: 'faq-2',
    question: 'How do I start a project?',
    answer:
      'Simply submit your project details using our Contact enquiry form or select a plan in the Pricing section. We will schedule a structured Discovery session to review your goals, clarify technical scope, and provide a clear project proposal.',
  },
  {
    id: 'faq-3',
    question: 'How long does development take?',
    answer:
      'Timelines depend on complexity and scope. Focused corporate websites typically take 3 to 6 weeks, while custom web applications, e-commerce ecosystems, and mobile platforms generally span 6 to 16 weeks with transparent milestone checkpoints throughout.',
  },
  {
    id: 'faq-4',
    question: 'Do you provide custom software?',
    answer:
      'Yes. We design and engineer bespoke software tailored to your exact operational requirements—including internal dashboards, CRM/ERP integrations, multi-role portals, and automated backend workflows.',
  },
  {
    id: 'faq-5',
    question: 'Do you offer maintenance and support?',
    answer:
      'Yes. Long-term partnership is a core pillar of our work. Following deployment, we offer ongoing maintenance plans covering security patching, dependency updates, performance monitoring, and iterative feature enhancements.',
  },
  {
    id: 'faq-6',
    question: 'What technologies do you use?',
    answer:
      'We select the right stack for each project across React, Next.js, Tailwind CSS, HTML/CSS/JavaScript, Python, Django, Node.js, PHP, MySQL, PostgreSQL, MongoDB, Figma, Git/GitHub, and Docker.',
  },
  {
    id: 'faq-7',
    question: 'How much does a project cost?',
    answer:
      'Every engagement is scoped around your exact feature set, integrations, and timeline. Our four pricing tiers—Starter, Growth, Professional, and Enterprise—serve as structured starting frameworks, and we provide a detailed transparent quote after Discovery.',
  },
];

export const CONTACT_PLACEHOLDERS = {
  email: 'qubex.tech.solutions@gmail.com',
  phone: '+91 93847 54527',
  phoneHref: 'tel:+919384754527',
  whatsappDisplay: '+91 93847 54527',
  whatsappHref: 'https://wa.me/919384754527',
  location: 'Coimbatore, Tamil Nadu, India',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'X (Twitter)', href: 'https://x.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
  ],
};
