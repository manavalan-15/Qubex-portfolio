import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';
import { SAMPLE_TESTIMONIALS } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const handlePrev = () => {
    setFocusedIndex((prev) =>
      prev === 0 ? SAMPLE_TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setFocusedIndex((prev) => (prev + 1) % SAMPLE_TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Header & Carousel Controls */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-blue-600 uppercase">
              CLIENT TESTIMONIALS
            </p>
            <h2 className="font-display font-bold text-slate-900 tracking-tight leading-[1.12] text-[clamp(1.85rem,3.2vw,2.75rem)] text-balance">
              What Our Clients Say About Us.
            </h2>
            <p className="text-sm text-slate-500">
              Editable sample placeholders shown below — replace with verified client
              reviews as projects go live.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-lg bg-white border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-slate-500 px-2 tabular-nums">
              0{focusedIndex + 1} / 0{SAMPLE_TESTIMONIALS.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-lg bg-white border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SAMPLE_TESTIMONIALS.map((item, index) => {
            const isHighlighted = index === focusedIndex;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setFocusedIndex(index)}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                  isHighlighted
                    ? 'bg-white border-2 border-blue-500 shadow-xl shadow-slate-200/70'
                    : 'bg-white border border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <p className="text-xs font-semibold text-blue-600">
                      {item.projectCategory}
                    </p>
                    <Quote
                      className={`w-5 h-5 ${
                        isHighlighted ? 'text-blue-600' : 'text-slate-300'
                      }`}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed mb-7">
                    {item.quote}
                  </p>
                </div>

                {/* Client Profile Placeholder */}
                <div className="pt-5 border-t border-slate-100 flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 shrink-0"
                    aria-hidden="true"
                  >
                    <User className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-sm text-slate-900 truncate">
                      {item.clientNamePlaceholder}
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      {item.rolePlaceholder} · {item.companyPlaceholder}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
