import { motion } from 'framer-motion';
import { SEOHead } from '@/components/common/SEOHead';
import { TechLabel } from '@/components/common/TechLabel';
import { Button } from '@/components/common/Button';
import { fadeUp, viewportConfig } from '@/lib/motion';
import { ShieldCheck, ArrowRight, Lock } from 'lucide-react';

import { AnerginaLogo } from '@/components/common/AnerginaLogo';

export function LoginPage() {
  const authUrl = (import.meta as any).env?.VITE_AUTH_URL || '#';

  return (
    <>
      <SEOHead
        title="Sign In — Anergina Platform"
        description="Portal entry point for insurers, surveyors, and workshop partners on the Anergina operating system."
      />

      <section className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-[#050608] relative overflow-hidden">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

        {/* Ambient glow in center */}
        <div
          className="absolute pointer-events-none w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(50,216,255,0.06) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="w-full max-w-md px-6 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="border border-[#1D242B] bg-[#0A0D11] rounded-[14px] p-8 sm:p-10 shadow-2xl relative"
          >
            {/* Header Emblem */}
            <div className="flex items-center justify-center mb-6">
              <AnerginaLogo size={48} color="cyan" />
            </div>

            <div className="text-center mb-8">
              <TechLabel>Enterprise Access</TechLabel>
              <h1 className="text-2xl font-800 text-[#F5F7FA] tracking-tight mt-2 mb-2">
                Anergina Platform Portal
              </h1>
              <p className="text-xs sm:text-sm text-[#8E99A5] leading-relaxed">
                Authentication is strictly governed by institutional identity providers. Please continue to your federated organization login.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                href={authUrl}
                variant="primary"
                size="lg"
                className="w-full justify-between"
              >
                <span>Continue to Single Sign-On</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="pt-6 border-t border-[#1D242B] text-center">
                <div className="flex items-center justify-center gap-2 text-xs text-[#8E99A5] mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#62E6A7]" />
                  <span>Enterprise MFA & SAML 2.0 Enabled</span>
                </div>
                <p className="text-[11px] text-[#8E99A5]/80">
                  Workshop or surveyor partners requiring account provisioning should contact their enterprise account administrator.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
