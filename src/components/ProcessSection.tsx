import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteData';

export const ProcessSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeStep = PROCESS_STEPS[activeIndex];
  const progressFraction = (activeIndex + 1) / PROCESS_STEPS.length;

  return (
    <section id="process" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-blue-600 uppercase">
              OUR PROCESS
            </p>
            <h2 className="font-display font-bold text-slate-900 tracking-tight leading-[1.12] text-[clamp(1.85rem,3.2vw,2.75rem)] text-balance">
              From Concept to Reality, Step by Step.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Every engagement follows a disciplined seven-stage engineering lifecycle so
            milestones, quality checks, and launch dates stay predictable.
          </p>
        </motion.div>

        {/* Desktop Horizontal Connected Timeline */}
        <div className="hidden lg:block">
          <div className="relative mb-10">
            {/* Background Connector Track */}
            <div
              aria-hidden="true"
              className="absolute top-6 left-6 right-6 h-[2px] bg-slate-200"
            />
            {/* Animated Progress Indicator using compositor scaleX */}
            <motion.div
              aria-hidden="true"
              initial={false}
              animate={{ scaleX: progressFraction }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left center' }}
              className="absolute top-6 left-6 right-6 h-[2px] bg-blue-600"
            />

            <div className="relative z-10 grid grid-cols-7 gap-4">
              {PROCESS_STEPS.map((step, index) => {
                const isCompletedOrActive = index <= activeIndex;
                const isActive = index === activeIndex;
                return (
                  <button
                    key={step.stepNumber}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group text-left flex flex-col items-start cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl p-1 -m-1"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl font-mono text-sm font-bold flex items-center justify-center border transition-all duration-200 mb-4 ${
                        isActive
                          ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/25 scale-105'
                          : isCompletedOrActive
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-500 border-slate-300 group-hover:border-blue-400 group-hover:text-blue-600'
                      }`}
                    >
                      {step.stepNumber}
                    </div>
                    <h3
                      className={`font-display font-bold text-base mb-1.5 transition-colors ${
                        isActive ? 'text-blue-600' : 'text-slate-900'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Deliverable Bar */}
          <motion.div
            key={activeStep.stepNumber}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-slate-50 border border-slate-200 p-6 flex items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-600 text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                {activeStep.stepNumber}
              </div>
              <div>
                <p className="text-xs font-medium text-blue-600">
                  Stage {activeStep.stepNumber} · {activeStep.title}
                </p>
                <p className="font-display font-bold text-lg text-slate-900">
                  {activeStep.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 shrink-0">
              <div className="text-right">
                <p className="text-xs text-slate-500">Key Stage Output</p>
                <p className="text-sm font-semibold text-slate-900 inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" aria-hidden="true" />
                  <span>{activeStep.deliverable}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev + 1) % PROCESS_STEPS.length)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-slate-200 hover:border-blue-400 text-xs font-semibold text-slate-800 hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile & Tablet Vertical Connected Timeline */}
        <div className="lg:hidden relative space-y-6">
          <div
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-5 w-[2px] bg-slate-200"
          />
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="relative pl-14"
            >
              <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center border-4 border-white shadow-xs">
                {step.stepNumber}
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {step.description}
                </p>
                <p className="text-xs font-medium text-blue-600 inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{step.deliverable}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
