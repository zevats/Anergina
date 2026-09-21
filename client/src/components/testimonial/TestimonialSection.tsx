import React from 'react';
import { testimonial } from '@/data/testimonial';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { ShieldCheck, Quote } from 'lucide-react';

export function TestimonialSection() {
  return (
    <SectionWrapper id="testimonial" className="bg-[#050608]" border="bottom">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-[12px] bg-[#0A0D11] border border-[#1D242B] p-8 sm:p-12 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          {/* Subtle green/cyan ambient light */}
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-[#62E6A7]/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Top header row */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1D242B]">
            <TechLabel color="green">ENTERPRISE VALIDATION</TechLabel>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#62E6A7]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>VERIFIED PARTNER ATTESTATION</span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative mb-8">
            <Quote className="w-10 h-10 text-[#32D8FF]/20 absolute -top-4 -left-2 pointer-events-none" />
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F5F7FA] leading-snug tracking-tight pl-6">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
          </div>

          {/* Attribution footer */}
          <div className="flex items-center justify-between pt-6 border-t border-[#1D242B] font-mono text-xs">
            <div>
              <div className="font-bold text-[#F5F7FA] text-sm sm:text-base">
                {testimonial.attribution.role}
              </div>
              <div className="text-[11px] text-[#8E99A5] mt-0.5">
                {testimonial.attribution.sector}
              </div>
            </div>

            <div className="text-right text-[10px] text-[#8E99A5]">
              <div>NETWORK SCALE</div>
              <div className="text-[#32D8FF] font-semibold">13+ INSURERS // 10 STATES</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
