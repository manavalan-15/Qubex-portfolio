/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ServicesSection } from './components/ServicesSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { PricingSection } from './components/PricingSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { FaqAndFooterSection } from './components/FaqAndFooterSection';
import { ServiceItem } from './types';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [externalSelectedService, setExternalSelectedService] =
    useState<ServiceItem | null>(null);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectServiceForProject = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    scrollToSection('contact');
  };

  const handleSelectPlan = (planName: string) => {
    const serviceMap: Record<string, string> = {
      'Starter Plan': 'Website Development',
      'Growth Plan': 'Web Application Development',
      'Professional Plan': 'Custom Software Development',
      'Enterprise Plan': 'Multiple Services / Consultation',
    };
    setPreselectedService(serviceMap[planName] || 'Multiple Services / Consultation');
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 01. Navigation */}
      <Navbar onNavigateSection={scrollToSection} />

      <main>
        {/* 02. Hero Section */}
        <HeroSection onStartProject={() => scrollToSection('contact')} />

        {/* 03. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 04. Services */}
        <ServicesSection
          onSelectServiceForProject={handleSelectServiceForProject}
          externalSelectedService={externalSelectedService}
          onClearExternalService={() => setExternalSelectedService(null)}
        />

        {/* 05. Technologies */}
        <TechnologiesSection />

        {/* 06. Industries */}
        <IndustriesSection />

        {/* 07. Pricing */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 08. Development Process */}
        <ProcessSection />

        {/* 09. Testimonials */}
        <TestimonialsSection />

        {/* 10. Call To Action */}
        <CtaSection
          onStartProject={() => scrollToSection('contact')}
          onContactTeam={() => scrollToSection('contact')}
        />

        {/* 11. Contact */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* 12. FAQ & Footer */}
      <FaqAndFooterSection
        onNavigateSection={scrollToSection}
        onOpenService={(service) => setExternalSelectedService(service)}
      />
    </div>
  );
}
