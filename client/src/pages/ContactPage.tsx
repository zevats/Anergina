import { motion } from 'framer-motion';
import { SEOHead } from '@/components/common/SEOHead';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { ContactForm } from '@/components/contact/ContactForm';
import { company } from '@/data/company';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion';
import { ShieldCheck, Network, Cpu, Clock, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact — Anergina | Enterprise Partnership & Inquiries"
        description="Connect with Anergina for insurance partnerships, workshop tie-ups, technology integration, and enterprise automotive service operations."
      />

      {/* Header */}
      <section className="pt-32 pb-16 bg-[#050608] border-b border-[#1D242B] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={staggerItem} className="mb-4">
              <TechLabel>Enterprise Engagement</TechLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-6xl font-900 tracking-tight text-[#F5F7FA] mb-6 leading-[1.08]"
            >
              {company.contactHeadline}
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg text-[#8E99A5] leading-relaxed"
            >
              Partner with Anergina to connect your repair operations, streamline inspection coordination, and unlock telemetry-driven cost and carbon intelligence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid: Form + Operational Briefing */}
      <SectionWrapper className="bg-[#050608]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="text-2xl font-800 text-[#F5F7FA] tracking-tight mb-2">
                Initiate Partnership Dialogue
              </h2>
              <p className="text-sm text-[#8E99A5]">
                Please complete the form below. All qualified enterprise and workshop inquiries receive priority operational review.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Context & Capabilities Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#1D242B] bg-[#0A0D11] rounded-[10px] p-8">
              <TechLabel>Stakeholder Coverage</TechLabel>
              <h3 className="text-xl font-800 text-[#F5F7FA] mt-2 mb-4">
                Who We Collaborate With
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#32D8FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-700 text-[#F5F7FA]">Insurance Companies</h4>
                    <p className="text-xs text-[#8E99A5] mt-0.5">
                      Unified case dossier visibility, network cost tracking and standardized surveyor communications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Network className="w-5 h-5 text-[#32D8FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-700 text-[#F5F7FA]">Workshop Networks</h4>
                    <p className="text-xs text-[#8E99A5] mt-0.5">
                      Streamlined repair authorizations, digital milestone updates and automated cycle time telemetry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-[#32D8FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-700 text-[#F5F7FA]">Surveyors & OEMs</h4>
                    <p className="text-xs text-[#8E99A5] mt-0.5">
                      Digital assessment workflows, after-sales telemetry tracking and verified carbon reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#1D242B] bg-[#0A0D11] rounded-[10px] p-8">
              <TechLabel color="green">Operational SLA</TechLabel>
              <h3 className="text-xl font-800 text-[#F5F7FA] mt-2 mb-4">
                Direct Communications
              </h3>

              <ul className="space-y-3 text-xs text-[#8E99A5]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#62E6A7]" />
                  <span>Enterprise response within 1 business day</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#62E6A7]" />
                  <span>Dedicated solutions engineer for API evaluations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#62E6A7]" />
                  <span>Tailored deployment roadmaps for multi-state networks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
