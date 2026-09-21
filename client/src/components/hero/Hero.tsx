import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { WheelVisual } from './WheelVisual';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion';

export function Hero() {
  return (
    <section
      className="relative w-full min-h-[85vh] flex items-center bg-[#050608] pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden border-b border-[#1D242B]/80"
      aria-label="Hero Overview"
    >
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      {/* Atmospheric Ambient Glows */}
      <div
        className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(50,216,255,0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(98,230,167,0.03) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">
          
          {/* ── LEFT COLUMN: BRAND & STRATEGIC NARRATIVE (7 Cols) ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Technical Sub-Header Badge */}
            <motion.div variants={staggerItem} className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#0A0D11] border border-[#1D242B] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#32D8FF] animate-pulse" />
                <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-[#32D8FF]">
                  From Zero to One
                </span>
              </div>
            </motion.div>

            {/* Primary Headline Matching Uploaded Mockup */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.15rem] font-900 tracking-tight leading-[1.05] text-[#F5F7FA] mb-6"
            >
              Precision automotive service. <br />
              <span className="text-[#32D8FF] drop-shadow-[0_0_25px_rgba(50,216,255,0.25)]">
                Synchronized by real-time intelligence.
              </span>
            </motion.h1>

            {/* Supporting Factual Copy */}
            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg text-[#8E99A5] leading-relaxed max-w-2xl mb-8"
            >
              Anergina connects insurers, surveyors and workshops through a unified platform for vehicle case management, repair operations, cost intelligence and environmental impact.
            </motion.p>

            {/* 3 Metric Pills matching Mockup */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 w-full max-w-xl"
            >
              <div className="bg-[#0A0D11] border border-[#1D242B] rounded-[8px] p-3 sm:p-4 flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-mono font-900 text-[#F5F7FA] tracking-tight">
                  <AnimatedCounter end={200} suffix="+" duration={1600} delay={200} />
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#8E99A5] mt-1">
                  Workshop Partners
                </span>
              </div>
              <div className="bg-[#0A0D11] border border-[#1D242B] rounded-[8px] p-3 sm:p-4 flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-mono font-900 text-[#32D8FF] tracking-tight">
                  <AnimatedCounter end={13} suffix="+" duration={1600} delay={300} />
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#8E99A5] mt-1">
                  Insurance Partners
                </span>
              </div>
              <div className="bg-[#0A0D11] border border-[#1D242B] rounded-[8px] p-3 sm:p-4 flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-mono font-900 text-[#62E6A7] tracking-tight">
                  <AnimatedCounter end={10} duration={1600} delay={400} />
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#8E99A5] mt-1">
                  Indian States
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button to="/contact" variant="primary" size="lg" className="w-full sm:w-auto font-mono">
                <span>Schedule Platform Demo</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button to="/platform" variant="secondary" size="lg" className="w-full sm:w-auto font-mono">
                <span>Partner With Us</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: ROTATING PERFORMANCE WHEEL WITH HUD (5 Cols) ── */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
            <div className="w-full max-w-[440px] sm:max-w-[480px] aspect-square flex items-center justify-center relative">
              <WheelVisual />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}