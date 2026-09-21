import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/data/navigation';
import { MobileMenu } from './MobileMenu';
import { AnerginaLogo } from '@/components/common/AnerginaLogo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#050608]/90 backdrop-blur-md border-b border-[#1D242B]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 text-[#F5F7FA] hover:text-[#32D8FF] transition-colors duration-200 group"
              aria-label="Anergina Homepage"
            >
              <AnerginaLogo size={34} color="cyan" />
              <div className="flex flex-col">
                <span className="text-lg font-900 tracking-tight leading-none text-[#F5F7FA] group-hover:text-[#32D8FF] transition-colors">
                  ANERGINA
                </span>
                <span className="text-[9px] font-mono tracking-[0.18em] uppercase text-[#8E99A5] leading-tight mt-1">
                  Automotive
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-3.5 py-2 text-xs font-semibold tracking-wider uppercase rounded-[4px] transition-all duration-200 ${
                      isActive
                        ? 'text-[#32D8FF] bg-[#101419] border border-[#1D242B]'
                        : 'text-[#8E99A5] hover:text-[#F5F7FA] hover:bg-[#0A0D11]'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Sign In + Schedule Demo + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="hidden sm:inline-flex items-center h-9 px-4 text-xs font-semibold uppercase tracking-wider text-[#8E99A5] hover:text-[#F5F7FA] bg-[#0A0D11] border border-[#1D242B] rounded-[6px] hover:border-[#32D8FF]/60 transition-all duration-200"
              >
                Sign In
              </Link>
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center h-9 px-4 text-xs font-semibold uppercase tracking-wider text-[#050608] bg-[#32D8FF] rounded-[6px] hover:bg-[#20c5ec] transition-all duration-200 shadow-[0_0_15px_rgba(50,216,255,0.25)] font-mono"
              >
                Schedule Demo
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-[6px] border border-[#1D242B] bg-[#0A0D11] hover:border-[#32D8FF]/60 transition-colors"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block w-4 h-[1.5px] bg-[#F5F7FA] origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.15 }}
                  className="block w-4 h-[1.5px] bg-[#F5F7FA]"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block w-4 h-[1.5px] bg-[#F5F7FA] origin-center"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen animated mobile menu */}
      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
