import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Check,
  Code2,
  Cpu,
  Globe,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import {
  CONTACT_PLACEHOLDERS,
  HERO_HIGHLIGHTS,
  HERO_VISUAL_PATH,
} from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onStartProject: () => void;
}

const HEADLINE_WORDS = [
  'Building',
  "Tomorrow's",
  'Digital',
  'Experiences,',
  'Today.',
];

const WORKSPACE_MODES = [
  {
    id: 'platform',
    label: 'Web Platform',
    throughput: '99.98%',
    throughputTitle: 'Target SLA Reliability',
    latency: '42 ms',
    latencyTitle: 'Edge Response Budget',
    modules: ['Design System', 'API Gateway', 'CI/CD Pipeline'],
  },
  {
    id: 'software',
    label: 'Custom Software',
    throughput: '100%',
    throughputTitle: 'Modular Test Coverage',
    latency: '18 ms',
    latencyTitle: 'Query Execution Time',
    modules: ['Core Services', 'Role Permissions', 'Audit Logs'],
  },
  {
    id: 'automation',
    label: 'Automation',
    throughput: '12x',
    throughputTitle: 'Workflow Acceleration',
    latency: 'Real-time',
    latencyTitle: 'Webhook Sync Mode',
    modules: ['CRM Sync', 'Billing Triggers', 'Alert Engine'],
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
}) => {
  const [selectedModeId, setSelectedModeId] = useState<string>('platform');
  const activeMode =
    WORKSPACE_MODES.find((mode) => mode.id === selectedModeId) || WORKSPACE_MODES[0];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#070C18] text-white overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      {/* Subtle architectural background gradients & grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            opacity: [0.32, 0.48, 0.32],
            scale: [1, 1.06, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-48 -right-32 w-[680px] h-[680px] rounded-full bg-blue-600/20 blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.18, 0.3, 0.18],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-48 -left-28 w-[560px] h-[560px] rounded-full bg-indigo-500/15 blur-[110px]"
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.16) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Core Narrative & Actions */}
          <div className="lg:col-span-6 space-y-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase"
            >
              Qubex Tech Solutions · Digital Engineering Studio
            </motion.p>

            {/* Word-by-word Headline Reveal */}
            <h1 className="font-display font-bold tracking-tight text-white leading-[1.08] text-[clamp(2.35rem,4.3vw,3.85rem)] text-balance max-w-2xl">
              {HEADLINE_WORDS.map((word, index) => (
                <motion.span
                  key={word + index}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08 + index * 0.075,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block mr-[0.26em] ${
                    word === 'Experiences,' || word === 'Today.'
                      ? 'text-blue-400'
                      : 'text-white'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              We transform innovative ideas into powerful digital solutions that help
              businesses grow, operate smarter and stay ahead in a connected world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <a
                href={CONTACT_PLACEHOLDERS.phoneHref}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shadow-lg shadow-blue-950/50"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call Now</span>
              </a>

              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-white text-sm font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <span>Start a Project</span>
              </button>
            </motion.div>

            {/* Direct Contact Line */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300"
            >
              <a
                href={CONTACT_PLACEHOLDERS.phoneHref}
                className="inline-flex items-center gap-2 hover:text-white transition-colors tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
                <span>{CONTACT_PLACEHOLDERS.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_PLACEHOLDERS.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
                <span>{CONTACT_PLACEHOLDERS.email}</span>
              </a>
              <span className="inline-flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
                <span>{CONTACT_PLACEHOLDERS.location}</span>
              </span>
            </motion.div>

            {/* Three Company Highlights (Clean unboxed typography with subtle dividers) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-white/12 flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              {HERO_HIGHLIGHTS.map((item, idx) => (
                <div key={item} className="inline-flex items-center gap-2.5 text-sm text-slate-200">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-blue-500/15 text-blue-400">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span className="font-medium">{item}</span>
                  {idx < HERO_HIGHLIGHTS.length - 1 && (
                    <span className="hidden sm:inline text-slate-600 ml-4" aria-hidden="true">
                      /
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Animated Technology Dashboard & 3D Architectural Stage */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl border border-white/12 bg-slate-900/75 backdrop-blur-xl p-4 sm:p-5 shadow-2xl">
              {/* Top Interactive Architecture Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/assets/aistudio/logo_a7957b67.jpeg"
                    alt="Qubex Technologies emblem"
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 rounded-full object-cover ring-1 ring-blue-400/50"
                  />
                  <span className="text-xs font-semibold tracking-wide text-slate-200">
                    Qubex Solution Architecture
                  </span>
                </div>

                <div
                  role="tablist"
                  aria-label="Solution preview modes"
                  className="inline-flex items-center gap-1 p-1 rounded-lg bg-slate-950/80 border border-white/10"
                >
                  {WORKSPACE_MODES.map((mode) => {
                    const isSelected = mode.id === selectedModeId;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setSelectedModeId(mode.id)}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {mode.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Central 3D Architectural Image Frame */}
              <div className="relative mt-4 rounded-xl overflow-hidden border border-white/10 bg-slate-950 aspect-[16/10]">
                <ResilientImage
                  src={HERO_VISUAL_PATH}
                  alt="Qubex Tech Solutions 3D modular architecture render"
                  className="w-full h-full object-cover"
                  darkFallback
                  fallbackLabel="Modular Software Architecture"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#070C18]/90 via-[#070C18]/20 to-transparent"
                />

                {/* Bottom Integrated Architectural Summary Strip */}
                <div className="absolute bottom-3 left-3 right-3 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 p-3">
                    <p className="text-[11px] text-slate-400">{activeMode.throughputTitle}</p>
                    <p className="mt-0.5 font-mono text-lg font-semibold text-white tabular-nums">
                      {activeMode.throughput}
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 p-3">
                    <p className="text-[11px] text-slate-400">{activeMode.latencyTitle}</p>
                    <p className="mt-0.5 font-mono text-lg font-semibold text-blue-400 tabular-nums">
                      {activeMode.latency}
                    </p>
                  </div>
                </div>
              </div>

              {/* Active Stack Modules Row */}
              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {activeMode.modules.map((mod, idx) => {
                  const Icons = [Globe, Code2, Workflow];
                  const IconComponent = Icons[idx % Icons.length];
                  return (
                    <div
                      key={mod}
                      className="rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2.5 flex items-center gap-2"
                    >
                      <IconComponent className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                      <span className="text-xs font-medium text-slate-200 truncate">
                        {mod}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Subtle Floating UI Accent Card 1 (Desktop) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex items-center gap-3 absolute -top-5 -left-5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-white/15 px-3.5 py-2.5 shadow-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white whitespace-nowrap">
                  Security-First Engineering
                </p>
                <p className="text-[11px] text-slate-400 whitespace-nowrap">
                  Audited APIs &amp; scalable cloud
                </p>
              </div>
            </motion.div>

            {/* Subtle Floating UI Accent Card 2 (Desktop) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="hidden sm:flex items-center gap-3 absolute -bottom-5 -right-4 rounded-xl bg-slate-900/95 backdrop-blur-md border border-white/15 px-3.5 py-2.5 shadow-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                <Cpu className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white whitespace-nowrap">
                  Full-Stack Delivery
                </p>
                <p className="text-[11px] text-slate-400 whitespace-nowrap">
                  Web · Mobile · Automation
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
