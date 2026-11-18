import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { PRICING_PLANS } from '../data/siteData';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-blue-600 uppercase">
            OUR PRICING
          </p>
          <h2 className="font-display font-bold text-slate-900 tracking-tight leading-[1.12] text-[clamp(1.85rem,3.2vw,2.75rem)] text-balance">
            Choose the Right Solution for Your Business.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Structured engagement tiers built for startups through enterprises. All
            pricing slots below are editable placeholders tailored to your final project
            scope.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const isRecommended = Boolean(plan.recommended);
            return (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 ${
                  isRecommended
                    ? 'bg-slate-900 text-white border-2 border-blue-500 shadow-2xl shadow-blue-950/20'
                    : 'bg-white text-slate-900 border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-slate-200/60'
                }`}
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3
                      className={`font-display font-bold text-xl ${
                        isRecommended ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    {isRecommended && (
                      <span className="text-xs font-semibold text-blue-400 tracking-wide">
                        Recommended
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-sm leading-relaxed min-h-[40px] ${
                      isRecommended ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {plan.audience}
                  </p>

                  {/* Editable Price Placeholder */}
                  <div
                    className={`my-6 py-5 border-y ${
                      isRecommended ? 'border-slate-800' : 'border-slate-100'
                    }`}
                  >
                    <p
                      className={`font-display font-bold text-2xl sm:text-[26px] tracking-tight tabular-nums ${
                        isRecommended ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {plan.pricePlaceholder}
                    </p>
                    <p
                      className={`mt-1 text-xs ${
                        isRecommended ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {plan.billingNote}
                    </p>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isRecommended ? 'text-blue-400' : 'text-blue-600'
                          }`}
                          aria-hidden="true"
                        />
                        <span className={isRecommended ? 'text-slate-200' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isRecommended
                      ? 'bg-blue-600 hover:bg-blue-500 text-white'
                      : 'bg-slate-900 hover:bg-blue-600 text-white'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
