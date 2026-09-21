import React, { useState, useRef, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AnerginaLogo } from '@/components/common/AnerginaLogo';

export function WheelVisual() {
  const prefersReduced = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [displayRpm, setDisplayRpm] = useState(42);

  // DOM Refs
  const wheelContainerRef = useRef<HTMLDivElement>(null);
  const tiltWrapperRef = useRef<HTMLDivElement>(null);
  const wheelImgRef = useRef<HTMLImageElement>(null);

  // 3D Tilt perspective tracking (follows cursor on entire page)
  const targetTiltRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentTiltRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Physics animation refs for continuous inertia-based rotation
  const angleRef = useRef<number>(0);
  const speedRef = useRef<number>(0.2); // current deg/frame
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Target speed:
  // Normal mode (idle across page): +0.2 deg/frame (Clockwise cruising, ~38s/rotation)
  // Focus mode (hovering wheel only): -0.75 deg/frame (Anti-clockwise active, ~10s/rotation)
  // Focus mode + pressed (click & hold): -1.5 deg/frame (Turbo anti-clockwise, ~4.8s/rotation)
  const targetSpeed = prefersReduced
    ? 0
    : isPressed
    ? -1.5
    : isHovered
    ? -0.75
    : 0.2;

  // Global mousemove listener: wheel faces cursor across the entire page
  useEffect(() => {
    if (prefersReduced) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!wheelContainerRef.current) return;
      const rect = wheelContainerRef.current.getBoundingClientRect();

      // Wheel center coordinates in viewport space
      const wheelCenterX = rect.left + rect.width / 2;
      const wheelCenterY = rect.top + rect.height / 2;

      // Distance vector from wheel center to cursor
      const deltaX = e.clientX - wheelCenterX;
      const deltaY = e.clientY - wheelCenterY;

      // Normalize by half viewport dimensions
      const maxDistX = Math.max(window.innerWidth / 2, 400);
      const maxDistY = Math.max(window.innerHeight / 2, 300);

      const normX = Math.max(-1, Math.min(1, deltaX / maxDistX));
      const normY = Math.max(-1, Math.min(1, deltaY / maxDistY));

      // Max tilt angle (degrees)
      const maxTilt = 8.5;
      targetTiltRef.current = {
        x: -normY * maxTilt,
        y: normX * maxTilt,
      };
    };

    const handleWindowMouseLeave = () => {
      targetTiltRef.current = { x: 0, y: 0 };
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleWindowMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseleave', handleWindowMouseLeave);
    };
  }, [prefersReduced]);

  // Unified 60-120fps physics loop (handles rotation + smooth 3D tilt tracking)
  useEffect(() => {
    if (prefersReduced) return;

    let lastRpmUpdate = 0;

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = Math.min((time - lastTimeRef.current) / 16.667, 2.5);
      lastTimeRef.current = time;

      // 1. Inertia rotation lerp
      const speedLerp = isPressed ? 0.08 : isHovered ? 0.05 : 0.035;
      speedRef.current += (targetSpeed - speedRef.current) * speedLerp * dt;
      angleRef.current = (angleRef.current + speedRef.current * dt) % 360;

      if (wheelImgRef.current) {
        wheelImgRef.current.style.transform = `rotate(${angleRef.current}deg)`;
      }

      // 2. Smooth 3D tilt tracking lerp (facing cursor across entire page)
      const tiltLerp = 0.06;
      currentTiltRef.current.x +=
        (targetTiltRef.current.x - currentTiltRef.current.x) * tiltLerp * dt;
      currentTiltRef.current.y +=
        (targetTiltRef.current.y - currentTiltRef.current.y) * tiltLerp * dt;

      if (tiltWrapperRef.current) {
        tiltWrapperRef.current.style.transform = `perspective(1000px) rotateX(${currentTiltRef.current.x.toFixed(
          2
        )}deg) rotateY(${currentTiltRef.current.y.toFixed(2)}deg)`;
      }

      // 3. Periodic RPM telemetry update
      if (time - lastRpmUpdate > 120) {
        lastRpmUpdate = time;
        const currentRpm = Math.round((speedRef.current * 60 * 60) / 360);
        setDisplayRpm(currentRpm);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReduced, targetSpeed, isHovered, isPressed]);

  return (
    <div
      ref={wheelContainerRef}
      className="relative w-full max-w-[500px] aspect-square flex items-center justify-center select-none cursor-pointer group"
      aria-label="Interactive Anergina Performance Wheel with live telemetry"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => {
        setIsHovered(true);
        setIsPressed(true);
      }}
      onTouchEnd={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
    >
      {/* 3D Perspective Parallax Wrapper (Actively faces cursor across entire page) */}
      <div
        ref={tiltWrapperRef}
        className="relative w-full h-full flex items-center justify-center will-change-transform"
        style={{
          transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Background ambient lighting */}
        <div
          className={`absolute rounded-full pointer-events-none transition-all duration-500 ${
            isHovered ? 'opacity-90 scale-105' : 'opacity-70 scale-100'
          }`}
          style={{
            width: '95%',
            height: '95%',
            background: isHovered
              ? 'radial-gradient(circle, rgba(50,216,255,0.2) 0%, rgba(98,230,167,0.06) 45%, transparent 75%)'
              : 'radial-gradient(circle, rgba(50,216,255,0.12) 0%, rgba(10,13,17,0.02) 60%, transparent 75%)',
            filter: 'blur(30px)',
          }}
        />

        {/* Outer HUD Targeting Rings */}
        <svg
          viewBox="0 0 560 560"
          className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] pointer-events-none z-20 overflow-visible"
        >
          <defs>
            <linearGradient id="radarSweepGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#32D8FF" stopOpacity={isHovered ? '0.5' : '0.35'} />
              <stop offset="60%" stopColor="#32D8FF" stopOpacity="0.06" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>

          <circle
            cx="280"
            cy="280"
            r="260"
            fill="none"
            stroke={isHovered ? '#32D8FF' : '#1D242B'}
            strokeWidth="1"
            strokeDasharray="4 8"
            strokeOpacity={isHovered ? '0.5' : '0.35'}
            className="transition-colors duration-300"
          />

          <g
            className={prefersReduced ? '' : isHovered ? 'animate-reticle-reverse' : 'animate-reticle-slow'}
            style={{ transformOrigin: '280px 280px' }}
          >
            <circle
              cx="280"
              cy="280"
              r="246"
              fill="none"
              stroke="#32D8FF"
              strokeWidth="1.5"
              strokeDasharray="40 180 80 120"
              strokeOpacity={isHovered ? '0.75' : '0.45'}
              className="transition-all duration-300"
            />
            <line x1="280" y1="22" x2="280" y2="38" stroke="#32D8FF" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="280" y1="522" x2="280" y2="538" stroke="#32D8FF" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="22" y1="280" x2="38" y2="280" stroke="#32D8FF" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="522" y1="280" x2="538" y2="280" stroke="#32D8FF" strokeWidth="2" strokeOpacity="0.7" />
          </g>

          <g
            className={prefersReduced ? '' : isHovered ? 'animate-reticle-slow' : 'animate-reticle-reverse'}
            style={{ transformOrigin: '280px 280px' }}
          >
            <circle
              cx="280"
              cy="280"
              r="230"
              fill="none"
              stroke="#62E6A7"
              strokeWidth="1"
              strokeDasharray="60 90 30 150"
              strokeOpacity={isHovered ? '0.6' : '0.3'}
              className="transition-all duration-300"
            />
          </g>

          {!prefersReduced && (
            <g
              className={isHovered ? 'animate-reticle-reverse' : 'animate-radar-sweep'}
              style={{ transformOrigin: '280px 280px' }}
            >
              <path
                d="M 280 280 L 280 34 A 246 246 0 0 1 454 106 Z"
                fill="url(#radarSweepGrad)"
                opacity={isHovered ? '0.75' : '0.5'}
              />
            </g>
          )}

          {/* Precision Corner Brackets */}
          <path
            d="M 45 105 L 45 45 L 105 45"
            fill="none"
            stroke="#32D8FF"
            strokeWidth="1.5"
            strokeOpacity={isHovered ? '0.85' : '0.5'}
            className="transition-all duration-300"
          />
          <path
            d="M 515 105 L 515 45 L 455 45"
            fill="none"
            stroke="#32D8FF"
            strokeWidth="1.5"
            strokeOpacity={isHovered ? '0.85' : '0.5'}
            className="transition-all duration-300"
          />
          <path
            d="M 45 455 L 45 515 L 105 515"
            fill="none"
            stroke="#32D8FF"
            strokeWidth="1.5"
            strokeOpacity={isHovered ? '0.85' : '0.5'}
            className="transition-all duration-300"
          />
          <path
            d="M 515 455 L 515 515 L 455 515"
            fill="none"
            stroke="#32D8FF"
            strokeWidth="1.5"
            strokeOpacity={isHovered ? '0.85' : '0.5'}
            className="transition-all duration-300"
          />
        </svg>

        {/* Central Rotating Automotive Performance Wheel Container */}
        <div
          className={`relative w-[84%] h-[84%] rounded-full overflow-hidden border transition-all duration-500 z-10 ${
            isHovered
              ? 'shadow-[0_0_55px_rgba(0,0,0,0.95),0_0_30px_rgba(50,216,255,0.25)] border-[#32D8FF]/60'
              : 'shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_30px_rgba(50,216,255,0.14)] border-[#1D242B]/80'
          }`}
        >
          {/* The Wheel Image that rotates (Clockwise idle, Anti-Clockwise on hover) */}
          <img
            ref={wheelImgRef}
            src="/assets/hero-wheel.jpg"
            alt="Anergina Performance Automotive Wheel Assembly"
            className="w-full h-full object-cover object-center pointer-events-none"
            style={{ transformOrigin: 'center center' }}
          />

          {/* Radial light glint */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay opacity-25"
            style={{
              background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35) 0%, transparent 60%)',
            }}
          />

          {/* Center Hub Outer Stationary Bevel Ring (Refined & Compact) */}
          <div className="absolute inset-0 m-auto w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full border border-[#32D8FF]/15 pointer-events-none z-15" />

          {/* ── Stationary Center Hub Cap with Anergina Emblem (DOES NOT ROTATE, COMPACT & SUBTLE) ── */}
          <div
            className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full z-20 flex items-center justify-center select-none pointer-events-none transition-all duration-300"
            style={{
              transform: 'none', // Strictly stationary (0deg) at all times
            }}
          >
            {/* Soft Ambient Cap Glow */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-500 ${
                isHovered
                  ? 'shadow-[0_0_18px_rgba(50,216,255,0.3),inset_0_0_10px_rgba(50,216,255,0.18)]'
                  : 'shadow-[0_0_12px_rgba(0,0,0,0.95),inset_0_0_6px_rgba(50,216,255,0.08)]'
              }`}
            />

            {/* Precision Machined Center-Lock Cap Body (Matte Dark Titanium Finish) */}
            <div
              className={`relative w-full h-full rounded-full border p-1.5 flex items-center justify-center overflow-hidden transition-colors duration-300 ${
                isHovered
                  ? 'border-[#32D8FF]/60 bg-gradient-to-b from-[#0F161E] via-[#080D12] to-[#040608]'
                  : 'border-[#1D242B] bg-gradient-to-b from-[#0E131A] via-[#070A0E] to-[#030406]'
              }`}
            >
              {/* Subtle Radial Micro-Texture */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: isHovered
                    ? 'radial-gradient(circle at center, rgba(50,216,255,0.12) 0%, transparent 75%)'
                    : 'radial-gradient(circle at center, rgba(50,216,255,0.06) 0%, transparent 70%)',
                }}
              />

              {/* Inner Technical Reticle Border */}
              <div
                className={`absolute inset-1 rounded-full border border-dashed transition-all duration-300 ${
                  isHovered ? 'border-[#32D8FF]/40 opacity-80' : 'border-[#32D8FF]/20 opacity-50'
                }`}
              />

              {/* 4 Subtle Center-Lock Alignment Indices (0, 90, 180, 270 deg) */}
              <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#32D8FF]/50 rounded-full" />
              <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#32D8FF]/50 rounded-full" />
              <div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-1 h-0.5 bg-[#32D8FF]/50 rounded-full" />
              <div className="absolute right-0.5 top-1/2 -translate-y-1/2 w-1 h-0.5 bg-[#32D8FF]/50 rounded-full" />

              {/* The Official Anergina Logo Emblem (Stationary, Compact, Soft Clean Glow) */}
              <div
                className={`relative z-10 flex items-center justify-center transition-all duration-300 ${
                  isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-85'
                }`}
              >
                <AnerginaLogo
                  size={24}
                  color="cyan"
                  glow={false}
                  className="w-5 sm:w-6 md:w-6.5 h-auto filter drop-shadow-[0_0_5px_rgba(50,216,255,0.3)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stationary Callout 1: Top-Right Brake Caliper Telemetry (Focus Mode on hover) */}
        <div className="absolute top-2 -right-4 sm:-right-8 z-30 pointer-events-none hidden sm:flex flex-col items-start transition-transform duration-300">
          <div className="flex items-center gap-2">
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="overflow-visible">
              <polyline
                points="0,20 20,4 48,4"
                fill="none"
                stroke={isHovered ? '#62E6A7' : '#32D8FF'}
                strokeWidth="1.5"
                strokeOpacity={isHovered ? '0.8' : '0.6'}
                className="transition-colors duration-300"
              />
              <circle
                cx="0"
                cy="20"
                r="3"
                fill={isHovered ? '#62E6A7' : '#32D8FF'}
                className="transition-colors duration-300"
              />
            </svg>
            <div
              className={`bg-[#0A0D11]/90 backdrop-blur-md border px-3 py-1.5 rounded-[4px] transition-all duration-300 ${
                isHovered
                  ? 'border-[#62E6A7]/50 shadow-[0_0_16px_rgba(98,230,167,0.2)]'
                  : 'border-[#32D8FF]/30 shadow-[0_0_12px_rgba(50,216,255,0.1)]'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isHovered ? 'bg-[#62E6A7] animate-ping' : 'bg-[#32D8FF] animate-pulse'
                  }`}
                />
                <span
                  className={`text-[10px] font-mono font-bold tracking-wider uppercase transition-colors duration-300 ${
                    isHovered ? 'text-[#62E6A7]' : 'text-[#32D8FF]'
                  }`}
                >
                  {isHovered ? 'FOCUS MODE // REVERSE TORQUE' : 'CALIPER TELEMETRY // 6-PISTON'}
                </span>
              </div>
              <div className="text-[9px] font-mono text-[#8E99A5] mt-0.5">
                {isHovered ? 'PRESSURE: 172.6 BAR // ACTIVE SENSING' : 'PRESSURE: 142.4 BAR // DUAL-CIRCUIT'}
              </div>
            </div>
          </div>
        </div>

        {/* Stationary Callout 2: Bottom-Left Tire Sensor Telemetry (Focus Mode on hover) */}
        <div className="absolute bottom-6 -left-4 sm:-left-8 z-30 pointer-events-none hidden sm:flex flex-col items-end transition-transform duration-300">
          <div className="flex items-center gap-2">
            <div
              className={`bg-[#0A0D11]/90 backdrop-blur-md border px-3 py-1.5 rounded-[4px] shadow-lg text-right transition-all duration-300 ${
                isHovered
                  ? 'border-[#32D8FF]/50 shadow-[0_0_16px_rgba(50,216,255,0.2)]'
                  : 'border-[#1D242B]'
              }`}
            >
              <div className="flex items-center justify-end gap-1.5">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#F5F7FA] uppercase">
                  {isHovered ? 'DYNAMIC VECTOR SENSING' : 'PIRELLI P-ZERO 255/35 ZR21'}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-[#32D8FF]' : 'bg-[#62E6A7]'}`}
                />
              </div>
              <div
                className={`text-[9px] font-mono mt-0.5 transition-colors duration-300 ${
                  isHovered ? 'text-[#32D8FF]' : 'text-[#62E6A7]'
                }`}
              >
                {isHovered
                  ? `VELOCITY: ${displayRpm} RPM // COUNTER-SPIN`
                  : 'TPMS: 2.4 BAR // TEMP: 38°C // WEAR: 94%'}
              </div>
            </div>
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="overflow-visible">
              <polyline
                points="0,4 28,4 48,20"
                fill="none"
                stroke={isHovered ? '#32D8FF' : '#62E6A7'}
                strokeWidth="1.5"
                strokeOpacity={isHovered ? '0.8' : '0.6'}
                className="transition-colors duration-300"
              />
              <circle
                cx="48"
                cy="20"
                r="3"
                fill={isHovered ? '#32D8FF' : '#62E6A7'}
                className="transition-colors duration-300"
              />
            </svg>
          </div>
        </div>

        {/* Bottom Status Pill */}
        <div className="absolute -bottom-5 sm:-bottom-7 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap pointer-events-none">
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0A0D11]/95 border shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${
              isHovered
                ? 'border-[#32D8FF]/50 shadow-[0_0_18px_rgba(50,216,255,0.2)]'
                : 'border-[#1D242B]'
            }`}
          >
            <span className="flex items-center gap-1.5 text-[#32D8FF]">
              <span
                className={`w-2 h-2 rounded-full ${
                  isHovered ? 'bg-[#62E6A7] animate-ping' : 'bg-[#32D8FF] animate-ping'
                }`}
              />
              <span
                className={`w-2 h-2 rounded-full ${
                  isHovered ? 'bg-[#62E6A7]' : 'bg-[#32D8FF]'
                } absolute`}
              />
              {isHovered
                ? isPressed
                  ? 'TURBO REVERSE // ENGAGED'
                  : 'FOCUS MODE // REVERSE ACTIVE'
                : 'SYSTEM ONLINE'}
            </span>
            <span className="text-[#1D242B]">|</span>
            <span className={isHovered ? 'text-[#F5F7FA] font-bold' : 'text-[#8E99A5]'}>
              {isHovered ? `${displayRpm} RPM` : '13+ INSURERS SYNCED'}
            </span>
            <span className="text-[#1D242B] hidden md:inline">|</span>
            <span
              className={`hidden md:inline transition-colors duration-300 ${
                isHovered ? 'text-[#62E6A7] font-bold' : 'text-[#62E6A7]'
              }`}
            >
              {isHovered ? 'FOCUS ENGAGED' : 'TELEMETRY ACTIVE'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}