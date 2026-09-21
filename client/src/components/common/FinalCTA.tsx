import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { Button } from '@/components/common/Button';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <SectionWrapper id="cta" className="bg-[#0A0D11] relative overflow-hidden" border="bottom">
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(50,216,255,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="text-center max-w-3xl mx-auto relative z-10">
        <div className="flex justify-center mb-6">
          <TechLabel>ENTERPRISE DEPLOYMENT</TechLabel>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-900 tracking-tight text-[#F5F7FA] mb-6 leading-[1.06]">
          Move automotive service <br />
          <span className="text-[#32D8FF]">forward.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#8E99A5] leading-relaxed mb-10 max-w-2xl mx-auto">
          Connect your insurance portfolio, surveyor network, or workshop facility to the Anergina operating layer.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button to="/contact" variant="primary" size="lg">
            Schedule Demo
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Contact Solutions Team
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
