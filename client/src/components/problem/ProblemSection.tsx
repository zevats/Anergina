import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { AlertCircle, CheckCircle2, Clock, FileSpreadsheet, Wrench, Leaf } from 'lucide-react';

const PROBLEM_ROWS = [
  {
    domain: 'CLAIM INTAKE & TRIAGE',
    icon: Clock,
    legacy: 'Manual dispatch, unverified customer statements, 24-48 hr intake latency.',
    anergina: 'Instant digital FNOL intake, automated geo-routing, <15 min triage.',
  },
  {
    domain: 'ESTIMATION & AUDIT',
    icon: FileSpreadsheet,
    legacy: 'Subjective visual estimates, arbitrary labor rates, non-standardized part markups.',
    anergina: 'Algorithmic parts catalog verification, standardized labor benchmark tariffs.',
  },
  {
    domain: 'REPAIR EXECUTION',
    icon: Wrench,
    legacy: 'Zero milestone visibility, untracked cycle delays, unverified parts installation.',
    anergina: 'Real-time bay telemetry, photographic step verification, live customer tracking.',
  },
  {
    domain: 'CARBON & ESG AUDIT',
    icon: Leaf,
    legacy: 'Zero scrap accounting, unmonitored paint fumes, unmeasured scope-3 footprint.',
    anergina: 'Automated carbon calculation per repair job, verified green parts lifecycle.',
  },
];

export function ProblemSection() {
  return (
    <SectionWrapper id="problem" className="bg-[#050608]" border="bottom">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="max-w-2xl">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#1A0E0E] border border-[#FF5555]/30 text-[#FF5555] text-[10px] font-mono font-semibold uppercase tracking-wider">
              <AlertCircle className="w-3 h-3 text-[#FF5555]" />
              CURRENT INDUSTRY CHALLENGE
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 tracking-tight leading-[1.08] text-[#F5F7FA]">
            From fragmented chaos to audited <br />
            <span className="text-[#32D8FF]">deterministic repair.</span>
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#8E99A5] leading-relaxed max-w-md lg:pb-2">
          Traditional automotive workflows suffer from disconnected handoffs, unverified repair times, and manual claim disputes. Anergina establishes single-pane governance.
        </p>
      </div>

      {/* 3-Column Comparative Matrix */}
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[760px] lg:min-w-full">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 mb-3 text-[11px] font-mono font-bold tracking-widest uppercase">
            <div className="col-span-3 text-[#8E99A5] px-4 py-2 flex items-center">
              OPERATIONAL DOMAIN
            </div>
            <div className="col-span-4 text-[#FF6B6B] px-4 py-2.5 bg-[#170B0B] border border-[#FF5555]/25 rounded-[6px] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5555]" />
              Traditional automotives
            </div>
            <div className="col-span-5 text-[#32D8FF] px-4 py-2.5 bg-[#0C1E28] border border-[#32D8FF]/40 rounded-[6px] flex items-center gap-2 shadow-[0_0_15px_rgba(50,216,255,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#32D8FF] animate-pulse" />
              ANERGINA UNIFIED GOVERNANCE
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {PROBLEM_ROWS.map((row) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.domain}
                  className="grid grid-cols-12 gap-4 items-stretch rounded-[8px] bg-[#0A0D11] border border-[#1D242B] p-3 text-sm hover:border-[#32D8FF]/40 transition-colors"
                >
                  {/* Domain Name */}
                  <div className="col-span-3 flex items-center gap-3 px-3 py-2 border-r border-[#1D242B]/80">
                    <div className="w-8 h-8 rounded-[6px] bg-[#050608] border border-[#1D242B] flex items-center justify-center flex-shrink-0 text-[#32D8FF]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono font-semibold text-[#F5F7FA] text-xs sm:text-sm">
                      {row.domain}
                    </span>
                  </div>

                  {/* Traditional automotives */}
                  <div className="col-span-4 px-4 py-2 text-xs sm:text-sm leading-relaxed text-[#8E99A5] flex items-center border-r border-[#1D242B]/80">
                    {row.legacy}
                  </div>

                  {/* Anergina Unified Governance */}
                  <div className="col-span-5 px-4 py-3 text-xs sm:text-sm leading-relaxed text-[#F5F7FA] font-medium bg-[#08151D] border border-[#32D8FF]/30 rounded-[6px] flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#32D8FF] flex-shrink-0" />
                    <span>{row.anergina}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}