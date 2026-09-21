import React from 'react';
import { motion } from 'framer-motion';
import { insurancePartners, partnerCount } from '@/data/partners';
import { fadeUp, viewportConfig } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { InsuranceLogo } from './BrandLogos';

const row1 = [...insurancePartners, ...insurancePartners];
const row2 = [...insurancePartners.slice(5), ...insurancePartners.slice(0, 5), ...insurancePartners];

export function InsurancePartners() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="insurance-partners" className="bg-[#050608]" border="bottom">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center mb-10"
      >
        <div className="flex justify-center mb-4">
          <TechLabel>ENTERPRISE ECOSYSTEM</TechLabel>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-800 tracking-tight text-[#F5F7FA] mb-3">
          Among our insurance partners
        </h2>
        <p className="text-[#8E99A5] text-xs sm:text-sm max-w-md mx-auto">
          Direct API and claims settlement integration with leading carriers representing{' '}
          <span className="text-[#32D8FF] font-medium">{partnerCount}</span>{' '}
          insurance organizations across India.
        </p>
      </motion.div>

      {reducedMotion ? (
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {insurancePartners.map((name) => (
            <div
              key={name}
              className="flex items-center gap-3 px-5 py-3 rounded-[8px] bg-[#0A0D11] border border-[#1D242B] text-xs sm:text-sm font-mono text-[#F5F7FA]"
            >
              <InsuranceLogo name={name} className="w-7 h-7 flex-shrink-0" />
              <span className="font-semibold">{name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3.5 overflow-hidden group">
          {/* Row 1 — Continuous Flowing Marquee (Leftward) */}
          <div className="flex">
            <div className="flex gap-3.5 animate-marquee group-hover:[animation-play-state:paused]">
              {row1.map((name, i) => (
                <div
                  key={`r1-${name}-${i}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-[8px] bg-[#0A0D11] border border-[#1D242B] hover:border-[#32D8FF]/60 hover:bg-[#0E1318] hover:shadow-[0_0_20px_rgba(50,216,255,0.15)] transition-all duration-200 text-xs sm:text-sm font-mono text-[#F5F7FA] whitespace-nowrap cursor-default"
                >
                  <InsuranceLogo name={name} className="w-7 h-7 flex-shrink-0" />
                  <span className="font-semibold tracking-wide">{name}</span>
                  <span className="text-[9px] font-mono text-[#32D8FF]/80 bg-[#32D8FF]/10 border border-[#32D8FF]/20 px-1.5 py-0.5 rounded ml-1">
                    INSURER
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — Continuous Flowing Marquee (Rightward) */}
          <div className="flex">
            <div className="flex gap-3.5 animate-marquee-reverse group-hover:[animation-play-state:paused]">
              {row2.map((name, i) => (
                <div
                  key={`r2-${name}-${i}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-[8px] bg-[#0A0D11] border border-[#1D242B] hover:border-[#32D8FF]/60 hover:bg-[#0E1318] hover:shadow-[0_0_20px_rgba(50,216,255,0.15)] transition-all duration-200 text-xs sm:text-sm font-mono text-[#F5F7FA] whitespace-nowrap cursor-default"
                >
                  <InsuranceLogo name={name} className="w-7 h-7 flex-shrink-0" />
                  <span className="font-semibold tracking-wide">{name}</span>
                  <span className="text-[9px] font-mono text-[#32D8FF]/80 bg-[#32D8FF]/10 border border-[#32D8FF]/20 px-1.5 py-0.5 rounded ml-1">
                    INSURER
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
