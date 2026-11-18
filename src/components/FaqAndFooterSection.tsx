import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Mail, MapPin, Phone, X } from 'lucide-react';
import { CONTACT_PLACEHOLDERS, FAQ_ITEMS, SERVICES_LIST } from '../data/siteData';
import { ServiceItem } from '../types';
import { BrandLogo } from './BrandLogo';

interface FaqAndFooterSectionProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenService: (service: ServiceItem) => void;
}

export const FaqAndFooterSection: React.FC<FaqAndFooterSectionProps> = ({
  onNavigateSection,
  onOpenService,
}) => {
  // Strictly allow only one FAQ item open at a time
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((current) => (current === id ? null : id));
  };

  return (
    <>
      {/* Part A: FAQ Accordion */}
      <section id="faq" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-3 mb-12"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-blue-600 uppercase">
              FAQ
            </p>
            <h2 className="font-display font-bold text-slate-900 tracking-tight leading-[1.12] text-[clamp(1.85rem,3.2vw,2.75rem)] text-balance">
              Frequently Asked Questions.
            </h2>
          </motion.div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border transition-colors ${
                    isOpen
                      ? 'bg-white border-blue-300 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
                  >
                    <span className="font-display font-semibold text-base text-slate-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${item.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Part B: 4-Column Footer */}
      <footer className="bg-[#070C18] text-slate-300 pt-16 pb-10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/90">
            {/* Column 1: Logo, Description & Social Icons */}
            <div className="lg:col-span-4 space-y-5">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection('home');
                }}
                className="inline-block"
              >
                <BrandLogo lightText size="md" />
              </a>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Qubex Tech Solutions is a modern software and digital solutions startup
                helping startups, small businesses, and enterprises build dependable
                digital products.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {CONTACT_PLACEHOLDERS.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: All Services */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-display font-semibold text-sm text-white">Services</h3>
              <ul className="space-y-2.5">
                {SERVICES_LIST.map((service) => (
                  <li key={service.id}>
                    <button
                      type="button"
                      onClick={() => {
                        onNavigateSection('services');
                        onOpenService(service);
                      }}
                      className="text-sm text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company Navigation */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-display font-semibold text-sm text-white">Company</h3>
              <ul className="space-y-2.5">
                {[
                  { id: 'about', label: 'About Us' },
                  { id: 'process', label: 'Our Process' },
                  { id: 'pricing', label: 'Pricing' },
                  { id: 'industries', label: 'Industries' },
                  { id: 'contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateSection(link.id);
                      }}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Placeholders & Socials */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-display font-semibold text-sm text-white">Contact</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <a
                    href={`mailto:${CONTACT_PLACEHOLDERS.email}`}
                    className="break-all hover:text-white transition-colors"
                  >
                    {CONTACT_PLACEHOLDERS.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <a
                    href={CONTACT_PLACEHOLDERS.phoneHref}
                    className="tabular-nums hover:text-white transition-colors"
                  >
                    {CONTACT_PLACEHOLDERS.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{CONTACT_PLACEHOLDERS.location}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Legal Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>Copyright &copy; 2026 Qubex Tech Solutions. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-slate-200 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => setLegalModal('terms')}
                className="hover:text-slate-200 transition-colors cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Information Modal */}
      <AnimatePresence>
        {legalModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLegalModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-white text-slate-900 border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 id="legal-modal-title" className="font-display font-bold text-xl">
                  {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                </h3>
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  aria-label="Close legal notice"
                  className="w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                {legalModal === 'privacy' ? (
                  <>
                    <p>
                      Qubex Tech Solutions respects your privacy. Information submitted
                      through our project enquiry form (such as your name, email address,
                      phone number, and project scope) is used solely to evaluate and
                      respond to your business request.
                    </p>
                    <p>
                      We never sell or distribute client enquiry data to third-party
                      brokers. Replace this policy placeholder with your jurisdiction&apos;s
                      formal privacy disclosures prior to public launch.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      All project scopes, deliverables, timelines, and pricing tiers
                      presented on the Qubex Tech Solutions website serve as an overview
                      and are finalized via written Statement of Work (SOW) prior to
                      project kickoff.
                    </p>
                    <p>
                      Replace this terms placeholder with your company&apos;s official
                      service agreement and governing law terms prior to commercial launch.
                    </p>
                  </>
                )}
              </div>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
