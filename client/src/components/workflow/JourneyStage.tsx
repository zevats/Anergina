import React from 'react';
import { motion } from 'framer-motion';

export interface JourneyStageData {
  number: string;
  title: string;
  description: string;
  detail: string;
}

interface JourneyStageProps {
  stage: JourneyStageData;
  isActive: boolean;
  isPast: boolean;
  onSelect: () => void;
}

export function JourneyStage({ stage, isActive, isPast, onSelect }: JourneyStageProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left p-6 rounded-[10px] border transition-all duration-300 relative ${
        isActive
          ? 'bg-[#101419] border-[#32D8FF] shadow-[0_0_25px_rgba(50,216,255,0.08)]'
          : isPast
          ? 'bg-[#0A0D11]/60 border-[#1D242B] opacity-75 hover:opacity-100'
          : 'bg-[#0A0D11]/30 border-[#1D242B]/50 opacity-40 hover:opacity-70'
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`font-mono text-xs font-700 tracking-wider px-2 py-1 rounded-[4px] border ${
            isActive
              ? 'text-[#32D8FF] border-[#32D8FF]/30 bg-[#32D8FF]/10'
              : isPast
              ? 'text-[#62E6A7] border-[#62E6A7]/30 bg-[#62E6A7]/10'
              : 'text-[#8E99A5] border-[#1D242B] bg-[#050608]'
          }`}
        >
          {stage.number}
        </span>

        <div className="flex-1">
          <h3
            className={`text-lg font-700 tracking-tight transition-colors duration-200 ${
              isActive ? 'text-[#F5F7FA]' : 'text-[#8E99A5]'
            }`}
          >
            {stage.title}
          </h3>

          <p className="mt-1 text-sm text-[#8E99A5] leading-relaxed">
            {stage.description}
          </p>

          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-3 pt-3 border-t border-[#1D242B] text-xs text-[#32D8FF]/90 font-medium"
            >
              {stage.detail}
            </motion.div>
          )}
        </div>
      </div>
    </button>
  );
}
