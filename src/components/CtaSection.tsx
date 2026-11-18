import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface CtaSectionProps {
  onStartProject: () => void;
  onContactTeam: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onStartProject,
  onContactTeam,
}) => {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#070C18] via-[#0E1A36] to-[#13295E] text-white overflow-hidden">
      {/* Subtle Animated Geometric Background Accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.22, 0.35, 0.22] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-blue-500/25 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.28, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute -bottom-32 left-12 w-80 h-80 rounded-full bg-indigo-400/20 blur-[90px]"
        />
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-blue-300 uppercase">
            READY TO LAUNCH
          </p>

          <h2 className="font-display font-bold text-white tracking-tight leading-[1.08] text-[clamp(2rem,4vw,3.35rem)] text-balance">
            Let&apos;s Build Something Extraordinary Together.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Have a business idea or digital challenge? Let&apos;s turn your vision into a
            powerful digital solution.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onStartProject}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white hover:bg-blue-50 text-slate-900 text-sm font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xl"
            >
              <span>Start Your Project</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={onContactTeam}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/25 text-white text-sm font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>Contact Our Team</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
