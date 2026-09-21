import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { solutions, StakeholderSolution } from '@/data/solutions';
import { fadeIn, fadeUp, viewportConfig } from '@/lib/motion';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TechLabel } from '@/components/common/TechLabel';

interface DiagramNode {
  id: string;
  label: string;
  cx: number;
  cy: number;
  isCenter?: boolean;
}

const DIAGRAM_NODES: DiagramNode[] = [
  { id: 'center', label: 'ANERGINA', cx: 150, cy: 35, isCenter: true },
  { id: 'insurers', label: 'INSURER', cx: 45, cy: 110 },
  { id: 'surveyors', label: 'SURVEYOR', cx: 150, cy: 110 },
  { id: 'workshops', label: 'WORKSHOP', cx: 255, cy: 110 },
  { id: 'vehicle', label: 'VEHICLE', cx: 255, cy: 185 },
  { id: 'customers', label: 'CUSTOMER', cx: 255, cy: 260 },
];

const DIAGRAM_LINES = [
  { id: 'l1', x1: 150, y1: 52, x2: 45, y2: 95 },
  { id: 'l2', x1: 150, y1: 52, x2: 150, y2: 95 },
  { id: 'l3', x1: 150, y1: 52, x2: 255, y2: 95 },
  { id: 'l4', x1: 255, y1: 125, x2: 255, y2: 170 },
  { id: 'l5', x1: 255, y1: 200, x2: 255, y2: 245 },
];

const selectableIds = new Set(['insurers', 'surveyors', 'workshops', 'customers']);

