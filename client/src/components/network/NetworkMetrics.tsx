import React from 'react';
import { networkMetrics } from '@/data/network';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';

export function NetworkMetrics() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border border-[#1D242B] rounded-[10px] bg-[#0A0D11] divide-y sm:divide-y-0 sm:divide-x divide-[#1D242B] overflow-hidden">
      {networkMetrics.map((metric, idx) => (
        <div
          key={metric.label}
          className="p-6 sm:p-7 flex flex-col items-center justify-center text-center relative group hover:bg-[#0E1318] transition-colors"
        >
          {/* Subtle top indicator dot */}
          <div className="w-1 h-1 rounded-full bg-[#32D8FF]/60 mb-3" />

          {/* Metric Value */}
          <div className="text-3xl sm:text-4xl lg:text-5xl font-900 tracking-tight text-[#F5F7FA] font-mono mb-2 group-hover:text-[#32D8FF] transition-colors tabular-nums">
            <AnimatedCounter displayValue={metric.value} delay={idx * 100} />
          </div>

          {/* Label */}
          <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#8E99A5]">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
