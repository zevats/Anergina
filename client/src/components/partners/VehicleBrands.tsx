import React from 'react';
import { motion } from 'framer-motion';
import { vehicleBrands } from '@/data/vehicleBrands';
import { fadeUp, viewportConfig } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { VehicleBrandLogo } from './BrandLogos';

const row1 = [...vehicleBrands, ...vehicleBrands];
const row2 = [...vehicleBrands.slice(8), ...vehicleBrands.slice(0, 8), ...vehicleBrands];

function formatBrandName(brand: string): string {
  switch (brand) {
    case 'Mercedes':
      return 'Mercedes-Benz';
    case 'Tata':
      return 'Tata Motors';
    case 'MG':
      return 'Morris Garages (MG)';
    default:
      return brand;
  }
}

export function VehicleBrands() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="vehicle-brands" className="bg-[#07090C]" border="bottom">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center mb-10"
      >
        <div className="flex justify-center mb-4">
          <TechLabel>FLEET COMPATIBILITY</TechLabel>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-800 tracking-tight text-[#F5F7FA] mb-3">
          Supported Vehicle Brands
        </h2>
        <p className="text-[#8E99A5] text-xs sm:text-sm max-w-md mx-auto">
          Anergina orchestrates claim documentation, diagnostic protocols, and parts validation across{' '}
          <span className="text-[#FF7A29] font-semibold">{vehicleBrands.length}+</span> leading manufacturers.
        </p>
      </motion.div>

      {reducedMotion ? (
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {vehicleBrands.map((brand) => (
            <div
              key={brand}
              className="flex items-center gap-3 px-5 py-3 rounded-[8px] bg-[#0A0D11] border border-[#1D242B] text-xs sm:text-sm font-mono text-[#F5F7FA]"
            >
              <VehicleBrandLogo brand={brand} className="w-7 h-7 flex-shrink-0" />
              <span className="font-semibold">{formatBrandName(brand)}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3.5 overflow-hidden group">
          {/* Row 1 — Continuous Flowing Marquee (Leftward) */}
          <div className="flex">
            <div className="flex gap-3.5 animate-marquee group-hover:[animation-play-state:paused]">
              {row1.map((brand, i) => (
                <div
                  key={`r1-${brand}-${i}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-[8px] bg-[#0A0D11] border border-[#1D242B] hover:border-[#FF7A29]/60 hover:bg-[#0E1318] hover:shadow-[0_0_20px_rgba(255,122,41,0.15)] transition-all duration-200 text-xs sm:text-sm font-mono text-[#F5F7FA] whitespace-nowrap cursor-default"
                >
                  <VehicleBrandLogo brand={brand} className="w-7 h-7 flex-shrink-0" />
                  <span className="font-semibold tracking-wide">{formatBrandName(brand)}</span>
                  <span className="text-[9px] font-mono text-[#FF7A29]/80 bg-[#FF7A29]/10 border border-[#FF7A29]/20 px-1.5 py-0.5 rounded ml-1">
                    OEM READY
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — Continuous Flowing Marquee (Rightward) */}
          <div className="flex">
            <div className="flex gap-3.5 animate-marquee-reverse group-hover:[animation-play-state:paused]">
              {row2.map((brand, i) => (
                <div
                  key={`r2-${brand}-${i}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-[8px] bg-[#0A0D11] border border-[#1D242B] hover:border-[#FF7A29]/60 hover:bg-[#0E1318] hover:shadow-[0_0_20px_rgba(255,122,41,0.15)] transition-all duration-200 text-xs sm:text-sm font-mono text-[#F5F7FA] whitespace-nowrap cursor-default"
                >
                  <VehicleBrandLogo brand={brand} className="w-7 h-7 flex-shrink-0" />
                  <span className="font-semibold tracking-wide">{formatBrandName(brand)}</span>
                  <span className="text-[9px] font-mono text-[#FF7A29]/80 bg-[#FF7A29]/10 border border-[#FF7A29]/20 px-1.5 py-0.5 rounded ml-1">
                    OEM READY
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
