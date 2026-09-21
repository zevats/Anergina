import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ShieldCheck, FileSearch, Wrench, Car, UserCheck, ArrowRight, ChevronDown } from 'lucide-react';

interface NetworkNode {
  id: string;
  role: string;
  subtext: string;
  badge: string;
  icon: React.ReactNode;
}

const ECOSYSTEM_NODES: NetworkNode[] = [
  {
    id: 'insurers',
    role: 'Insurers',
    subtext: 'Case authorization & claims governance',
    badge: 'STAGE 01',
    icon: <ShieldCheck className="w-5 h-5 text-[#32D8FF]" />,
  },
  {
    id: 'surveyors',
    role: 'Surveyors',
    subtext: 'Physical inspection & damage telematics',
    badge: 'STAGE 02',
    icon: <FileSearch className="w-5 h-5 text-[#32D8FF]" />,
  },
  {
    id: 'workshops',
    role: 'Workshops',
    subtext: 'Service bay scheduling & repair execution',
    badge: 'STAGE 03',
    icon: <Wrench className="w-5 h-5 text-[#32D8FF]" />,
  },
  {
    id: 'vehicle',
    role: 'Vehicle',
    subtext: 'Intervention lifecycle & parts tracking',
    badge: 'ACTIVE DOSSIER',
    icon: <Car className="w-5 h-5 text-[#62E6A7]" />,
  },
  {
    id: 'customer',
    role: 'Customer',
    subtext: 'Milestone visibility & verified handoff',
    badge: 'DELIVERY',
    icon: <UserCheck className="w-5 h-5 text-[#62E6A7]" />,
  },
];

export function EcosystemFlow() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="w-full relative">
      {/* ── Desktop & Tablet: Horizontal Flow Grid ── */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-4 relative items-stretch">
        {ECOSYSTEM_NODES.map((node, index) => {
          const isLast = index === ECOSYSTEM_NODES.length - 1;
          const isVehicle = node.id === 'vehicle';
          return (
            <div key={node.id} className="relative flex flex-col">
              {/* Card Container */}
              <div
                className={`flex-1 p-6 rounded-[10px] border transition-all duration-200 flex flex-col justify-between ${
                  isVehicle
                    ? 'bg-[#101419] border-[#62E6A7]/40 shadow-[0_0_20px_rgba(98,230,167,0.06)]'
                    : 'bg-[#0A0D11] border-[#1D242B] hover:border-[#32D8FF]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2 rounded-[6px] bg-[#050608] border border-[#1D242B]">
                      {node.icon}
                    </div>
                    <span
                      className={`text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border ${
                        isVehicle
                          ? 'text-[#62E6A7] bg-[#62E6A7]/10 border-[#62E6A7]/20'
                          : 'text-[#8E99A5] bg-[#050608] border-[#1D242B]'
                      }`}
                    >
                      {node.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-800 text-[#F5F7FA] tracking-tight mb-1.5">
                    {node.role}
                  </h3>

                  <p className="text-xs text-[#8E99A5] leading-relaxed">
                    {node.subtext}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#1D242B]/80 flex items-center justify-between text-[10px] font-mono text-[#8E99A5]">
                  <span>SYNCHRONISED</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#32D8FF]" />
                </div>
              </div>

              {/* Connecting Data Pulse Arrow (Desktop) */}
              {!isLast && (
                <div
                  className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#050608] border border-[#1D242B] items-center justify-center text-[#32D8FF]"
                  aria-hidden="true"
                >
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Mobile: Vertical Stacked Flow ── */}
      <div className="lg:hidden space-y-3">
        {ECOSYSTEM_NODES.map((node, index) => {
          const isLast = index === ECOSYSTEM_NODES.length - 1;
          const isVehicle = node.id === 'vehicle';
          return (
            <React.Fragment key={node.id}>
              <div
                className={`p-5 rounded-[10px] border ${
                  isVehicle
                    ? 'bg-[#101419] border-[#62E6A7]/40'
                    : 'bg-[#0A0D11] border-[#1D242B]'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-[6px] bg-[#050608] border border-[#1D242B] shrink-0">
                      {node.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-800 text-[#F5F7FA]">{node.role}</h3>
                        <span className="text-[9px] font-mono text-[#8E99A5] px-1.5 py-0.5 rounded bg-[#050608] border border-[#1D242B]">
                          {node.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#8E99A5] mt-1 leading-relaxed">
                        {node.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {!isLast && (
                <div className="flex justify-center py-0.5 text-[#32D8FF]" aria-hidden="true">
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
