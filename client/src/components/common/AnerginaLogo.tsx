import React from 'react';
import { ANERGINA_LOGO_PATH, ANERGINA_LOGO_VIEWBOX, ANERGINA_LOGO_WIDTH, ANERGINA_LOGO_HEIGHT } from './logoPath';

interface AnerginaLogoProps {
  /** Height in pixels (width scales automatically by aspect ratio ~1.4:1) */
  size?: number;
  className?: string;
  color?: 'cyan' | 'white' | 'amber' | 'gradient';
  glow?: boolean;
  showContainer?: boolean;
}

export function AnerginaLogo({
  size = 30,
  className = '',
  color = 'cyan',
  glow = true,
  showContainer = false,
}: AnerginaLogoProps) {
  // Maintain natural aspect ratio of the official emblem (523 : 372)
  const width = Math.round(size * (ANERGINA_LOGO_WIDTH / ANERGINA_LOGO_HEIGHT));

  const glowStyles = glow
    ? color === 'cyan' || color === 'gradient'
      ? { filter: 'drop-shadow(0 0 10px rgba(50,216,255,0.45))' }
      : color === 'amber'
      ? { filter: 'drop-shadow(0 0 10px rgba(255,122,41,0.4))' }
      : { filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.25))' }
    : {};

  const fillColor =
    color === 'cyan'
      ? '#32D8FF'
      : color === 'white'
      ? '#F5F7FA'
      : color === 'amber'
      ? '#FF7A29'
      : 'url(#anerginaGrad)';

  const svgElement = (
    <svg
      viewBox={ANERGINA_LOGO_VIEWBOX}
      width={width}
      height={size}
      fill="none"
      className={`transition-all duration-300 ${className}`}
      style={glowStyles}
      aria-label="Anergina Official Emblem"
      role="img"
    >
      {color === 'gradient' && (
        <defs>
          <linearGradient id="anerginaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#55E2FF" />
            <stop offset="100%" stopColor="#0088FF" />
          </linearGradient>
        </defs>
      )}
      <path d={ANERGINA_LOGO_PATH} fill={fillColor} />
    </svg>
  );

  if (!showContainer) {
    return svgElement;
  }

  // If container mode is explicitly requested
  const containerW = Math.round(width * 1.35);
  const containerH = Math.round(size * 1.35);

  return (
    <div
      style={{ width: containerW, height: containerH }}
      className={`rounded-[10px] bg-[#0A0D11] border border-[#1D242B] flex items-center justify-center relative overflow-hidden transition-all duration-200 group-hover:border-[#32D8FF]/60 shadow-[0_0_15px_rgba(50,216,255,0.15)] ${className}`}
    >
      {svgElement}
    </div>
  );
}
