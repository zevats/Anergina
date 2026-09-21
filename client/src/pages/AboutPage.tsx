import { motion } from 'framer-motion';
import { SEOHead } from '@/components/common/SEOHead';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { Button } from '@/components/common/Button';
import { company } from '@/data/company';
import { networkMetrics } from '@/data/network';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion';
import { Cpu, ShieldCheck, Leaf, Compass, ArrowRight } from 'lucide-react';

export function AboutPage() {
  return (
    <>
      <SEOHead
        title="About — Anergina | Building Infrastructure for Smarter Automotive Service"
        description="Learn how Anergina builds connected technology infrastructure for automotive service operations, unifying case management, repair workflows and carbon intelligence."
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
              <TechLabel>Enterprise Mission</TechLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-6xl font-900 tracking-tight text-[#F5F7FA] mb-6 leading-[1.08]"
            >
              {company.aboutHeadline}
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg text-[#8E99A5] leading-relaxed mb-8"
            >
              {company.longDescription}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Principles (Mission / Vision / Decarbonisation) */}
      <SectionWrapper className="bg-[#0A0D11]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-[#1D242B] bg-[#050608] p-8 rounded-[10px]">
            <div className="p-3 rounded-[6px] bg-[#101419] border border-[#1D242B] text-[#32D8FF] w-fit mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <TechLabel>Our Mission</TechLabel>
            <h3 className="text-xl font-800 text-[#F5F7FA] mt-2 mb-3">
              Unify Automotive Operations
            </h3>
            <p className="text-sm text-[#8E99A5] leading-relaxed">
              Connect insurers, surveyors and workshop networks through a standardized operational operating system that eliminates coordination latency and information silos.
            </p>
          </div>

          <div className="border border-[#1D242B] bg-[#050608] p-8 rounded-[10px]">
            <div className="p-3 rounded-[6px] bg-[#101419] border border-[#1D242B] text-[#32D8FF] w-fit mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <TechLabel>Our Vision</TechLabel>
            <h3 className="text-xl font-800 text-[#F5F7FA] mt-2 mb-3">
              Intelligence-Driven Service
            </h3>
            <p className="text-sm text-[#8E99A5] leading-relaxed">
              Deploy AI-assisted routing, cost verification and predictive repair tracking to provide transparent, verifiable operations for every vehicle intervention.
            </p>
          </div>

          <div className="border border-[#1D242B] bg-[#050608] p-8 rounded-[10px]">
            <div className="p-3 rounded-[6px] bg-[#101419] border border-[#1D242B] text-[#62E6A7] w-fit mb-6">
              <Leaf className="w-6 h-6" />
            </div>
            <TechLabel color="green">Sustainability</TechLabel>
            <h3 className="text-xl font-800 text-[#F5F7FA] mt-2 mb-3">
              Operational Decarbonisation
            </h3>
            <p className="text-sm text-[#8E99A5] leading-relaxed">
              Measure, benchmark and manage environmental impact across workshop networks, enabling enterprise stakeholders to track carbon footprint reductions.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Operational Proof Metrics */}
      <SectionWrapper className="bg-[#050608] border-t border-[#1D242B]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <TechLabel>Ecosystem Verification</TechLabel>
          <h2 className="text-3xl font-800 tracking-tight text-[#F5F7FA] mt-3">
            Scale and Reliability Across India
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {networkMetrics.map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-[8px] border border-[#1D242B] bg-[#0A0D11] text-center"
            >
              <div className="text-3xl sm:text-4xl font-900 text-[#F5F7FA] mb-1">
                <AnimatedCounter displayValue={item.value} />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E99A5]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Reserved Governance & Leadership Structure (Design Space - No Invented Content) */}
      <SectionWrapper className="bg-[#0A0D11] border-t border-[#1D242B]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border border-[#1D242B] bg-[#050608] p-8 rounded-[10px]">
            <TechLabel>Corporate Governance</TechLabel>
            <h3 className="text-xl font-800 text-[#F5F7FA] mt-2 mb-3">
              Leadership & Operational Team
            </h3>
            <p className="text-sm text-[#8E99A5] leading-relaxed mb-6">
              Anergina is spearheaded by enterprise automotive engineers, claims specialists, and operations executives dedicated to digitalizing after-sales services.
            </p>
            <div className="p-4 rounded-[6px] border border-[#1D242B] bg-[#101419] text-xs text-[#8E99A5]">
              Executive and advisory board disclosures are made directly to institutional partners during formal onboarding.
            </div>
          </div>

          <div className="border border-[#1D242B] bg-[#050608] p-8 rounded-[10px]">
            <TechLabel>Compliance & Security</TechLabel>
            <h3 className="text-xl font-800 text-[#F5F7FA] mt-2 mb-3">
              Enterprise Standards & Audits
            </h3>
            <p className="text-sm text-[#8E99A5] leading-relaxed mb-6">
              Our data architecture adheres to stringent operational governance, telematics privacy principles, and insurance sector audit compliance.
            </p>
            <div className="p-4 rounded-[6px] border border-[#1D242B] bg-[#101419] text-xs text-[#8E99A5]">
              Standardized SOC and environmental audit dossiers available under non-disclosure agreements for institutional partners.
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact CTA */}
      <SectionWrapper className="bg-[#050608] text-center border-t border-[#1D242B]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-800 tracking-tight text-[#F5F7FA] mb-4">
            Join the Connected Service Network
          </h2>
          <p className="text-sm text-[#8E99A5] mb-8">
            Connect with our partnerships team to integrate your organization with Anergina’s operating infrastructure.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Connect With Our Team
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