interface NodeButtonProps {
  node: DiagramNode;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

function DiagramNodeButton({ node, isSelected, onSelect }: NodeButtonProps) {
  const selectable = selectableIds.has(node.id);
  const isCenter = node.isCenter;

  const rx = isCenter ? 44 : 36;
  const ry = isCenter ? 16 : 14;

  const borderColor = isSelected ? '#32D8FF' : isCenter ? '#32D8FF' : '#1D242B';
  const textColor = isSelected ? '#32D8FF' : isCenter ? '#32D8FF' : '#8E99A5';
  const bgColor = isCenter ? '#101419' : isSelected ? '#101419' : '#0A0D11';
  const strokeWidth = isCenter || isSelected ? 1.5 : 1;

  return (
    <g>
      <rect
        x={node.cx - rx}
        y={node.cy - ry}
        width={rx * 2}
        height={ry * 2}
        rx={6}
        fill={bgColor}
        stroke={borderColor}
        strokeWidth={strokeWidth}
        className="transition-colors duration-200"
      />
      {selectable ? (
        <foreignObject
          x={node.cx - rx}
          y={node.cy - ry}
          width={rx * 2}
          height={ry * 2}
        >
          <button
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelect(node.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect(node.id);
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: textColor,
              fontSize: '9px',
              fontWeight: isSelected ? 700 : 500,
              letterSpacing: '0.08em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {node.label}
          </button>
        </foreignObject>
      ) : (
        <text
          x={node.cx}
          y={node.cy + 3.5}
          textAnchor="middle"
          fill={textColor}
          fontSize="9"
          fontWeight="700"
          letterSpacing="0.08em"
          style={{ pointerEvents: 'none' }}
        >
          {node.label}
        </text>
      )}
    </g>
  );
}

interface MobileTabsProps {
  selected: string;
  onSelect: (id: string) => void;
}

function MobileTabs({ selected, onSelect }: MobileTabsProps) {
  const tabs = solutions.map((s) => ({ id: s.id, label: s.shortLabel }));

  return (
    <div
      role="tablist"
      aria-label="Select a stakeholder"
      className="flex flex-wrap gap-2 mb-6"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === selected;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(tab.id)}
            className={`
              px-4 py-2 rounded-[6px] text-xs font-semibold tracking-wide uppercase
              border transition-all duration-200
              ${isActive
                ? 'border-[#32D8FF] text-[#32D8FF] bg-[#101419]'
                : 'border-[#1D242B] text-[#8E99A5] bg-[#0A0D11] hover:text-[#F5F7FA]'
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

interface ContentPanelProps {
  solution: StakeholderSolution;
}

function ContentPanel({ solution }: ContentPanelProps) {
  return (
    <motion.div
      key={solution.id}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="space-y-6"
    >
      <div>
        <TechLabel>{solution.shortLabel} Workflow</TechLabel>
        <h3 className="text-2xl md:text-3xl font-700 text-[#F5F7FA] tracking-tight mt-2 mb-3">
          {solution.label}
        </h3>
        <p className="text-[#8E99A5] text-sm md:text-base leading-relaxed">
          {solution.description}
        </p>
      </div>

      <div>
        <p className="text-xs font-semibold text-[#F5F7FA] uppercase tracking-widest mb-3">
          Core Capabilities
        </p>
        <ul className="space-y-2.5" aria-label={`${solution.label} capabilities`}>
          {solution.capabilities.map((cap) => (
            <li key={cap} className="flex items-start gap-3 text-sm text-[#8E99A5]">
              <span
                className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-[#32D8FF]"
                aria-hidden="true"
              />
              <span className="text-[#F5F7FA]">{cap}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold text-[#F5F7FA] uppercase tracking-widest mb-3">
          Operational Flow
        </p>
        <ol className="space-y-2.5" aria-label={`${solution.label} workflow steps`}>
          {solution.workflow.map((step, idx) => (
            <li key={step} className="flex items-start gap-3 text-sm text-[#8E99A5]">
              <span className="shrink-0 font-mono text-xs font-medium mt-0.5 tabular-nums text-[#32D8FF]">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </motion.div>
  );
}

export function StakeholderSelector() {
  const [selectedId, setSelectedId] = useState<string>('insurers');
  const selectedSolution = solutions.find((s) => s.id === selectedId) ?? solutions[0];

  return (
    <SectionWrapper id="solutions">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center mb-12 md:mb-16"
      >
        <div className="flex justify-center mb-4">
          <TechLabel>Operational Ecosystem</TechLabel>
        </div>
        <h2 className="text-3xl md:text-5xl font-800 tracking-tight text-[#F5F7FA] mb-4">
          Connected operational flow.
        </h2>
        <p className="text-[#8E99A5] text-sm md:text-base max-w-xl mx-auto">
          Anergina orchestrates interactions between insurers, surveyors, workshops, vehicles, and customers in real time.
        </p>
      </motion.div>

      {/* Mobile: tab buttons */}
      <div className="lg:hidden">
        <MobileTabs selected={selectedId} onSelect={setSelectedId} />
        <div className="border border-[#1D242B] bg-[#0A0D11] p-6 rounded-[10px]">
          <AnimatePresence mode="wait">
            <ContentPanel key={selectedId} solution={selectedSolution} />
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop: 2-col layout */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
        {/* Left — SVG diagram (5 cols) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="lg:col-span-5 flex flex-col items-center border border-[#1D242B] bg-[#0A0D11] p-8 rounded-[10px]"
        >
          <svg
            viewBox="0 0 300 295"
            width="100%"
            aria-label="Stakeholder relationship diagram. Select a node to view operational flow."
            role="img"
            style={{ maxWidth: 320 }}
          >
            {DIAGRAM_LINES.map((line) => (
              <line
                key={line.id}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#1D242B"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            ))}

            <g role="tablist" aria-label="Select a stakeholder">
              {DIAGRAM_NODES.map((node) => (
                <DiagramNodeButton
                  key={node.id}
                  node={node}
                  isSelected={selectedId === node.id}
                  onSelect={(id) => {
                    if (selectableIds.has(id)) setSelectedId(id);
                  }}
                />
              ))}
            </g>
          </svg>

          <p className="text-xs text-[#8E99A5] mt-6 text-center">
            Click a node in the diagram to inspect its dedicated workflow
          </p>
        </motion.div>

        {/* Right — content panel (7 cols) */}
        <div className="lg:col-span-7 border border-[#1D242B] bg-[#0A0D11] p-8 rounded-[10px]">
          <AnimatePresence mode="wait">
            <ContentPanel key={selectedId} solution={selectedSolution} />
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
