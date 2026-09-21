import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { drawLine, staggerContainer, staggerItem } from '@/lib/motion';

// ─── Flow node definitions ────────────────────────────────────────────────────

interface FlowNode {
  id: string;
  label: string;
  isIntelligence?: boolean;
}

const FLOW_NODES: FlowNode[] = [
  { id: 'vehicle-case',          label: 'VEHICLE CASE' },
  { id: 'inspection-data',       label: 'INSPECTION DATA' },
  { id: 'intelligence-layer',    label: 'ANERGINA INTELLIGENCE LAYER', isIntelligence: true },
  { id: 'operational-decisions', label: 'OPERATIONAL DECISIONS' },
  { id: 'action',                label: 'ACTION' },
];

// ─── Capability pills ─────────────────────────────────────────────────────────

interface CapabilityPill {
  label: string;
  isGreen?: boolean;
}

const CAPABILITY_PILLS: CapabilityPill[] = [
  { label: 'AI-assisted operations' },
  { label: 'Real-time data' },
  { label: 'Workflow automation' },
  { label: 'Operational analytics' },
  { label: 'Cost intelligence' },
  { label: 'Carbon intelligence', isGreen: true },
];

// ─── Layout constants ─────────────────────────────────────────────────────────

const NODE_HEIGHT      = 48;
const NODE_GAP         = 52;
const STD_NODE_WIDTH   = 220;
const INTEL_NODE_WIDTH = 280;
const SVG_WIDTH        = 320;
const CENTER_X         = SVG_WIDTH / 2;
const SVG_HEIGHT       =
  FLOW_NODES.length * NODE_HEIGHT + (FLOW_NODES.length - 1) * NODE_GAP + 8;

function nodeY(index: number): number {
  return index * (NODE_HEIGHT + NODE_GAP);
}

// ─── Animated data-packet dot ─────────────────────────────────────────────────

interface DataPacketProps {
  cx: number;
  startY: number;
  endY: number;
  delay: number;
}

function DataPacket({ cx, startY, endY, delay }: DataPacketProps) {
  return (
    <motion.circle
      r={2.5}
      cx={cx}
      fill="#32D8FF"
      initial={{ cy: startY, opacity: 0 }}
      animate={{ cy: [startY, endY], opacity: [0, 0.9, 0.9, 0] }}
      transition={{
        duration: 1.3,
        delay,
        repeat: Infinity,
        repeatDelay: 1.4,
        ease: 'easeInOut',
      }}
    />
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function DataFlowDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 w-full"
    >
      {/* ── Vertical SVG pipeline ── */}
      <div
        className="w-full lg:w-[360px] flex-shrink-0 flex justify-center lg:justify-start"
        aria-label="Anergina operational data flow: Vehicle Case to Action via Intelligence Layer"
        role="img"
      >
        <svg
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          width={SVG_WIDTH}
          height={SVG_HEIGHT}
          className="overflow-visible max-w-full"
          aria-hidden="true"
        >
          <defs>
            {/* Glow filter for intelligence node */}
            <filter id="df-intel-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Accent gradient for connector lines */}
            <linearGradient id="df-line-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1D242B" />
              <stop offset="50%" stopColor="#32D8FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1D242B" />
            </linearGradient>
          </defs>

          {/* ── Connecting lines + data packets ── */}
          {FLOW_NODES.slice(0, -1).map((_, i) => {
            const lineStartY = nodeY(i) + NODE_HEIGHT + 2;
            const lineEndY   = nodeY(i + 1) - 2;

            return (
              <g key={`connector-${i}`}>
                {/* Static guide track */}
                <line
                  x1={CENTER_X}
                  y1={lineStartY}
                  x2={CENTER_X}
                  y2={lineEndY}
                  stroke="#1D242B"
                  strokeWidth={1}
                />
                {/* Animated draw-on line */}
                <motion.line
                  x1={CENTER_X}
                  y1={lineStartY}
                  x2={CENTER_X}
                  y2={lineEndY}
                  stroke="url(#df-line-grad)"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  variants={drawLine}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={i}
                  style={{ originY: 0 }}
                />

                {/* Animated data packets — dominant motion concept */}
                {inView && (
                  <>
                    <DataPacket
                      cx={CENTER_X}
                      startY={lineStartY + 3}
                      endY={lineEndY - 3}
                      delay={0.5 + i * 0.3}
                    />
                    <DataPacket
                      cx={CENTER_X}
                      startY={lineStartY + 3}
                      endY={lineEndY - 3}
                      delay={1.3 + i * 0.3}
                    />
                  </>
                )}
              </g>
            );
          })}

          {/* ── Flow nodes ── */}
          {FLOW_NODES.map((node, i) => {
            const y         = nodeY(i);
            const isIntel   = Boolean(node.isIntelligence);
            const nodeWidth = isIntel ? INTEL_NODE_WIDTH : STD_NODE_WIDTH;
            const nodeX     = CENTER_X - nodeWidth / 2;

            return (
              <motion.g
                key={node.id}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.08 + i * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Outer glow ring for intelligence node */}
                {isIntel && (
                  <rect
                    x={nodeX - 6}
                    y={y - 6}
                    width={nodeWidth + 12}
                    height={NODE_HEIGHT + 12}
                    rx={12}
                    fill="rgba(50,216,255,0.06)"
                    stroke="rgba(50,216,255,0.18)"
                    strokeWidth={1}
                    filter="url(#df-intel-glow)"
                  />
                )}

                {/* Node background */}
                <rect
                  x={nodeX}
                  y={y}
                  width={nodeWidth}
                  height={NODE_HEIGHT}
                  rx={8}
                  fill="#0A0D11"
                  stroke={isIntel ? '#32D8FF' : '#1D242B'}
                  strokeWidth={isIntel ? 1.5 : 1}
                />

                {/* Node label */}
                <text
                  x={CENTER_X}
                  y={y + NODE_HEIGHT / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isIntel ? '#32D8FF' : '#F5F7FA'}
                  fontSize={isIntel ? 10.5 : 10}
                  fontWeight={isIntel ? 700 : 500}
                  letterSpacing={isIntel ? '0.12em' : '0.08em'}
                  fontFamily="inherit"
                >
                  {node.label}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* ── Capability pills ── */}
      <motion.div
        className="flex flex-col gap-3 w-full lg:flex-1 lg:pt-8"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        aria-label="Platform capabilities list"
      >
        <p className="text-[11px] font-medium tracking-[0.10em] uppercase text-[#8E99A5] mb-1">
          Platform Capabilities
        </p>
        {CAPABILITY_PILLS.map((pill) => (
          <motion.div
            key={pill.label}
            variants={staggerItem}
            className="flex items-center gap-3"
          >
            <span
              className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: pill.isGreen ? '#62E6A7' : '#32D8FF' }}
              aria-hidden="true"
            />
            <span
              className="inline-flex items-center rounded-full border px-4 py-1.5 text-[12px] font-medium tracking-wide"
              style={{
                borderColor: pill.isGreen
                  ? 'rgba(98,230,167,0.25)'
                  : 'rgba(50,216,255,0.18)',
                backgroundColor: pill.isGreen
                  ? 'rgba(98,230,167,0.06)'
                  : 'rgba(50,216,255,0.05)',
                color: pill.isGreen ? '#62E6A7' : '#32D8FF',
              }}
            >
              {pill.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
