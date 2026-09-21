import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MAPCHART_VIEWBOX,
  MAPCHART_PATHS,
  MAPCHART_LABELS,
  StatePathData,
} from '@/data/indiaMapChartData';

// Labels that are placed in the water/exterior areas rather than within state polygons
const EXTERIOR_LABELS = new Set([
  'Dadra_and_Nagar_Haveli_and_Daman_and_Diu_label',
  'Goa_label',
  'Lakshadweep_label',
  'Andaman_and_Nicobar_Islands_label',
  'Puducherry_label',
  'Puducherry1_label',
  'Puducherry2_label',
]);

export function IndiaMap() {
  const [hoveredState, setHoveredState] = useState<StatePathData | null>(null);

  return (
    <div className="relative w-full max-w-[760px] mx-auto flex flex-col items-center justify-center p-2 sm:p-4 select-none">
      {/* SVG Map Container */}
      <div className="relative w-full aspect-[860/1021] max-h-[680px] bg-[#07090C] border border-[#1D242B] rounded-[10px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.7)]">
        <svg
          viewBox={MAPCHART_VIEWBOX}
          className="w-full h-full object-contain overflow-visible"
          aria-label="Anergina Geographic Network Coverage Map of India"
        >
          <defs>
            {/* Ambient Glow for Operational States */}
            <filter id="state-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#32D8FF" floodOpacity="0.4" />
            </filter>
            <filter id="hover-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#55E2FF" floodOpacity="0.75" />
            </filter>

            {/* Subtle Matrix Background Grid */}
            <pattern id="telemetryGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#121820" strokeWidth="0.6" />
            </pattern>
          </defs>

          {/* Grid Background */}
          <rect width="860" height="1021.36" fill="#07090C" />
          <rect width="860" height="1021.36" fill="url(#telemetryGrid)" />

          {/* Concentric Radar Range Reticles */}
          <g opacity="0.3" pointerEvents="none">
            <circle cx="380" cy="520" r="380" fill="none" stroke="#1D242B" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="380" cy="520" r="260" fill="none" stroke="#1D242B" strokeWidth="1" strokeDasharray="3 6" />
            <circle cx="380" cy="520" r="140" fill="none" stroke="#1D242B" strokeWidth="1" strokeDasharray="2 4" />
            <line x1="380" y1="60" x2="380" y2="980" stroke="#1D242B" strokeWidth="0.8" strokeDasharray="3 6" />
            <line x1="20" y1="520" x2="800" y2="520" stroke="#1D242B" strokeWidth="0.8" strokeDasharray="3 6" />
          </g>

          {/* Top-Right Legend — Exact Replica of Reference Image */}
          <g transform="translate(620, 55)" className="cursor-default">
            {/* HUD Backing Card */}
            <rect
              x="-18"
              y="-16"
              width="240"
              height="84"
              rx="6"
              fill="#0A0D11"
              fillOpacity="0.95"
              stroke="#1D242B"
              strokeWidth="1"
            />
            <text
              x="0"
              y="10"
              fill="#F5F7FA"
              fontSize="14.5"
              fontWeight="700"
              fontFamily="Inter, system-ui, sans-serif"
            >
              State where Anergina
            </text>
            <text
              x="0"
              y="28"
              fill="#F5F7FA"
              fontSize="14.5"
              fontWeight="700"
              fontFamily="Inter, system-ui, sans-serif"
            >
              have served yet
            </text>

            {/* Active Territories Legend Swatch */}
            <rect
              x="0"
              y="38"
              width="18"
              height="18"
              fill="#004B66"
              rx="3"
              stroke="#32D8FF"
              strokeWidth="1.2"
              filter="url(#state-glow)"
            />
            <text
              x="26"
              y="52"
              fill="#32D8FF"
              fontSize="11"
              fontFamily="monospace"
              fontWeight="700"
              letterSpacing="0.05em"
            >
              12 ACTIVE TERRITORIES
            </text>
          </g>

          {/* State Polygon Boundaries — Dark Slate for Unserved, Deep Cyan with Cyan Glow for Served */}
          <g id="states-layer">
            {MAPCHART_PATHS.map((state) => {
              const isHovered = hoveredState?.id === state.id;
              const isServed = state.isServed;

              return (
                <path
                  key={state.id}
                  id={state.id}
                  d={state.d}
                  fill={
                    isHovered
                      ? isServed
                        ? '#006E99'
                        : '#182433'
                      : isServed
                      ? '#004B66'
                      : '#111722'
                  }
                  stroke={
                    isHovered
                      ? isServed
                        ? '#55E2FF'
                        : '#334155'
                      : isServed
                      ? '#32D8FF'
                      : '#1E293B'
                  }
                  strokeWidth={isHovered ? (isServed ? '2' : '1.5') : isServed ? '1.5' : '1'}
                  strokeLinejoin="round"
                  filter={isHovered && isServed ? 'url(#hover-glow)' : undefined}
                  className="transition-colors duration-150 cursor-pointer"
                  onMouseEnter={() => setHoveredState(state)}
                  onMouseLeave={() => setHoveredState(null)}
                  onClick={() => setHoveredState(state)}
                />
              );
            })}
          </g>

          {/* State Text Labels — Formatted & Placed per Exact Reference Coordinates */}
          <g id="labels-layer" pointerEvents="none">
            {MAPCHART_LABELS.map((lbl) => {
              const isServed = lbl.isServed;
              const isExterior = EXTERIOR_LABELS.has(lbl.id);
              const isHovered = hoveredState?.id === lbl.baseId;

              let textColor = '#64748B'; // Muted technical slate on unserved dark states
              if (isServed) {
                textColor = '#F5F7FA'; // Crisp white on served cyan states
              } else if (isExterior) {
                textColor = '#475569'; // Subtle muted for exterior labels
              }

              if (isHovered && isServed) {
                textColor = '#FFFFFF';
              }

              const fontWeight = isServed || !isExterior ? '700' : '600';

              return (
                <text
                  key={lbl.id}
                  id={lbl.id}
                  transform={lbl.transform}
                  fill={textColor}
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    textAnchor: 'middle',
                    filter: isServed
                      ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.85))'
                      : undefined,
                  }}
                  className="transition-colors duration-150"
                >
                  {lbl.tspans.map((span, sIdx) => (
                    <tspan
                      key={sIdx}
                      x={span.x}
                      y={span.y}
                      dy={span.dy}
                      rotate={span.rotate}
                      fontSize={span.fontSize || '13px'}
                      fontWeight={fontWeight}
                      fill={textColor}
                    >
                      {span.text}
                    </tspan>
                  ))}
                </text>
              );
            })}
          </g>
        </svg>

        {/* Floating Telemetry HUD Tooltip on State Hover */}
        <AnimatePresence>
          {hoveredState && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-4 max-w-xs bg-[#050608]/95 border border-[#32D8FF]/50 px-4 py-3 rounded-[8px] shadow-[0_0_25px_rgba(50,216,255,0.2)] backdrop-blur-md z-30 font-mono text-xs pointer-events-none"
            >
              <div className="flex items-center justify-between gap-3 border-b border-[#1D242B] pb-2 mb-2">
                <span className="font-bold text-sm text-[#F5F7FA] tracking-tight">
                  {hoveredState.name.toUpperCase()}
                </span>
                {hoveredState.isServed ? (
                  <span className="text-[10px] text-[#32D8FF] bg-[#32D8FF]/15 border border-[#32D8FF]/40 px-2 py-0.5 rounded font-bold">
                    OPERATIONAL
                  </span>
                ) : (
                  <span className="text-[10px] text-[#8E99A5] bg-[#1D242B] px-2 py-0.5 rounded">
                    EXPANSION PHASE
                  </span>
                )}
              </div>

              {hoveredState.isServed ? (
                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between text-[#8E99A5]">
                    <span>WORKSHOP HUBS:</span>
                    <span className="text-[#62E6A7] font-semibold">{hoveredState.hubCount} FACILITIES</span>
                  </div>
                  <div className="flex justify-between text-[#8E99A5]">
                    <span>SECTOR CLUSTER:</span>
                    <span className="text-[#F5F7FA]">{hoveredState.hubs}</span>
                  </div>
                  <div className="flex justify-between text-[#8E99A5]">
                    <span>REPAIR SLA RATING:</span>
                    <span className="text-[#32D8FF] font-semibold">{hoveredState.sla}</span>
                  </div>
                </div>
              ) : (
                <div className="text-[11px] text-[#8E99A5]">
                  Telemetry node on standby. Scheduled for network onboarding in Phase 2 roadmap.
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Telemetry Status Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-2 mt-3 px-1 text-[10px] font-mono text-[#8E99A5]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#32D8FF] animate-pulse" />
          <span className="text-[#F5F7FA] font-semibold">12 OPERATIONAL HUBS ACTIVE</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#32D8FF]">280+ CERTIFIED WORKSHOPS</span>
        </div>
      </div>
    </div>
  );
}
