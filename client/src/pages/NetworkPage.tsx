import { motion } from 'framer-motion';
import { SEOHead } from '@/components/common/SEOHead';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { NetworkMetrics } from '@/components/network/NetworkMetrics';
import { IndiaMap } from '@/components/network/IndiaMap';
import { InsurancePartners } from '@/components/partners/InsurancePartners';
import { VehicleBrands } from '@/components/partners/VehicleBrands';
import { coverageStates } from '@/data/network';
import { capabilities } from '@/data/capabilities';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion';
import { MapPin, ShieldCheck, Wrench } from 'lucide-react';

export function NetworkPage() {
  return (
    <>
      <SEOHead
        title="Network — Anergina | India Coverage & Ecosystem Partners"
        description="Explore Anergina's automotive ecosystem across 10 states in India, featuring 13+ insurance partners, 200+ workshop partners and 16+ supported vehicle brands."
      />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-[#050608] border-b border-[#1D242B] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={staggerItem} className="mb-4">
              <TechLabel>National Infrastructure</TechLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-6xl font-900 tracking-tight text-[#F5F7FA] mb-6 leading-[1.08]"
            >
              A connected automotive network{' '}
              <span className="text-[#32D8FF]">across India.</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg text-[#8E99A5] leading-relaxed mb-8"
            >
              State-level geographic coverage coordinating insurers, certified repairers and multi-brand service centers under unified operational intelligence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Row */}
      <div className="border-b border-[#1D242B] bg-[#0A0D11]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6">
          <NetworkMetrics />
        </div>
      </div>

      {/* Map Section */}
      <SectionWrapper className="bg-[#050608]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <TechLabel>Geographic Footprint</TechLabel>
            <h2 className="text-3xl font-800 tracking-tight text-[#F5F7FA] mt-3 mb-4">
              10 States. Structured Operational Scale.
            </h2>
            <p className="text-sm text-[#8E99A5] leading-relaxed mb-6">
              Anergina provides state-level operational coverage, connecting insurance portfolios with certified workshop partners. Node locations reflect representative regional presence.
            </p>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8E99A5] block mb-2">
                Active State Jurisdictions
              </span>
              <div className="flex flex-wrap gap-2">
                {coverageStates.map((state) => (
                  <span
                    key={state}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-medium bg-[#101419] border border-[#1D242B] text-[#F5F7FA]"
                  >
                    <MapPin className="w-3 h-3 text-[#32D8FF]" />
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-lg">
              <IndiaMap />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Insurance Partners Marquee */}
      <div className="border-t border-[#1D242B] bg-[#0A0D11]">
        <InsurancePartners />
      </div>

      {/* Vehicle Brands */}
      <div className="border-t border-[#1D242B] bg-[#050608]">
        <VehicleBrands />
      </div>

      {/* Repair Capabilities List */}
      <SectionWrapper className="bg-[#0A0D11] border-t border-[#1D242B]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <TechLabel>Specialized Capabilities</TechLabel>
          <h2 className="text-3xl font-800 tracking-tight text-[#F5F7FA] mt-3 mb-3">
            20+ Repair & Assessment Disciplines
          </h2>
          <p className="text-sm text-[#8E99A5]">
            Network workshops handle comprehensive repair interventions governed by Anergina’s quality and cost intelligence criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="p-6 rounded-[8px] border border-[#1D242B] bg-[#050608] flex items-start gap-4"
            >
              <div className="p-2 rounded bg-[#101419] text-[#32D8FF] border border-[#1D242B] shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-700 text-[#F5F7FA] mb-1">{cap.title}</h3>
                <p className="text-xs text-[#8E99A5] leading-relaxed">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
