import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { NetworkMetrics } from './NetworkMetrics';
import { IndiaMap } from './IndiaMap';
import { fadeUp, viewportConfig } from '@/lib/motion';

const STATE_DATA = [
  { state: 'Delhi NCR', hubs: 'Metro Central Core', status: 'OPERATIONAL' },
  { state: 'Haryana', hubs: 'Industrial Corridor', status: 'OPERATIONAL' },
  { state: 'Punjab', hubs: 'Northwest Hub', status: 'OPERATIONAL' },
  { state: 'Chandigarh', hubs: 'Tri-City Central Hub', status: 'OPERATIONAL' },
  { state: 'Himachal Pradesh', hubs: 'Himalayan Ridge', status: 'OPERATIONAL' },
  { state: 'Jammu & Kashmir', hubs: 'Northern Frontier Grid', status: 'OPERATIONAL' },
  { state: 'Uttarakhand', hubs: 'Foothills Network', status: 'OPERATIONAL' },
  { state: 'Uttar Pradesh', hubs: 'East-West Expressway', status: 'OPERATIONAL' },
  { state: 'Rajasthan', hubs: 'Western Highway Grid', status: 'OPERATIONAL' },
  { state: 'Madhya Pradesh', hubs: 'Central Logistics Hub', status: 'OPERATIONAL' },
  { state: 'Bihar', hubs: 'Eastern Sector Grid', status: 'OPERATIONAL' },
  { state: 'Karnataka', hubs: 'Southern Tech Corridor', status: 'OPERATIONAL' },
];

export function NetworkSection() {
  return (
    <SectionWrapper id="network" className="bg-[#050608]" border="bottom">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="max-w-2xl">
          <div className="mb-4">
            <TechLabel>NATIONWIDE COVERAGE</TechLabel>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 tracking-tight leading-[1.08] text-[#F5F7FA]">
            Automotive Service Grid <br />
            <span className="text-[#32D8FF]">Across 12 Operational States.</span>
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#8E99A5] leading-relaxed max-w-md lg:pb-2">
          Synchronized network orchestration linking insurers, certified surveyors, and verified workshop facilities under standard operational SLAs.
        </p>
      </div>

      {/* 5-Metric Telemetry Strip */}
      <div className="mb-10">
        <NetworkMetrics />
      </div>

      {/* 2-Column Cybernetic Grid: State Table + India Radar Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: State Breakdown Table */}
        <div className="lg:col-span-5 bg-[#0A0D11] border border-[#1D242B] rounded-[10px] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#1D242B] text-[10px] font-mono tracking-widest uppercase text-[#8E99A5]">
              <span>ACTIVE STATE REGION</span>
              <span>NETWORK STATUS</span>
            </div>

            <div className="divide-y divide-[#1D242B]/70 font-mono">
              {STATE_DATA.map((row) => (
                <div
                  key={row.state}
                  className="py-2 flex items-center justify-between hover:bg-[#0E1318] px-2 rounded transition-colors"
                >
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-[#F5F7FA] block">
                      {row.state}
                    </span>
                    <span className="text-[10px] text-[#8E99A5] block">
                      {row.hubs}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#62E6A7] bg-[#62E6A7]/10 px-2 py-0.5 rounded border border-[#62E6A7]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#62E6A7] animate-pulse" />
                    <span>{row.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#1D242B] flex items-center justify-between text-[10px] font-mono text-[#8E99A5]">
            <span>TOTAL COVERAGE</span>
            <span className="text-[#32D8FF]">12 STATES & TERRITORIES // 280+ WORKSHOPS</span>
          </div>
        </div>

        {/* Right Column: Cybernetic India Radar Map */}
        <div className="lg:col-span-7 bg-[#0A0D11] border border-[#1D242B] rounded-[10px] p-6 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="w-full flex items-center justify-between font-mono text-[10px] text-[#8E99A5] mb-2 border-b border-[#1D242B] pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#32D8FF]" />
            </div>
            <span>GEO-BOUNDARIES: WGS84</span>
          </div>

          <IndiaMap />
        </div>
      </div>
    </SectionWrapper>
  );
}
