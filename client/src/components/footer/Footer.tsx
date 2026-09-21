import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from '@/data/navigation';
import { company } from '@/data/company';
import { AnerginaLogo } from '@/components/common/AnerginaLogo';

export function Footer() {
  return (
    <footer className="relative border-t border-[#1D242B] bg-[#050608]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-14 sm:py-16">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:flex-row lg:justify-between gap-10">
          {/* Brand & Identity */}
          <div className="max-w-md flex flex-col items-center sm:items-start w-full sm:w-auto">
            <Link to="/" className="flex items-center gap-3 mb-3 group" aria-label="Anergina Home">
              <AnerginaLogo size={34} color="cyan" />
              <div className="flex flex-col text-left">
                <span className="text-base font-900 tracking-tight text-[#F5F7FA]">Anergina</span>
                <span className="text-[9px] font-mono tracking-[0.16em] uppercase text-[#32D8FF]">
                  ZEVATS AI LABS
                </span>
              </div>
            </Link>

            <p className="text-xs font-semibold text-[#F5F7FA] mb-2 text-center sm:text-left">
              Intelligent technology for automotive service operations.
            </p>

            <p className="text-xs sm:text-sm text-[#8E99A5] leading-relaxed mb-4 text-center sm:text-left">
              Anergina is an automotive service technology platform connecting insurers, surveyors, workshops and customers through intelligent case management, repair operations, cost intelligence and environmental impact tracking.
            </p>

            {/* Company Statement */}
            <div className="pt-3 border-t border-[#1D242B]/60 text-[11px] font-mono text-[#8E99A5] text-center sm:text-left w-full">
              <span className="text-[#F5F7FA] font-bold block mb-0.5">ZEVATS AI LABS</span>
              <span>Building intelligent technology for real-world industries.</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5F7FA] mb-3 text-center sm:text-left">
              PLATFORM
            </div>
            <nav aria-label="Footer Navigation" className="w-full">
              <ul className="grid grid-cols-2 gap-x-8 sm:gap-x-10 gap-y-3 justify-items-center sm:justify-items-start max-w-xs mx-auto sm:max-w-none sm:mx-0" role="list">
                {footerLinks.map((link) => (
                  <li key={link.href} className="w-full text-center sm:text-left">
                    <Link
                      to={link.href}
                      className="text-xs font-mono font-medium uppercase tracking-wider text-[#8E99A5] hover:text-[#32D8FF] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Network Information Card */}
          <div className="w-full max-w-sm sm:max-w-none sm:w-auto bg-[#0A0D11] border border-[#1D242B] p-4 sm:p-5 rounded-[8px] font-mono text-[10px] space-y-2 text-[#8E99A5] sm:min-w-[200px] text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[#32D8FF] font-semibold pb-1.5 border-b border-[#1D242B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#32D8FF]" />
              <span>NETWORK</span>
            </div>
            <div className="grid grid-cols-2 sm:block gap-2 sm:space-y-2 pt-1 sm:pt-0">
              <div>13+ Insurance Partners</div>
              <div>200+ Workshop Partners</div>
              <div>10 States</div>
              <div>20+ Repair Services</div>
              <div className="col-span-2 sm:col-span-1 text-[#32D8FF]">16+ Vehicle Brands</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#1D242B]/70 flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between sm:text-left gap-4">
          <p className="text-xs text-[#8E99A5] font-mono">{company.copyright}</p>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono">
            <span className="text-[#F5F7FA] font-semibold">Anergina</span>
            <span className="text-[#1D242B]">—</span>
            <span className="text-[#62E6A7] tracking-wider">
              {company.tagline}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
