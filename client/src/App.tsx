import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';

// Lazy-loaded pages for route-based code splitting
const HomePage = lazy(() => import('@/pages/HomePage').then((m) => ({ default: m.HomePage })));
const PlatformPage = lazy(() => import('@/pages/PlatformPage').then((m) => ({ default: m.PlatformPage })));
const SolutionsPage = lazy(() => import('@/pages/SolutionsPage').then((m) => ({ default: m.SolutionsPage })));
const NetworkPage = lazy(() => import('@/pages/NetworkPage').then((m) => ({ default: m.NetworkPage })));
const AboutPage = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const LoginPage = lazy(() => import('@/pages/LoginPage').then((m) => ({ default: m.LoginPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#050608] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <svg width="32" height="32" viewBox="0 0 28 28" fill="none" aria-label="Loading">
          <circle cx="14" cy="14" r="12" stroke="#32D8FF" strokeWidth="1.5" strokeOpacity="0.4" />
          <circle
            cx="14"
            cy="14"
            r="12"
            fill="none"
            stroke="#32D8FF"
            strokeWidth="1.5"
            strokeDasharray="18 56"
            strokeLinecap="round"
            style={{ animation: 'spin-slow 1.5s linear infinite', transformOrigin: 'center' }}
          />
        </svg>
        <span className="text-[10px] text-[#8E99A5] tracking-[0.12em] uppercase">Loading</span>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
