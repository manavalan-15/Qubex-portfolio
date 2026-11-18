import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Rocket,
  ShoppingBag,
  Truck,
  Utensils,
} from 'lucide-react';
import { INDUSTRIES_LIST } from '../data/siteData';
import { IndustryItem } from '../types';

const industryIconMap: Record<IndustryItem['iconName'], React.FC<{ className?: string }>> = {
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Building2,
  Utensils,
  Truck,
  Landmark,
  Rocket,
};

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800/80">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-blue-400 uppercase">
              INDUSTRIES WE SERVE
            </p>
            <h2 className="font-display font-bold text-white tracking-tight leading-[1.12] text-[clamp(1.85rem,3.2vw,2.75rem)] text-balance">
              Digital Solutions Across Every Industry.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
            Every sector brings distinct compliance, customer experience, and operational
            demands. We adapt our engineering to fit your domain.
          </p>
        </motion.div>

        {/* 8 Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES_LIST.map((industry, index) => {
            const Icon = industryIconMap[industry.iconName];
            return (
              <motion.article
                key={industry.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 4) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/50 p-6 transition-all duration-200 overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle architectural corner geometry */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 rounded-full bg-blue-500/5 group-hover:bg-blue-500/12 transition-colors"
                />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-800/90 border border-slate-700 group-hover:border-blue-500/40 group-hover:bg-blue-600/20 text-blue-400 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {industry.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <p className="text-xs font-medium text-blue-400">{industry.focusArea}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
