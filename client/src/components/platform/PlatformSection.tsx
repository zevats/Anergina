import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { fadeUp, viewportConfig } from '@/lib/motion';
import {
  FileText,
  Search,
  Wrench,
  Clock,
  BarChart3,
  Leaf,
  Activity,
  Terminal,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface ConsoleTab {
  id: string;
  title: string;
  tag: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: 'cyan' | 'green';
}

const CONSOLES: ConsoleTab[] = [
  {
    id: 'case-management',
    title: 'Case Management Console',
    tag: 'GOVERNANCE // CORE',
    desc: 'Centralized lifecycle tracking from first notification of loss to final delivery.',
    icon: FileText,
    accent: 'cyan',
  },
  {
    id: 'survey-inspection',
    title: 'Survey & Inspection Console',
    tag: 'DIAGNOSTIC // TELEMETRY',
    desc: 'Digital visual audit, damage mapping, and instant estimate generation.',
    icon: Search,
    accent: 'cyan',
  },
  {
    id: 'workshop-network',
    title: 'Workshop Network Console',
    tag: 'LOGISTICS // SCHEDULING',
    desc: 'Real-time bay utilization, scheduling, and technician telemetry.',
    icon: Wrench,
    accent: 'cyan',
  },
  {
    id: 'repair-tracking',
    title: 'Repair Tracking Console',
    tag: 'MILESTONE // AUDIT',
    desc: 'Milestone-level execution visibility with timestamped cryptographic evidence.',
    icon: Clock,
    accent: 'cyan',
  },
  {
    id: 'cost-intelligence',
    title: 'Cost Intelligence Console',
    tag: 'FINANCIAL // ANALYTICS',
    desc: 'Dynamic parts catalog pricing, labor standardization, and claim reconciliation.',
    icon: BarChart3,
    accent: 'cyan',
  },
  {
    id: 'carbon-intelligence',
    title: 'Carbon Intelligence Console',
    tag: 'ESG // SCOPE 3',
    desc: 'ESG repair scoring, recycled parts tracking, and CO2 emissions auditing.',
    icon: Leaf,
    accent: 'green',
  },
];

export function PlatformSection() {
  const [activeTab, setActiveTab] = useState<string>('survey-inspection');
  const currentConsole = CONSOLES.find((c) => c.id === activeTab) || CONSOLES[0];

  return (
    <SectionWrapper id="platform" className="bg-[#050608]" border="bottom">
      {/* Section Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="mb-4">
          <TechLabel>MODULAR OPERATIONAL SUITE</TechLabel>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 tracking-tight leading-[1.08] text-[#F5F7FA] mb-5">
          One unified system. <br />
          <span className="text-[#32D8FF]">Six specialized consoles.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#8E99A5] leading-relaxed">
          Every stakeholder interacts through dedicated telemetry environments designed for zero-latency execution.
        </p>
      </div>

      {/* Dual-Pane Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Pane: 6 Console Selectors */}
        <div className="lg:col-span-5 space-y-2.5">
          {CONSOLES.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            const isGreen = tab.accent === 'green';

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-4 rounded-[8px] border transition-all duration-200 flex items-start gap-4 relative overflow-hidden group ${
                  isActive
                    ? isGreen
                      ? 'bg-[#081510] border-[#62E6A7]/50 shadow-[0_0_20px_rgba(98,230,167,0.1)]'
                      : 'bg-[#09151E] border-[#32D8FF]/50 shadow-[0_0_20px_rgba(50,216,255,0.1)]'
                    : 'bg-[#0A0D11] border-[#1D242B] hover:border-[#32D8FF]/30 hover:bg-[#0E1217]'
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeConsoleIndicator"
                    className={`absolute left-0 top-0 bottom-0 w-1 ${
                      isGreen ? 'bg-[#62E6A7]' : 'bg-[#32D8FF]'
                    }`}
                  />
                )}

                {/* Console Icon */}
                <div
                  className={`w-9 h-9 rounded-[6px] border flex items-center justify-center flex-shrink-0 transition-colors ${
                    isActive
                      ? isGreen
                        ? 'bg-[#0E2319] border-[#62E6A7]/60 text-[#62E6A7]'
                        : 'bg-[#0C2432] border-[#32D8FF]/60 text-[#32D8FF]'
                      : 'bg-[#050608] border-[#1D242B] text-[#8E99A5] group-hover:text-[#F5F7FA]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[9px] font-mono tracking-widest uppercase font-semibold ${
                        isActive
                          ? isGreen
                            ? 'text-[#62E6A7]'
                            : 'text-[#32D8FF]'
                          : 'text-[#8E99A5]'
                      }`}
                    >
                      {tab.tag}
                    </span>
                    {isActive && (
                      <span className="flex items-center gap-1 text-[9px] font-mono text-[#32D8FF]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#32D8FF] animate-pulse" />
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <h3
                    className={`text-sm sm:text-base font-bold mt-0.5 tracking-tight ${
                      isActive ? 'text-[#F5F7FA]' : 'text-[#8E99A5] group-hover:text-[#F5F7FA]'
                    }`}
                  >
                    {tab.title}
                  </h3>
                  <p className="text-xs text-[#8E99A5] mt-1 line-clamp-2 leading-relaxed">
                    {tab.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Pane: High-Tech Terminal Console */}
        <div className="lg:col-span-7 bg-[#0A0D11] border border-[#1D242B] rounded-[10px] overflow-hidden shadow-2xl relative">
          {/* Terminal Window Header */}
          <div className="px-4 py-3 bg-[#050608] border-b border-[#1D242B] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              <span className="text-[11px] font-mono text-[#8E99A5] ml-2 font-medium">
                ANERGINA CONSOLE v2.4 // SECURE RUNTIME
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono text-[#8E99A5]">
              <span className="flex items-center gap-1.5 text-[#32D8FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#32D8FF] animate-pulse" />
                LIVE TELEMETRY
              </span>
            </div>
          </div>

          {/* 3 Metrics Top Banner */}
          <div className="grid grid-cols-3 border-b border-[#1D242B] bg-[#07090C] divide-x divide-[#1D242B] text-center py-2.5">
            <div>
              <div className="text-[9px] font-mono uppercase text-[#8E99A5]">ACTIVE CLAIMS</div>
              <div className="text-xs sm:text-sm font-mono font-bold text-[#F5F7FA] mt-0.5">1,482</div>
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase text-[#8E99A5]">AVG CYCLE TIME</div>
              <div className="text-xs sm:text-sm font-mono font-bold text-[#32D8FF] mt-0.5">3.2 DAYS</div>
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase text-[#8E99A5]">AUDIT ACCURACY</div>
              <div className="text-xs sm:text-sm font-mono font-bold text-[#62E6A7] mt-0.5">99.8%</div>
            </div>
          </div>

          {/* Center Blueprint Viewport with Scanning Laser */}
          <div className="p-5 sm:p-6 bg-[#06080B] flex flex-col items-center justify-center relative min-h-[300px]">
            <div className="relative w-full max-w-[420px] aspect-[16/9] rounded-[8px] overflow-hidden border border-[#1D242B] bg-[#050608] flex items-center justify-center p-2">
              <img
                src="/assets/top-car.jpg"
                alt="Vehicle Telemetry Scanner Blueprint"
                className="w-full h-full object-contain object-center opacity-85"
              />

              {/* Scanning Laser Beam */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#32D8FF] to-transparent shadow-[0_0_12px_#32D8FF] animate-scanline pointer-events-none" />

              {/* Coordinate Hotspot 1 (Front Bumper) */}
              <div className="absolute top-[28%] left-[24%] flex items-center gap-1 group">
                <span className="w-3 h-3 rounded-full border border-[#32D8FF] bg-[#32D8FF]/30 flex items-center justify-center animate-ping" />
                <span className="w-2 h-2 rounded-full bg-[#32D8FF] absolute" />
                <div className="absolute left-4 -top-3 bg-[#0A0D11]/95 border border-[#32D8FF]/60 px-2 py-0.5 rounded text-[9px] font-mono text-[#32D8FF] whitespace-nowrap shadow-lg">
                  DAM-01 // FRONT FASCIA [SUR-AUDIT OK]
                </div>
              </div>

              {/* Coordinate Hotspot 2 (Rear Fender) */}
              <div className="absolute top-[55%] right-[30%] flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full border border-[#FFB800] bg-[#FFB800]/40 flex items-center justify-center animate-pulse" />
                <div className="absolute right-4 -top-2 bg-[#0A0D11]/95 border border-[#FFB800]/60 px-2 py-0.5 rounded text-[9px] font-mono text-[#FFB800] whitespace-nowrap shadow-lg">
                  DAM-02 // DENT 42mm [PARTS SOURCED]
                </div>
              </div>
            </div>

            {/* Diagnostic readout below vehicle */}
            <div className="w-full max-w-[420px] mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
              <div className="p-2 rounded bg-[#0A0D11] border border-[#1D242B]">
                <span className="text-[#8E99A5] block text-[8px]">OEM TARIFF SYNC</span>
                <span className="text-[#32D8FF] font-bold">100% MATCH</span>
              </div>
              <div className="p-2 rounded bg-[#0A0D11] border border-[#1D242B]">
                <span className="text-[#8E99A5] block text-[8px]">BAY PROTOCOL</span>
                <span className="text-[#F5F7FA] font-bold">STAGE 02/04</span>
              </div>
              <div className="p-2 rounded bg-[#0A0D11] border border-[#1D242B]">
                <span className="text-[#8E99A5] block text-[8px]">ESG INDEX</span>
                <span className="text-[#62E6A7] font-bold">A+ OPTIMIZED</span>
              </div>
            </div>
          </div>

          {/* Terminal Event Stream / Live Log */}
          <div className="p-4 bg-[#050608] border-t border-[#1D242B] font-mono text-[11px] space-y-1.5 text-[#8E99A5]">
            <div className="text-[10px] uppercase font-bold text-[#8E99A5] mb-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#32D8FF]" />
              SYNCHRONIZED AUDIT STREAM
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#32D8FF]">[09:41:22]</span>
              <span>CASE #AG-8821: Workshop assignment confirmed (Apex Auto Hub, Gurugram)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#32D8FF]">[09:42:05]</span>
              <span>TELEMATICS: Sensor diagnostics payload parsed (OBD-II CAN bus link OK)</span>
            </div>
            <div className="flex items-center gap-2 text-[#62E6A7]">
              <span>[09:43:18]</span>
              <span>ESTIMATE: 4 OEM line items verified against insurance benchmark tariffs</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}