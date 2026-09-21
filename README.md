# Anergina — Intelligent Automotive Service Operations

Production-quality digital platform and marketing showcase for **Anergina**, connecting insurers, surveyors, workshops, and customers through unified vehicle case management, cost intelligence, and decarbonisation tracking.

---

## Brand Architecture

**AUTOMOTIVE × TECHNOLOGY × INTELLIGENCE × SUSTAINABILITY**

- **Primary Colors**: Carbon Black (`#050608`), Surface (`#0A0D11`), Elevated Surface (`#101419`), Border (`#1D242B`)
- **Accents**: Cyan (`#32D8FF`) for technology and intelligence, Green (`#62E6A7`) for sustainability
- **Typography**: Inter (400, 500, 600, 700, 800, 900) with technical uppercase tracking
- **Motion System**: Ambient (CSS), Interaction (Framer Motion), Cinematic (Hero & Vehicle Journey) with one dominant motion concept per viewport and full reduced-motion accessibility.

---

## Technology Stack

### Client (`client/`)
- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS v4** + `@tailwindcss/vite`

## 1. Project Overview & Visual Rebuild

A production-grade digital presence built for **Anergina**, combining automotive engineering depth, operational intelligence, and decarbonisation governance.

**Visual Foundation Overhaul**:
- **Consistent Grid System**: Replaced arbitrary padding with a unified container scale (`mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16`) across every section and internal page hero.
- **Normal Document Flow**: Eliminated uncoordinated absolute-positioned overlays (`DataOverlay`) that caused text collisions over hero headings and paragraphs. All technical telemetry markers now sit within natural grid boundaries.
- **Authentic Automotive Wheel Assembly (`WheelVisual.tsx`)**: Completely rebuilt from scratch using multi-layered SVG:
  * Outer tire with sidewall technical branding (`ANERGINA INTELLIGENT PERFORMANCE • 255/35 ZR21`), shoulder bead, and siped tread grooves.
  * Deep-dish alloy barrel with metallic gradients and drop-center lip.
  * Ventilated cast-iron rotor with spiral cross-drilled cooling holes.
  * High-performance 2-piston brake caliper fixed at ~10 o'clock with cyan accent line and Anergina branding.
  * 5 sculpted twin-spoke alloy arms with extruded 3D bevel lighting.
  * Recessed PCD hub with 5 titanium hex lug bolts and metallic center cap.
  * Stationary caliper with controlled 45s rotor/wheel rotation and subtle rim light sweep.
- **Predictable Section Rhythm**: Each major section has controlled vertical spacing (`py-20 sm:py-24 lg:py-28`), distinct background alternation (`#050608` / `#0A0D11`), and clear boundary demarcation (`border-b border-[#1D242B]/80`).
- **Typography**: Inter (400 to 900) with precise letter-spacing (`tracking-tight` for display headings, `font-mono tracking-[0.14em] uppercase` for technical metadata). Zero crooked or jagged alternating margins.

---

## Centralized Data Architecture

All business facts are strictly managed within `client/src/data/`:
- `company.ts` — Brand positioning, descriptions, headlines, and copyright
- `partners.ts` — Insurance partners list (10 supplied names) and configurable metric (`13+`)
- `network.ts` — 10 operating states (Delhi, Haryana, Punjab, Himachal Pradesh, Uttarakhand, Uttar Pradesh, Rajasthan, Madhya Pradesh, Bihar, Karnataka) and metrics (200+ workshops, 20+ services)
- `vehicleBrands.ts` — 16 supported vehicle brands
- `capabilities.ts` — 6 core operational modules with distinct visual treatments
- `solutions.ts` — 4 stakeholder profiles with detailed workflows
- `navigation.ts` — Navigation and footer links
- `testimonial.ts` — Authorized single OEM partner quote and attribution

---

## Getting Started

### 1. Install & Build Client
```bash
cd client
npm install
npm run build
npm run dev
```

### 2. Install & Run Server
```bash
cd server
npm install
cp .env.example .env
npm run dev
```
The server runs on port `5000` with health check at `GET /api/health`.

### 3. Verification Commands
- `npm --prefix client run build` — Typecheck and build frontend
- `npm --prefix server run build` — Typecheck and compile server
