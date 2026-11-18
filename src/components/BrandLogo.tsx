import React from 'react';

interface BrandLogoProps {
  lightText?: boolean;
  size?: 'sm' | 'md';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ lightText = false, size = 'md' }) => {
  const iconSize = size === 'sm' ? 'w-8 h-8' : 'w-9 h-9';
  const textSize = size === 'sm' ? 'text-base' : 'text-[17px]';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none">
      <img
        src="/assets/aistudio/logo_a7957b67.jpeg"
        alt="Qubex Tech Solutions logo"
        referrerPolicy="no-referrer"
        className={`${iconSize} rounded-full object-cover shrink-0 ring-1 ${
          lightText ? 'ring-blue-400/50 bg-slate-950' : 'ring-slate-300 bg-slate-950'
        }`}
      />
      <span
        className={`font-display font-bold tracking-tight ${textSize} ${
          lightText ? 'text-white' : 'text-slate-900'
        }`}
      >
        Qubex Tech Solutions
      </span>
    </span>
  );
};
