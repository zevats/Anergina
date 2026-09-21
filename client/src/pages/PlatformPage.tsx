import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/common/SEOHead';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { Button } from '@/components/common/Button';
import { capabilities } from '@/data/capabilities';
import { CapabilityItem } from '@/components/platform/CapabilityItem';
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from '@/lib/motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const WORKFLOW_STEPS = [
  { step: '01', title: 'Case Registration', desc: 'Instant case creation, policy verification, damage dossier capture.' },
  { step: '02', title: 'Workshop Assignment', desc: 'Intelligent routing based on workshop specialization, bay availability and location.' },
  { step: '03', title: 'Real-Time Tracking', desc: 'Continuous milestone updates, parts logistics telemetry and repair visibility.' },
  { step: '04', title: 'Quality Check & Delivery', desc: 'Comprehensive photographic audit, carbon emission computation and vehicle handover.' },
];

export function PlatformPage() {
  return (
    <>
      <SEOHead
        title="Platform — Anergina | Vehicle Case Management"
        description="Explore Anergina's unified operating system for automotive repair operations, survey inspection, workshop allocation and environmental impact tracking."
      />

      {/* Platform Hero */}
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
              <TechLabel>Platform Architecture</TechLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-6xl font-900 tracking-tight text-[#F5F7FA] mb-6 leading-[1.08]"
            >
              One platform. <br />
              <span className="text-[#32D8FF]">The entire repair journey.</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg text-[#8E99A5] leading-relaxed mb-8"
            >
              Anergina brings structured governance, telemetry tracking and automated decision intelligence to automotive service operations across India.
            </motion.p>
            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" size="lg">
                Schedule Platform Demo
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button to="/solutions" variant="secondary" size="lg">
                View Stakeholder Solutions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Deep-Dive Grid */}
      <SectionWrapper className="bg-[#050608]">
        <div className="text-center mb-16">
          <TechLabel>Modular Operating Capabilities</TechLabel>
          <h2 className="text-3xl sm:text-4xl font-800 tracking-tight text-[#F5F7FA] mt-3">
            Engineered for high-volume automotive operations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <CapabilityItem key={cap.id} capability={cap} />
          ))}
        </div>
      </SectionWrapper>

      {/* Operational Sequence Workflow */}
      <SectionWrapper className="bg-[#0A0D11] border-y border-[#1D242B]">
        <div className="max-w-3xl mb-12">
          <TechLabel>Process Orchestration</TechLabel>
          <h2 className="text-3xl sm:text-4xl font-800 tracking-tight text-[#F5F7FA] mt-3 mb-4">
            Structured workflow execution
          </h2>
          <p className="text-[#8E99A5] text-base leading-relaxed">
            Eliminating operational friction through automated handoffs and verifiable milestone gates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-[10px] border border-[#1D242B] bg-[#050608] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#32D8FF] px-2 py-1 rounded bg-[#32D8FF]/10 border border-[#32D8FF]/20 inline-block mb-4">
                  STAGE {step.step}
                </span>
                <h3 className="text-lg font-700 text-[#F5F7FA] mb-2">{step.title}</h3>
                <p className="text-sm text-[#8E99A5] leading-relaxed">{step.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1D242B]/80 flex items-center gap-2 text-xs text-[#62E6A7]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Audited Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Enterprise Platform Callout */}
      <SectionWrapper className="bg-[#050608] text-center">
        <div className="max-w-2xl mx-auto">
          <TechLabel>Integration & Scalability</TechLabel>
          <h2 className="text-3xl font-800 tracking-tight text-[#F5F7FA] mt-3 mb-4">
            Ready to integrate with your existing core systems?
          </h2>
          <p className="text-[#8E99A5] mb-8">
            Connect your survey network, claims engine, or workshop ERP with Anergina’s high-throughput operating platform.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Consult With Our Solutions Team
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
