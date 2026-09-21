import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, viewportConfig } from '@/lib/motion';
import { TechLabel } from '@/components/common/TechLabel';
import type { Capability } from '@/data/capabilities';

// ─── Inline SVG visuals per visualConcept ────────────────────────────────────

function TimelineVisual() {
  // Horizontal mini-timeline: 4 dot markers connected by a line (Case Management)
  const dots = [0, 1, 2, 3];
  const width = 180;
  const y = 38;
  const spacing = width / (dots.length - 1);
  const activeIndex = 2;

  return (
    <svg
      viewBox="0 0 200 80"
      width="100%"
      height="90"
      aria-hidden="true"
      overflow="visible"
    >
      {/* Base connecting line */}
      <line x1="10" y1={y} x2="190" y2={y} stroke="#1D242B" strokeWidth="2" />
      {/* Progress fill up to active */}
      <line
        x1="10"
        y1={y}
        x2={10 + spacing * activeIndex}
        y2={y}
        stroke="#32D8FF"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
      {dots.map((i) => {
        const cx = 10 + i * spacing;
        const isActive = i === activeIndex;
        const isPast = i < activeIndex;
        return (
          <g key={i}>
            {isActive && (
              <circle
                cx={cx}
                cy={y}
                r={14}
                fill="none"
                stroke="#32D8FF"
                strokeWidth="1"
                strokeOpacity="0.15"
              />
            )}
            <circle
              cx={cx}
              cy={y}
              r={isActive ? 7 : 5}
              fill={isActive ? '#32D8FF' : isPast ? '#101419' : '#0A0D11'}
              stroke={isPast ? '#32D8FF' : isActive ? '#32D8FF' : '#1D242B'}
              strokeWidth="1.5"
              strokeOpacity={isPast ? 0.5 : 1}
            />
            <text
              x={cx}
              y={y + 20}
              textAnchor="middle"
              fill="#8E99A5"
              fontSize="8"
              fontFamily="monospace"
            >
              {`S0${i + 1}`}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function SchematicVisual() {
  // Vehicle side silhouette + measurement marks (Survey & Inspection)
  return (
    <svg viewBox="0 0 200 90" width="100%" height="90" aria-hidden="true">
      {/* Body outline */}
      <path
        d="M10,65 L30,65 L44,42 L80,30 L122,30 L156,42 L172,65 L190,65"
        fill="none"
        stroke="#32D8FF"
        strokeWidth="1.5"
        strokeOpacity="0.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Windscreen */}
      <path
        d="M80,30 L70,50 L130,50 L122,30"
        fill="none"
        stroke="#32D8FF"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      {/* Wheels */}
      <circle cx="47" cy="67" r="11" fill="none" stroke="#32D8FF" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="47" cy="67" r="3" fill="#32D8FF" fillOpacity="0.35" />
      <circle cx="157" cy="67" r="11" fill="none" stroke="#32D8FF" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="157" cy="67" r="3" fill="#32D8FF" fillOpacity="0.35" />
      {/* Measurement baseline */}
      <line x1="10" y1="80" x2="190" y2="80" stroke="#1D242B" strokeWidth="1" />
      <line x1="10" y1="76" x2="10" y2="84" stroke="#32D8FF" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="190" y1="76" x2="190" y2="84" stroke="#32D8FF" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="100" y1="78" x2="100" y2="82" stroke="#32D8FF" strokeWidth="1" strokeOpacity="0.4" />
      <text
        x="100"
        y="89"
        textAnchor="middle"
        fill="#8E99A5"
        fontSize="7"
        fontFamily="monospace"
      >
        4,520 mm
      </text>
    </svg>
  );
}

function NetworkVisual() {
  // 4 nodes in diamond/cluster connected by lines (Workshop Network)
  const cx = 100;
  const cy = 40;
  const r = 30;
  const nodes = [
    { x: cx,     y: cy - r, label: 'WS1' },
    { x: cx + r, y: cy,     label: 'WS2' },
    { x: cx,     y: cy + r, label: 'WS3' },
    { x: cx - r, y: cy,     label: 'WS4' },
  ];
  const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2], [1, 3]];

  return (
    <svg viewBox="0 0 200 90" width="100%" height="90" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#32D8FF"
          strokeWidth="1"
          strokeOpacity={i < 4 ? 0.35 : 0.12}
          strokeDasharray={i >= 4 ? '3 5' : undefined}
        />
      ))}
      {/* Central hub */}
      <circle cx={cx} cy={cy} r={6} fill="#101419" stroke="#32D8FF" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx={cx} cy={cy} r={2} fill="#32D8FF" fillOpacity="0.6" />
      {nodes.map((node, i) => (
        <g key={i}>
          <circle
            cx={node.x}
            cy={node.y}
            r={8}
            fill="#101419"
            stroke="#32D8FF"
            strokeWidth="1.2"
            strokeOpacity="0.7"
          />
          <circle cx={node.x} cy={node.y} r={3} fill="#32D8FF" fillOpacity="0.45" />
          <text
            x={node.x}
            y={node.y + 18}
            textAnchor="middle"
            fill="#8E99A5"
            fontSize="7"
            fontFamily="monospace"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function ProgressVisual() {
  // Segmented progress bar with milestone markers (Repair Tracking)
  const segments = [
    { label: 'Recv.',    fill: 1   },
    { label: 'Assess',  fill: 1   },
    { label: 'Repair',  fill: 0.55},
    { label: 'QC',      fill: 0   },
    { label: 'Done',    fill: 0   },
  ];
  const segW = 30;
  const gap  = 5;
  const barH = 8;
  const startX = 12;
  const baseY = 28;
  const totalW = segments.length * segW + (segments.length - 1) * gap;

  return (
    <svg viewBox="0 0 200 90" width="100%" height="90" aria-hidden="true">
      {/* Track background */}
      <rect
        x={startX}
        y={baseY}
        width={totalW}
        height={barH}
        rx="4"
        fill="#1D242B"
      />
      {segments.map((seg, i) => {
        const x = startX + i * (segW + gap);
        const isComplete = seg.fill === 1;
        const isActive   = seg.fill > 0 && seg.fill < 1;
        return (
          <g key={i}>
            {/* Segment fill */}
            <rect
              x={x}
              y={baseY}
              width={isActive ? segW * seg.fill : segW}
              height={barH}
              rx="2"
              fill="#32D8FF"
              fillOpacity={isComplete ? 0.55 : isActive ? 0.3 : 0}
            />
            {/* Segment border */}
            <rect
              x={x}
              y={baseY}
              width={segW}
              height={barH}
              rx="2"
              fill="none"
              stroke="#32D8FF"
              strokeWidth="0.5"
              strokeOpacity={isComplete || isActive ? 0.4 : 0.15}
            />
            {/* Milestone dot above */}
            <circle
              cx={x + segW / 2}
              cy={baseY - 9}
              r={isComplete ? 3.5 : isActive ? 3 : 2.5}
              fill={isComplete ? '#32D8FF' : '#1D242B'}
              stroke="#32D8FF"
              strokeWidth="1"
              strokeOpacity={isComplete ? 0.8 : isActive ? 0.5 : 0.2}
            />
            {/* Label below */}
            <text
              x={x + segW / 2}
              y={baseY + barH + 14}
              textAnchor="middle"
              fill="#8E99A5"
              fontSize="6.5"
              fontFamily="monospace"
            >
              {seg.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function DataVisual() {
  // 5-bar minimal bar chart (Cost Intelligence)
  const bars = [42, 68, 55, 80, 48];
  const maxH = 52;
  const barW = 26;
  const gap  = 8;
  const startX = 14;
  const baseY = 68;
  const maxVal = Math.max(...bars);

  return (
    <svg viewBox="0 0 200 90" width="100%" height="90" aria-hidden="true">
      {/* Y-axis grid lines */}
      {[0.33, 0.66, 1].map((f, i) => (
        <line
          key={i}
          x1={startX - 4}
          y1={baseY - maxH * f}
          x2={startX + bars.length * (barW + gap) - gap + 4}
          y2={baseY - maxH * f}
          stroke="#1D242B"
          strokeWidth="0.5"
          strokeDasharray="3 6"
        />
      ))}
      {/* Baseline */}
      <line
        x1={startX - 4}
        y1={baseY}
        x2={startX + bars.length * (barW + gap) - gap + 4}
        y2={baseY}
        stroke="#1D242B"
        strokeWidth="1"
      />
      {/* Bars */}
      {bars.map((val, i) => {
        const h = (val / 100) * maxH;
        const x = startX + i * (barW + gap);
        const isPeak = val === maxVal;
        return (
          <g key={i}>
            <rect
              x={x}
              y={baseY - h}
              width={barW}
              height={h}
              rx="2"
              fill="#32D8FF"
              fillOpacity={isPeak ? 0.55 : 0.22}
              stroke="#32D8FF"
              strokeWidth="0.5"
              strokeOpacity={isPeak ? 0.5 : 0.25}
            />
            {isPeak && (
              <circle
                cx={x + barW / 2}
                cy={baseY - h - 6}
                r={2.5}
                fill="#32D8FF"
                fillOpacity="0.8"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

function EnvironmentalVisual() {
  // Rising (descending emission) line graph in green (Carbon Intelligence)
  const pts: [number, number][] = [
    [12, 70],
    [42, 62],
    [72, 52],
    [102, 42],
    [132, 33],
    [162, 22],
    [188, 15],
  ];
  const polyline = pts.map(([x, y]) => `${x},${y}`).join(' ');
  const areaPath =
    `M${pts[0][0]},${pts[0][1]} ` +
    pts.slice(1).map(([x, y]) => `L${x},${y}`).join(' ') +
    ` L${pts[pts.length - 1][0]},78 L${pts[0][0]},78 Z`;

  return (
    <svg viewBox="0 0 200 90" width="100%" height="90" aria-hidden="true">
      {/* Axes */}
      <line x1="12" y1="12" x2="12" y2="78" stroke="#1D242B" strokeWidth="1" />
      <line x1="12" y1="78" x2="192" y2="78" stroke="#1D242B" strokeWidth="1" />
      {/* Area */}
      <path d={areaPath} fill="#62E6A7" fillOpacity="0.07" />
      {/* Trend line */}
      <polyline
        points={polyline}
        fill="none"
        stroke="#62E6A7"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
      {/* Data points */}
      {pts.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === pts.length - 1 ? 4 : 2.5}
          fill="#62E6A7"
          fillOpacity={i === pts.length - 1 ? 0.9 : 0.45}
        />
      ))}
      {/* Annotation */}
      <text x="148" y="12" fill="#62E6A7" fontSize="8" fontFamily="monospace" fillOpacity="0.7">
        ↓ CO₂
      </text>
    </svg>
  );
}

// ─── Visual dispatcher ────────────────────────────────────────────────────────

function CapabilityVisual({ visualConcept }: { visualConcept: string }) {
  switch (visualConcept) {
    case 'timeline':      return <TimelineVisual />;
    case 'schematic':     return <SchematicVisual />;
    case 'network':       return <NetworkVisual />;
    case 'progress':      return <ProgressVisual />;
    case 'data':          return <DataVisual />;
    case 'environmental': return <EnvironmentalVisual />;
    default:              return null;
  }
}

// ─── CapabilityItem ───────────────────────────────────────────────────────────

interface CapabilityItemProps {
  capability: Capability;
  className?: string;
}

export function CapabilityItem({ capability, className = '' }: CapabilityItemProps) {
  const isGreen = capability.accentColor === 'green';

  return (
    <motion.article
      variants={scaleIn}
      whileHover={{
        borderColor: isGreen ? '#62E6A7' : '#32D8FF',
        backgroundColor: isGreen ? 'rgba(98,230,167,0.03)' : 'rgba(50,216,255,0.03)',
      }}
      className={`group relative flex flex-col gap-4 rounded-[10px] border border-[#1D242B]
        p-6 transition-colors duration-300 overflow-hidden ${className}`}
      style={{ backgroundColor: '#0A0D11' }}
      aria-label={`${capability.title}: ${capability.description}`}
    >
      {/* Title label */}
      <TechLabel color={isGreen ? 'green' : 'accent'}>
        {capability.title}
      </TechLabel>

      {/* Distinct visual */}
      <div className="w-full" aria-hidden="true">
        <CapabilityVisual visualConcept={capability.visualConcept} />
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-[#8E99A5] mt-auto">
        {capability.description}
      </p>

      {/* Hover inner glow border */}
      <span
        className="pointer-events-none absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100
          transition-opacity duration-300"
        style={{
          boxShadow: isGreen
            ? 'inset 0 0 0 1px rgba(98,230,167,0.12)'
            : 'inset 0 0 0 1px rgba(50,216,255,0.1)',
        }}
        aria-hidden="true"
      />
    </motion.article>
  );
}
