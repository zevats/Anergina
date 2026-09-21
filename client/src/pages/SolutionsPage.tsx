import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/common/SEOHead';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { Button } from '@/components/common/Button';
import { StakeholderSelector } from '@/components/solutions/StakeholderSelector';
import { solutions } from '@/data/solutions';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion';
import { ArrowRight, ShieldCheck, Wrench, FileSearch, UserCheck } from 'lucide-react';

const STAKEHOLDER_ICONS: Record<string, React.ReactNode> = {
  insurers: <ShieldCheck className="w-6 h-6 text-[#32D8FF]" />,
  surveyors: <FileSearch className="w-6 h-6 text-[#32D8FF]" />,
  workshops: <Wrench className="w-6 h-6 text-[#32D8FF]" />,
  customers: <UserCheck className="w-6 h-6 text-[#62E6A7]" />,
};

export function SolutionsPage() {
  return (
    <>
      <SEOHead
        title="Solutions — Anergina | Insurers, Surveyors, Workshops & Customers"
        description="Discover how Anergina provides specialized operational tooling for insurance companies, field surveyors, partner workshops, and vehicle owners."
      />

      {/* Solutions Header */}
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
              <TechLabel>Ecosystem Solutions</TechLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-6xl font-900 tracking-tight text-[#F5F7FA] mb-6 leading-[1.08]"
            >
              Built for every stakeholder in the{' '}
              <span className="text-[#32D8FF]">repair ecosystem.</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg text-[#8E99A5] leading-relaxed mb-8"
            >
              Anergina provides tailor-made interfaces and governance workflows so insurers, surveyors, workshops and customers coordinate seamlessly without administrative fragmentation.
            </motion.p>
            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" size="lg">
                Explore Partnership
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Ecosystem Diagram */}
      <StakeholderSelector />

      {/* Detailed Stakeholder Breakdown */}
      <SectionWrapper className="bg-[#0A0D11] border-t border-[#1D242B]">
        <div className="text-center mb-16">
          <TechLabel>Operational Capabilities by Role</TechLabel>
          <h2 className="text-3xl sm:text-4xl font-800 tracking-tight text-[#F5F7FA] mt-3">
            Tailored tooling for every intervention stage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="border border-[#1D242B] bg-[#050608] rounded-[10px] p-8 flex flex-col justify-between hover:border-[#32D8FF]/40 transition-colors duration-200"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-[8px] bg-[#101419] border border-[#1D242B]">
                    {STAKEHOLDER_ICONS[item.id]}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8E99A5] uppercase tracking-wider block">
                      STAKEHOLDER PROFILE
                    </span>
                    <h3 className="text-xl font-800 text-[#F5F7FA]">{item.label}</h3>
                  </div>
                </div>

                <p className="text-sm text-[#8E99A5] leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-[#F5F7FA] uppercase tracking-wider mb-3">
                    Key Platform Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {item.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2.5 text-xs text-[#8E99A5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#32D8FF]" />
                        <span className="text-[#F5F7FA]">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1D242B]">
                <h4 className="text-xs font-semibold text-[#F5F7FA] uppercase tracking-wider mb-3">
                  Typical Process Cycle
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.workflow.map((wf, idx) => (
                    <span
                      key={wf}
                      className="text-[11px] px-2.5 py-1 rounded bg-[#0A0D11] border border-[#1D242B] text-[#8E99A5]"
                    >
                      <strong className="text-[#32D8FF] mr-1">{idx + 1}.</strong> {wf}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Conversion Banner */}
      <SectionWrapper className="bg-[#050608] text-center">
        <div className="max-w-2xl mx-auto">
          <TechLabel>Get Started</TechLabel>
          <h2 className="text-3xl font-800 tracking-tight text-[#F5F7FA] mt-3 mb-4">
            Connect your organization to Anergina
          </h2>
          <p className="text-[#8E99A5] mb-8">
            Whether you are an insurance provider managing high claim volumes or a workshop looking to streamline intake, Anergina scales with your operations.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Discuss Your Workflow Requirements
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
