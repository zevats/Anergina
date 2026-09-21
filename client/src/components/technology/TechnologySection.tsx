import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion';
import { Cpu, Activity, Leaf } from 'lucide-react';

const TECH_CARDS = [
  {
    title: 'AI-ASSISTED OPERATIONS',
    tag: 'VISION & NLP',
    icon: Cpu,
    desc: 'Machine vision models identify component damage and cross-reference standard repair labor guides with 99.4% precision.',
    accent: 'cyan',
  },
  {
    title: 'REAL-TIME TELEMETRY',
    tag: 'CAN-BUS & IOT',
    icon: Activity,
    desc: 'Live sensor feeds and status updates eliminate blind spots across all repair bays and dispatch lines.',
    accent: 'cyan',
  },
  {
    title: 'CARBON INTELLIGENCE',
    tag: 'SCOPE 3 // ESG',
    icon: Leaf,
    desc: 'Built-in carbon calculation for every replaced part, repair procedure, and logistics route to drive net-zero goals.',
    accent: 'green',
  },
];

export function TechnologySection() {
  return (
    <SectionWrapper id="technology" className="bg-[#050608]" border="bottom">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="max-w-2xl">
          <div className="mb-4">
            <TechLabel>AUTOMOTIVE TELEMATICS & LABS</TechLabel>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 tracking-tight leading-[1.08] text-[#F5F7FA]">
            Intelligence behind every physical <br />
            <span className="text-[#32D8FF]">intervention.</span>
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#8E99A5] leading-relaxed max-w-md lg:pb-2">
          Our proprietary intelligence layer connects deep vehicle hardware telemetry with enterprise insurance workflows for predictive, flawless execution.
        </p>
      </div>

      {/* Aerodynamic Wind-Tunnel Lab Centerpiece */}
      <div className="relative w-full rounded-[12px] overflow-hidden border border-[#1D242B] bg-[#0A0D11] shadow-[0_0_50px_rgba(0,0,0,0.8)] mb-10">
        {/* Top Telemetry Header Bar */}
        <div className="px-4 py-2.5 bg-[#050608]/90 backdrop-blur-md border-b border-[#1D242B] flex items-center justify-between font-mono text-[10px] text-[#8E99A5]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#32D8FF]">
              <span className="w-2 h-2 rounded-full bg-[#32D8FF] animate-ping" />
              <span>AERO-DYNAMICS LAB 01</span>
            </span>
            <span className="text-[#1D242B]">|</span>
            <span className="hidden sm:inline">AIRFLOW VELOCITY: 140 KM/H</span>
          </div>
          <div className="flex items-center gap-3">
            <span>DRAG TELEMETRY: ACTIVE</span>
            <span className="text-[#1D242B]">|</span>
            <span className="text-[#62E6A7]">CALIBRATED</span>
          </div>
        </div>

        {/* Main Image Container */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-black flex items-center justify-center">
          <img
            src="/assets/wind-tunnel.jpg"
            alt="Anergina Wind Tunnel Aerodynamic Vehicle Testing"
            className="w-full h-full object-cover object-center brightness-95 contrast-105"
          />

          {/* Vignette & Contrast Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D11] via-transparent to-black/50 pointer-events-none" />

          {/* Animated Airflow Streamlines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute top-[35%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#32D8FF] to-transparent opacity-60 animate-airflow-1" />
            <div className="absolute top-[48%] left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#62E6A7] to-transparent opacity-50 animate-airflow-2" />
            <div className="absolute top-[62%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#32D8FF] to-transparent opacity-70 animate-airflow-1" />
            <div className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-[#32D8FF] to-transparent shadow-[0_0_15px_#32D8FF] animate-scanline" />
          </div>

          {/* Telemetry Hotspot 1: Front Aerodynamic Drag */}
          <div className="absolute bottom-[28%] left-[18%] z-20 hidden sm:block">
            <div className="relative group cursor-default">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#32D8FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#32D8FF]" />
                </span>
                <div className="bg-[#050608]/90 backdrop-blur-md border border-[#32D8FF]/60 px-3 py-1.5 rounded-[4px] shadow-[0_0_20px_rgba(50,216,255,0.2)]">
                  <div className="text-[10px] font-mono font-bold text-[#32D8FF] uppercase tracking-wider">
                    DRAG CD // 0.24 CX
                  </div>
                  <div className="text-[9px] font-mono text-[#8E99A5]">
                    AERO PROFILE: OPTIMAL
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry Hotspot 2: Cabin Diagnostic Bus */}
          <div className="absolute top-[32%] right-[35%] z-20 hidden md:block">
            <div className="relative group cursor-default">
              <div className="flex items-center gap-2">
                <div className="bg-[#050608]/90 backdrop-blur-md border border-[#32D8FF]/60 px-3 py-1.5 rounded-[4px] shadow-[0_0_20px_rgba(50,216,255,0.2)] text-right">
                  <div className="text-[10px] font-mono font-bold text-[#F5F7FA] uppercase tracking-wider">
                    DIAGNOSTIC BUS // 1000 KBPS
                  </div>
                  <div className="text-[9px] font-mono text-[#32D8FF]">
                    CAN FD 2.0 PROTOCOL
                  </div>
                </div>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#32D8FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#32D8FF]" />
                </span>
              </div>
            </div>
          </div>

          {/* Telemetry Hotspot 3: Powertrain & Battery Sensor */}
          <div className="absolute bottom-[22%] right-[18%] z-20 hidden sm:block">
            <div className="relative group cursor-default">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#62E6A7] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#62E6A7]" />
                </span>
                <div className="bg-[#050608]/90 backdrop-blur-md border border-[#62E6A7]/60 px-3 py-1.5 rounded-[4px] shadow-[0_0_20px_rgba(98,230,167,0.2)]">
                  <div className="text-[10px] font-mono font-bold text-[#62E6A7] uppercase tracking-wider">
                    BATTERY SENSOR // 98% HEALTH
                  </div>
                  <div className="text-[9px] font-mono text-[#8E99A5]">
                    THERMAL: 24°C // NOMINAL
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HUD Corner Brackets */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#32D8FF] pointer-events-none opacity-80" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#32D8FF] pointer-events-none opacity-80" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#32D8FF] pointer-events-none opacity-80" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#32D8FF] pointer-events-none opacity-80" />
        </div>
      </div>

      {/* 3 Bottom Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TECH_CARDS.map((card) => {
          const Icon = card.icon;
          const isGreen = card.accent === 'green';

          return (
            <div
              key={card.title}
              className={`p-6 rounded-[10px] bg-[#0A0D11] border border-[#1D242B] ${
                isGreen ? 'hover:border-[#62E6A7]/50' : 'hover:border-[#32D8FF]/50'
              } transition-all duration-200 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-9 h-9 rounded-[6px] bg-[#050608] border border-[#1D242B] flex items-center justify-center ${
                      isGreen ? 'text-[#62E6A7]' : 'text-[#32D8FF]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border ${
                      isGreen
                        ? 'text-[#62E6A7] bg-[#62E6A7]/10 border-[#62E6A7]/25'
                        : 'text-[#32D8FF] bg-[#32D8FF]/10 border-[#32D8FF]/25'
                    }`}
                  >
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#F5F7FA] tracking-tight mb-2">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8E99A5] leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1D242B] flex items-center justify-between text-[10px] font-mono text-[#8E99A5]">
                <span>TELEMETRY LINKED</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isGreen ? 'bg-[#62E6A7]' : 'bg-[#32D8FF]'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
