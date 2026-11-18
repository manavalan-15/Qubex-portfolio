import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Handshake, Lightbulb, ShieldCheck, Target } from 'lucide-react';
import { BENEFIT_CARDS, ENGINEERING_METRICS } from '../data/siteData';
import { BenefitItem } from '../types';

const iconMap: Record<BenefitItem['iconName'], React.FC<{ className?: string }>> = {
  Lightbulb,
  Target,
  ShieldCheck,
  Handshake,
};

interface AnimatedCounterProps {
  target: number;
  suffix: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, suffix }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayValue(target);
      return;
    }

    const duration = 900;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display font-bold tabular-nums text-3xl sm:text-4xl text-slate-900">
      {displayValue}
      <span className="text-blue-600">{suffix}</span>
    </span>
  );
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Narrative: Vision, Mission & Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-blue-600 uppercase">
              WHY CHOOSE US
            </p>

            <h2 className="font-display font-bold text-slate-900 tracking-tight leading-[1.12] text-[clamp(1.85rem,3.2vw,2.75rem)] text-balance">
              Your Vision. Our Technology. One Powerful Partnership.
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed max-w-xl">
              <p>
                Qubex Tech Solutions is a modern software and digital engineering
                startup built for organizations that refuse to settle for rigid,
                cookie-cutter templates. Whether you are launching an ambitious MVP or
                modernizing enterprise operations, we bridge technical execution with
                measurable business strategy.
              </p>
              <p>
                Our mission is straightforward: solve real operational bottlenecks
                through clean engineering, intuitive design, and transparent
                collaboration—delivering dependable platforms that scale alongside
                your team.
              </p>
            </div>

            {/* Engineering Metrics Strip */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 gap-6">
              {ENGINEERING_METRICS.map((metric) => (
                <div key={metric.label}>
                  <AnimatedCounter target={metric.value} suffix={metric.suffix} />
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Grid: Four Benefit Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BENEFIT_CARDS.map((card, index) => {
              const Icon = iconMap[card.iconName];
              return (
                <motion.article
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-300 p-7 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-200">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs text-slate-400 tabular-nums">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-blue-600 mb-1.5">
                      {card.metricLabel}
                    </p>
                    <h3 className="font-display font-bold text-xl text-slate-900 mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
