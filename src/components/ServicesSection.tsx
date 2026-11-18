import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Clock, Layers, X } from 'lucide-react';
import { SERVICES_LIST } from '../data/siteData';
import { ServiceItem } from '../types';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onSelectServiceForProject: (serviceTitle: string) => void;
  externalSelectedService?: ServiceItem | null;
  onClearExternalService?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForProject,
  externalSelectedService,
  onClearExternalService,
}) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const modalService = externalSelectedService || activeService;

  const closeModal = () => {
    setActiveService(null);
    if (onClearExternalService) onClearExternalService();
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-blue-600 uppercase">
              OUR SERVICES
            </p>
            <h2 className="font-display font-bold text-slate-900 tracking-tight leading-[1.12] text-[clamp(1.85rem,3.2vw,2.75rem)] text-balance">
              Everything Your Business Needs to Grow Digitally.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            From foundational web platforms to complex automated software ecosystems,
            each service is delivered with clear milestones and measurable reliability.
          </p>
        </motion.div>

        {/* 8 Image-Based Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.45,
                delay: (index % 4) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-blue-300 overflow-hidden flex flex-col transition-all duration-200 hover:shadow-xl hover:shadow-slate-200/70"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 border-b border-slate-100">
                <ResilientImage
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  fallbackLabel={service.title}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <span className="absolute top-3.5 left-3.5 font-mono text-xs font-semibold text-white bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md tabular-nums">
                  {service.number}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded whitespace-nowrap shrink-0"
                  >
                    <span>Explore Service</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                  <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
                    {service.typicalTimeline}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Interactive Service Detail Modal */}
      <AnimatePresence>
        {modalService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/65 backdrop-blur-xs"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="relative h-52 sm:h-60 bg-slate-100 shrink-0">
                <ResilientImage
                  src={modalService.imageUrl}
                  alt={modalService.title}
                  className="w-full h-full object-cover"
                  fallbackLabel={modalService.title}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"
                />
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close service details"
                  className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-slate-950/75 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <p className="font-mono text-xs text-blue-300 mb-1">
                    Service {modalService.number}
                  </p>
                  <h3
                    id="service-modal-title"
                    className="font-display font-bold text-2xl sm:text-3xl"
                  >
                    {modalService.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <p className="text-slate-600 text-base leading-relaxed">
                  {modalService.detailedDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-slate-100">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-slate-500">Typical Delivery Window</p>
                      <p className="text-sm font-semibold text-slate-900">
                        {modalService.typicalTimeline}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Layers className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-slate-500">Core Technologies</p>
                      <p className="text-sm font-semibold text-slate-900">
                        {modalService.coreStack.join(' · ')}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-semibold text-sm text-slate-900 mb-3">
                    Key Deliverables Included
                  </h4>
                  <ul className="space-y-2.5">
                    {modalService.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2
                          className="w-4 h-4 text-blue-600 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const title = modalService.title;
                      closeModal();
                      onSelectServiceForProject(title);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Start {modalService.title} Project</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
