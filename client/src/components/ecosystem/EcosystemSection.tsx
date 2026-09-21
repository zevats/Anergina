import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';
import { ShieldCheck, FileSearch, Wrench, Car, Check } from 'lucide-react';

const STAKEHOLDERS = [
  {
    id: 'insurers',
    num: '01',
    role: 'Insurance Carriers',
    tag: 'INSURERS',
    icon: ShieldCheck,
    desc: 'Automate claim verification, slash cycle times by 40%, and enforce strict cost governance across approved networks.',
    bullets: [
      'Automated FNOL triage',
      'Algorithmic parts price verification',
      'Zero manual invoice reconciliations',
    ],
    accent: 'cyan',
  },
  {
    id: 'surveyors',
    num: '02',
    role: 'Independent Surveyors',
    tag: 'SURVEYORS',
    icon: FileSearch,
    desc: 'Digital inspection suites with photographic evidence capture, AI damage assessment, and one-tap report generation.',
    bullets: [
      'Photographic coordinate mapping',
      'Instant digital estimate drafting',
      'Direct insurer telemetry bridge',
    ],
    accent: 'cyan',
  },
  {
    id: 'workshops',
    num: '03',
    role: 'Certified Workshops',
    tag: 'WORKSHOPS',
    icon: Wrench,
    desc: 'Predictable job flow, digital parts ordering, real-time bay scheduling, and accelerated claim settlements.',
    bullets: [
      'Optimized bay capacity allocation',
      'Live parts delivery tracking',
      'Fast-track claim disbursement',
    ],
    accent: 'cyan',
  },
  {
    id: 'customers',
    num: '04',
    role: 'Vehicle Owners',
    tag: 'CUSTOMERS',
    icon: Car,
    desc: 'Total transparency with live repair tracking, verified genuine parts certificates, and predictable delivery dates.',
    bullets: [
      'Live repair milestone tracking',
      'Verified OEM parts authentication',
      'Digital warranty & carbon passport',
    ],
    accent: 'green',
  },
];

export function EcosystemSection() {
  return (
    <SectionWrapper id="ecosystem" className="bg-[#050608]" border="bottom">
      {/* Section Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="mb-4">
          <TechLabel>MULTI-SIDED PLATFORM</TechLabel>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 tracking-tight text-[#F5F7FA] mb-4 leading-[1.08]">
          Engineered for all four automotive stakeholders.
        </h2>
        <p className="text-base sm:text-lg text-[#8E99A5] leading-relaxed">
          Anergina synchronizes every participant in the repair and claim lifecycle through unified data governance.
        </p>
      </div>

      {/* 4-Card Stakeholders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
        {STAKEHOLDERS.map((s) => {
          const Icon = s.icon;
          const isGreen = s.accent === 'green';

          return (
            <div
              key={s.id}
              className={`p-6 rounded-[10px] bg-[#0A0D11] border border-[#1D242B] ${
                isGreen ? 'hover:border-[#62E6A7]/50' : 'hover:border-[#32D8FF]/50'
              } transition-all duration-200 flex flex-col justify-between group`}
            >
              <div>
                {/* Header: Icon + Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-9 h-9 rounded-[6px] bg-[#050608] border border-[#1D242B] flex items-center justify-center ${
                      isGreen ? 'text-[#62E6A7]' : 'text-[#32D8FF]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border ${
                      isGreen
                        ? 'text-[#62E6A7] bg-[#62E6A7]/10 border-[#62E6A7]/25'
                        : 'text-[#8E99A5] bg-[#050608] border-[#1D242B]'
                    }`}
                  >
                    {s.num} // {s.tag}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-lg font-bold text-[#F5F7FA] tracking-tight mb-2">
                  {s.role}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#8E99A5] leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 border-t border-[#1D242B] pt-4">
                  {s.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-xs text-[#8E99A5]">
                      <span
                        className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isGreen ? 'bg-[#62E6A7]/15 text-[#62E6A7]' : 'bg-[#32D8FF]/15 text-[#32D8FF]'
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-3 border-t border-[#1D242B] flex items-center justify-between text-[10px] font-mono text-[#8E99A5]">
                <span>GOVERNED STAGE</span>
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
