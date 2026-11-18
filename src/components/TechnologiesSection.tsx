import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Cpu, Database, Wrench } from 'lucide-react';
import { TECHNOLOGIES_LIST } from '../data/siteData';
import { TechCategory, TechnologyItem } from '../types';

const CATEGORIES: TechCategory[] = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

const CategoryIcon: React.FC<{ category: TechnologyItem['category'] }> = ({ category }) => {
  switch (category) {
    case 'Frontend':
      return <Code2 className="w-3.5 h-3.5" aria-hidden="true" />;
    case 'Backend':
      return <Cpu className="w-3.5 h-3.5" aria-hidden="true" />;
    case 'Database':
      return <Database className="w-3.5 h-3.5" aria-hidden="true" />;
    case 'Tools':
      return <Wrench className="w-3.5 h-3.5" aria-hidden="true" />;
  }
};

const TechMonogram: React.FC<{ name: string; color: string }> = ({ name, color }) => {
  const shortCode = name
    .replace('.js', '')
    .replace(' CSS', '')
    .replace('VS Code', 'VS')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center font-mono text-xs font-bold shrink-0 shadow-2xs transition-transform duration-200 group-hover:scale-105"
      style={{ color }}
      aria-hidden="true"
    >
      {shortCode}
    </div>
  );
};

export const TechnologiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>('All');

  const filteredTech =
    selectedCategory === 'All'
      ? TECHNOLOGIES_LIST
      : TECHNOLOGIES_LIST.filter((item) => item.category === selectedCategory);

  const marqueeItems = [...TECHNOLOGIES_LIST, ...TECHNOLOGIES_LIST];

  return (
    <section id="technologies" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Header & Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-blue-600 uppercase">
              OUR TECHNOLOGY STACK
            </p>
            <h2 className="font-display font-bold text-slate-900 tracking-tight leading-[1.12] text-[clamp(1.85rem,3.2vw,2.75rem)] text-balance">
              Powered by the Right Technology.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We select battle-tested frameworks, reliable relational and document
              databases, and modern engineering tooling suited to your product roadmap.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter technologies by category"
            className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-xl bg-slate-100 border border-slate-200/80 self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Continuous Horizontal Technology Marquee */}
      <div className="relative py-5 mb-12 border-y border-slate-100 bg-slate-50/70">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10"
        />

        <div className="overflow-hidden">
          <div className="animate-marquee gap-4 px-4">
            {marqueeItems.map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 shrink-0 shadow-2xs"
              >
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: tech.accentColor }}
                >
                  {tech.name.slice(0, 2).toUpperCase()}
                </span>
                <span className="text-sm font-semibold text-slate-800 whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-xs text-slate-400 whitespace-nowrap">
                  · {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categorized Technology Grid */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTech.map((tech) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-blue-300 p-4 flex items-center gap-3.5 transition-all duration-150 hover:shadow-md hover:shadow-slate-200/50"
            >
              <TechMonogram name={tech.name} color={tech.accentColor} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display font-semibold text-sm text-slate-900 truncate">
                    {tech.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 shrink-0">
                    <CategoryIcon category={tech.category} />
                    <span>{tech.category}</span>
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 truncate">{tech.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
