// Centralized Motion for React animation variants
// All components must consume these primitives instead of defining their own.

import type { Variants } from 'framer-motion';

// ─── Timing constants ───────────────────────────────────────────────────────
export const timing = {
  fast: 0.2,
  section: 0.6,
  cinematic: 0.9,
} as const;

export const easing = {
  fast: [0.4, 0, 0.2, 1] as const,
  cinematic: [0.16, 1, 0.3, 1] as const,
  spring: { type: 'spring', stiffness: 100, damping: 20 },
} as const;

// ─── Base Variants ───────────────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: timing.section, ease: easing.fast },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: timing.section, ease: easing.cinematic },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: timing.section, ease: easing.cinematic },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: timing.section, ease: easing.cinematic },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: timing.section, ease: easing.cinematic },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: timing.section, ease: easing.cinematic },
  },
};

// ─── Stagger Containers ──────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: timing.section, ease: easing.cinematic },
  },
};

// ─── SVG Line Drawing ────────────────────────────────────────────────────────
export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.0, ease: easing.cinematic },
      opacity: { duration: 0.2 },
    },
  },
};

// ─── Cinematic Entrance ──────────────────────────────────────────────────────
export const cinematicFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: timing.cinematic, ease: easing.cinematic },
  },
};

// ─── Node Activation (Ecosystem) ────────────────────────────────────────────
export const nodeActivate: Variants = {
  hidden: { opacity: 0.4, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easing.cinematic },
  },
};

// ─── Viewport trigger defaults ───────────────────────────────────────────────
// Trigger 200px before scrolling into view to guarantee elements are visible
export const viewportConfig = {
  once: true,
  margin: '0px 0px 200px 0px',
  amount: 0.01,
} as const;
