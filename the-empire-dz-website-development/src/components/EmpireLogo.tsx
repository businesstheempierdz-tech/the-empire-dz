import { useState } from 'react';
import { COMPANY_INFO } from '../data/config';

interface EmpireLogoProps {
  variant?: 'compact' | 'full' | 'mark';
  className?: string;
}

export default function EmpireLogo({ variant = 'full', className = '' }: EmpireLogoProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const metallicText = {
    background: 'linear-gradient(135deg, #f4dcc1 0%, #c9c2ad 30%, #777265 55%, #f0e4cf 78%, #8f8775 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 26px rgba(244, 220, 193, 0.14)',
  } as const;

  if (variant === 'mark') {
    return (
      <div className={`relative flex items-center justify-center ${className}`} aria-label="The Empire DZ">
        {!imageFailed && (
          <img
            src={COMPANY_INFO.logoImage}
            alt="The Empire DZ"
            className="relative z-10 h-full w-full rounded-full object-contain"
            onError={() => setImageFailed(true)}
          />
        )}
        {imageFailed && (
        <svg viewBox="0 0 120 120" className="h-full w-full" role="img">
          <defs>
            <linearGradient id="empireMarkMetal" x1="18" y1="10" x2="102" y2="110" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f4dcc1" />
              <stop offset="0.34" stopColor="#b7b09f" />
              <stop offset="0.58" stopColor="#6f6a60" />
              <stop offset="0.82" stopColor="#efe2cd" />
              <stop offset="1" stopColor="#827969" />
            </linearGradient>
            <filter id="empireSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M25 58 L35 38 L49 54 L60 24 L71 54 L85 38 L95 58 Z" fill="url(#empireMarkMetal)" filter="url(#empireSoftGlow)" />
          <path d="M27 64 H93 L88 78 H32 Z" fill="url(#empireMarkMetal)" />
          <circle cx="60" cy="18" r="5" fill="#FFF0B8" />
          <circle cx="35" cy="34" r="4" fill="#d6c7af" />
          <circle cx="85" cy="34" r="4" fill="#d6c7af" />
          <path d="M38 86 H82 M45 96 H75" stroke="url(#empireMarkMetal)" strokeWidth="5" strokeLinecap="round" />
        </svg>
        )}
        <span className="absolute inset-0 rounded-full bg-[#d8c9b3]/10 blur-2xl" />
      </div>
    );
  }

  const isCompact = variant === 'compact';

  return (
    <div className={`relative inline-flex items-center gap-3 ${className}`} aria-label="The Empire DZ logo">
      <EmpireLogo variant="mark" className={isCompact ? 'h-11 w-11 shrink-0' : 'h-16 w-16 shrink-0'} />
      <div className="leading-none">
        <div className={isCompact ? 'text-[10px] tracking-[0.45em] text-[#c9c2ad]' : 'text-sm tracking-[0.55em] text-[#c9c2ad]'}>
          THE
        </div>
        <div
          className={`${isCompact ? 'text-2xl' : 'text-5xl sm:text-6xl'} font-black tracking-tight font-[Poppins]`}
          style={metallicText}
        >
          EMPIRE
        </div>
        <div className="mt-1 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c9c2ad]/70 to-transparent" />
          <span className={isCompact ? 'text-xs font-bold tracking-[0.35em] text-[#c9c2ad]' : 'text-lg font-bold tracking-[0.45em] text-[#c9c2ad]'}>
            DZ
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9c2ad]/70 to-transparent" />
        </div>
      </div>
    </div>
  );
}