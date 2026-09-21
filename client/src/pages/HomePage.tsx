import React from 'react';
import { SEOHead } from '@/components/common/SEOHead';
import { Hero } from '@/components/hero/Hero';
import { ProblemSection } from '@/components/problem/ProblemSection';
import { PlatformSection } from '@/components/platform/PlatformSection';
import { TechnologySection } from '@/components/technology/TechnologySection';
import { EcosystemSection } from '@/components/ecosystem/EcosystemSection';
import { NetworkSection } from '@/components/network/NetworkSection';
import { InsurancePartners } from '@/components/partners/InsurancePartners';
import { VehicleBrands } from '@/components/partners/VehicleBrands';
import { TestimonialSection } from '@/components/testimonial/TestimonialSection';
import { FinalCTA } from '@/components/common/FinalCTA';

export function HomePage() {
  return (
    <>
      <SEOHead
        title="Anergina — Precision Automotive Service Synchronized by Real-Time Intelligence"
        description="Anergina connects insurers, surveyors, and workshops through unified telemetry, real-time claim governance, and precision parts validation across 10 Indian states."
      />

      {/* 1. Hero with Continuous Rotating Wheel & HUD Telemetry */}
      <Hero />

      {/* 2. Current Industry Challenge — 3-Column Comparative Matrix */}
      <ProblemSection />

      {/* 3. Modular Operational Suite — 6 Specialized Consoles & Blueprint Scanner */}
      <PlatformSection />

      {/* 4. Automotive Telematics & Labs — Aerodynamic Wind Tunnel Lab */}
      <TechnologySection />

      {/* 5. Multi-Sided Platform — 4 Stakeholders Grid */}
      <EcosystemSection />

      {/* 6. Nationwide Coverage — 5-Metric Telemetry Strip & India Radar Grid */}
      <NetworkSection />

      {/* 7. Enterprise Ecosystem — Insurance Partners */}
      <InsurancePartners />

      {/* 8. Fleet Compatibility — Supported Vehicle Brands */}
      <VehicleBrands />

      {/* 9. Enterprise Validation — Partner Testimonial */}
      <TestimonialSection />

      {/* 10. Final Call-to-Action */}
      <FinalCTA />
    </>
  );
}
