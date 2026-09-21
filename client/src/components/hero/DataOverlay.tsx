import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Technical data overlay labels — conceptual, not fake metrics
const OVERLAY_LABELS = [
  { label: 'CASE FLOW', value: 'ACTIVE', position: { top: '18%', left: '8%' } },
  { label: 'INTELLIGENCE LAYER', value: 'CONNECTED', position: { top: '35%', left: '4%' } },
  { label: 'WORKSHOP NETWORK', value: 'LIVE', position: { bottom: '38%', left: '6%' } },
  { label: 'DATA SYNC', value: 'RUNNING', position: { top: '22%', right: '5%' } },
  { label: 'INSPECTION', value: 'READY', position: { bottom: '45%', right: '4%' } },
];

export function DataOverlay() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {OVERLAY_LABELS.map((item, i) => (
        <motion.div
          key={item.label}
          className="absolute hidden lg:flex flex-col gap-0.5"
          style={item.position}
          initial={{ opacity: 0, x: item.position.left ? -8 : 8 }}
          animate={{ opacity: prefersReduced ? 1 : 1 }}
          transition={{ delay: 1 + i * 0.15, duration: 0.6 }}
        >
          <span className="text-[9px] font-medium tracking-[0.14em] uppercase text-[#32D8FF] opacity-50">
            {item.label}
          </span>
          <motion.span
            className="text-[10px] font-medium tracking-[0.1em] text-[#F5F7FA] opacity-70"
            animate={prefersReduced ? {} : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
          >
            {item.value}
          </motion.span>
          {/* Connecting line */}
          <div className="w-12 h-px bg-gradient-to-r from-[#32D8FF] to-transparent opacity-30 mt-1" />
        </motion.div>
      ))}
    </div>
  );
}
