import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { JourneyStage, JourneyStageData } from './JourneyStage';
import { fadeUp, viewportConfig } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const STAGES: JourneyStageData[] = [
  {
    number: '01',
    title: 'Case Registration',
    description: 'Vehicle case opened and assigned for survey.',
    detail: 'Digital intake captures vehicle credentials, damage records and telemetry data into a structured case dossier.',
  },
  {
    number: '02',
    title: 'Workshop Assignment',
    description: 'Case matched to appropriate workshop based on operational requirements.',
    detail: 'Automated matching aligns damage category, workshop specialization, bay capacity and geographic proximity.',
  },
  {
    number: '03',
    title: 'Real-Time Tracking',
    description: 'Repair progress monitored with milestone updates for all stakeholders.',
    detail: 'Continuous tracking of repair stages, part deliveries, surveyor checkpoints and workshop cycle times.',
  },
  {
    number: '04',
    title: 'Quality Check & Delivery',
    description: 'Repair verified and vehicle returned to customer.',
    detail: 'Final photographic inspection audit, carbon footprint computation and seamless customer handover.',
  },
];

export function VehicleJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Auto-progress ticker when in view or manual selection
  const stage = STAGES[activeStage];
  const progressPercent = ((activeStage) / (STAGES.length - 1)) * 100;

  return (
    <SectionWrapper id="vehicle-journey" className="bg-[#050608]" border="bottom">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center mb-16"
      >
        <div className="flex justify-center mb-4">
          <TechLabel>Intervention Lifecycle</TechLabel>
        </div>
        <h2 className="text-3xl md:text-5xl font-800 tracking-tight text-[#F5F7FA] mb-4">
          From case creation to delivery.
        </h2>
        <p className="text-[#8E99A5] text-sm md:text-base max-w-xl mx-auto">
          A disciplined, data-governed sequence connecting every milestone of the automotive repair journey.
        </p>
      </motion.div>

      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Interactive Stages list (5 cols) */}
        <div className="lg:col-span-5 space-y-3.5 order-2 lg:order-1">
          {STAGES.map((s, index) => (
            <JourneyStage
              key={s.number}
              stage={s}
              isActive={index === activeStage}
              isPast={index < activeStage}
              onSelect={() => setActiveStage(index)}
            />
          ))}

          {/* Step navigation buttons for accessibility */}
          <div className="flex items-center justify-between pt-4 px-2">
            <button
              type="button"
              disabled={activeStage === 0}
              onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
              className="text-xs font-semibold tracking-wider uppercase text-[#8E99A5] hover:text-[#32D8FF] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              ← Previous Stage
            </button>
            <span className="text-xs font-mono text-[#8E99A5]">
              {String(activeStage + 1).padStart(2, '0')} / {String(STAGES.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              disabled={activeStage === STAGES.length - 1}
              onClick={() => setActiveStage((prev) => Math.min(STAGES.length - 1, prev + 1))}
              className="text-xs font-semibold tracking-wider uppercase text-[#8E99A5] hover:text-[#32D8FF] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              Next Stage →
            </button>
          </div>
        </div>

        {/* Right Column: Cinematic Automotive Motion Visual (7 cols) */}
        <div className="lg:col-span-7 order-1 lg:order-2 border border-[#1D242B] bg-[#0A0D11] rounded-[14px] p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle technical background grid */}
          <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

          {/* Radial ambient glow focused on active stage */}
          <div
            className="absolute pointer-events-none transition-all duration-700"
            style={{
              top: '50%',
              left: `${20 + progressPercent * 0.6}%`,
              transform: 'translate(-50%, -50%)',
              width: '320px',
              height: '320px',
              background: 'radial-gradient(circle, rgba(50,216,255,0.08) 0%, transparent 70%)',
            }}
          />

          {/* Stage telemetry bar */}
          <div className="flex items-center justify-between border-b border-[#1D242B] pb-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#32D8FF] animate-pulse" />
              <span className="text-[11px] font-mono text-[#F5F7FA] uppercase tracking-wider">
                STAGE {stage.number} :: {stage.title}
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#62E6A7] uppercase tracking-wider">
              DATA STREAM ACTIVE
            </span>
          </div>

          {/* Central Visual: Progress Track & Rotating Precision Wheel */}
          <div className="relative py-12 flex flex-col items-center justify-center">
            {/* Dynamic Wheel Icon translating horizontally */}
            <div className="w-full relative h-36 flex items-center">
              {/* Animated Progress Line */}
              <div className="absolute w-full h-[2px] bg-[#1D242B] top-1/2 -translate-y-1/2">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#32D8FF] to-[#62E6A7]"
                  style={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              {/* Waypoint nodes on track */}
              {STAGES.map((s, idx) => {
                const pos = (idx / (STAGES.length - 1)) * 100;
                const isPassed = idx <= activeStage;
                return (
                  <div
                    key={s.number}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
                    style={{ left: `${pos}%` }}
                    onClick={() => setActiveStage(idx)}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                        isPassed
                          ? 'border-[#32D8FF] bg-[#050608] shadow-[0_0_10px_rgba(50,216,255,0.6)]'
                          : 'border-[#1D242B] bg-[#0A0D11] group-hover:border-[#8E99A5]'
                      }`}
                    />
                    <span className="text-[10px] font-mono text-[#8E99A5] mt-2 group-hover:text-[#F5F7FA]">
                      {s.number}
                    </span>
                  </div>
                );
              })}

              {/* The Wheel/Silhouette traveling on track */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
                animate={{ left: `${progressPercent}%` }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative flex items-center justify-center">
                  <motion.svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    animate={prefersReduced ? {} : { rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="drop-shadow-[0_0_12px_rgba(50,216,255,0.4)]"
                  >
                    <circle cx="32" cy="32" r="28" stroke="#32D8FF" strokeWidth="2" />
                    <circle cx="32" cy="32" r="18" stroke="#1D242B" strokeWidth="1.5" />
                    <circle cx="32" cy="32" r="8" fill="#32D8FF" />
                    {/* Precision Spokes */}
                    <line x1="32" y1="4" x2="32" y2="24" stroke="#32D8FF" strokeWidth="1.5" />
                    <line x1="32" y1="40" x2="32" y2="60" stroke="#32D8FF" strokeWidth="1.5" />
                    <line x1="4" y1="32" x2="24" y2="32" stroke="#32D8FF" strokeWidth="1.5" />
                    <line x1="40" y1="32" x2="60" y2="32" stroke="#32D8FF" strokeWidth="1.5" />
                  </motion.svg>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stage Narrative Callout */}
          <div className="mt-6 p-4 rounded-[8px] border border-[#1D242B] bg-[#050608]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase font-mono tracking-widest text-[#8E99A5]">
                Operational Status
              </p>
              <p className="text-sm font-semibold text-[#F5F7FA] mt-0.5">
                {stage.title} Verified & Synchronised
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono px-2.5 py-1 rounded-[4px] bg-[#101419] border border-[#1D242B] text-[#32D8FF]">
                CYCLE STEP {stage.number}/04
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
