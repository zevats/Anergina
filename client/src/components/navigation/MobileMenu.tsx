import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navLinks } from '@/data/navigation';
import { staggerContainer, staggerItem } from '@/lib/motion';

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-40 bg-[#050608]/98 backdrop-blur-xl pt-24 pb-8 flex flex-col justify-between"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      <div className="relative flex-1 flex flex-col justify-center px-8">
        {/* Nav links */}
        <motion.nav
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1" role="list">
            {navLinks.map((link, i) => (
              <motion.li key={link.href} variants={staggerItem}>
                <Link
                  to={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-4 border-b border-[#1D242B] transition-colors duration-200 ${
                    location.pathname === link.href
                      ? 'text-[#F5F7FA]'
                      : 'text-[#8E99A5] hover:text-[#F5F7FA]'
                  }`}
                  aria-current={location.pathname === link.href ? 'page' : undefined}
                >
                  <span className="text-2xl font-700 tracking-tight">{link.label}</span>
                  <span className="text-xs font-medium tracking-[0.1em] uppercase text-[#32D8FF] opacity-60">
                    0{i + 1}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Sign In */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="mt-10"
        >
          <Link
            to="/login"
            onClick={onClose}
            className="inline-flex items-center h-12 px-8 text-sm font-medium border border-[#32D8FF] text-[#32D8FF] rounded-[6px] hover:bg-[rgba(50,216,255,0.08)] transition-all duration-200"
          >
            Sign In
          </Link>
        </motion.div>
      </div>

      {/* Bottom tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="px-8 py-8 border-t border-[#1D242B]"
      >
        <p className="text-xs text-[#8E99A5] tracking-[0.08em] uppercase">
          Decarbonising automotive service operations.
        </p>
      </motion.div>
    </motion.div>
  );
}
