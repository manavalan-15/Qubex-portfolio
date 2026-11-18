import React, { useState } from 'react';
import { Layers } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  darkFallback?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
  darkFallback = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-6 text-center ${
          darkFallback
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-slate-300'
            : 'bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 text-slate-600'
        } ${className}`}
        role="img"
        aria-label={alt}
      >
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 border ${
            darkFallback
              ? 'bg-slate-800/80 border-slate-700 text-blue-400'
              : 'bg-white border-slate-200 text-blue-600'
          }`}
        >
          <Layers className="w-5 h-5" />
        </div>
        <span className="text-xs font-medium tracking-wide">{fallbackLabel || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
