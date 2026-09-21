import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

// Generate stable particles (no randomness on every render)
const PARTICLES: Particle[] = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: (i * 37 + 11) % 100,
  y: (i * 53 + 7) % 100,
  size: 1 + (i % 3),
  duration: 8 + (i % 7) * 2,
  delay: (i * 0.7) % 6,
  opacity: 0.2 + (i % 5) * 0.08,
}));

interface HeroParticlesProps {
  className?: string;
  reducedCount?: boolean;
}

export function HeroParticles({ className = '', reducedCount = false }: HeroParticlesProps) {
  const prefersReduced = useReducedMotion();
  const particles = reducedCount || prefersReduced ? PARTICLES.slice(0, 6) : PARTICLES;

  if (prefersReduced) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#32D8FF]"
          style={{
            left: `${p.x}%`,
            bottom: `${p.y % 40}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -(60 + p.id * 4)],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* A few larger glowing orbs — ambient only */}
      {!prefersReduced && (
        <>
          <motion.div
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(50,216,255,0.04) 0%, transparent 70%)',
              right: '15%',
              top: '20%',
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-40 h-40 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(98,230,167,0.04) 0%, transparent 70%)',
              right: '30%',
              bottom: '25%',
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
        </>
      )}
    </div>
  );
}
