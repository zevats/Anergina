import React from 'react';

interface LogoProps {
  name: string;
  className?: string;
}

// 10 Official Insurance Partner SVG Logos with exact brand colors
export function InsuranceLogo({ name, className = 'w-7 h-7' }: LogoProps) {
  switch (name) {
    case 'HDFC ERGO':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="HDFC ERGO Logo">
          <rect width="36" height="36" rx="6" fill="#0A1424" stroke="#1D2E4A" strokeWidth="1" />
          <rect x="7" y="7" width="10" height="10" fill="#004C8F" rx="1" />
          <rect x="19" y="7" width="10" height="10" fill="#004C8F" rx="1" />
          <rect x="7" y="19" width="10" height="10" fill="#004C8F" rx="1" />
          <rect x="19" y="19" width="10" height="10" fill="#004C8F" rx="1" />
          <rect x="11.5" y="11.5" width="13" height="13" fill="#ED1C24" rx="1.5" />
          <rect x="15" y="15" width="6" height="6" fill="#FFFFFF" />
        </svg>
      );

    case 'ICICI Lombard':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="ICICI Lombard Logo">
          <rect width="36" height="36" rx="6" fill="#1C0808" stroke="#3D1414" strokeWidth="1" />
          <rect x="6" y="8" width="24" height="20" rx="3" fill="#8A1515" />
          <circle cx="14" cy="13" r="2" fill="#F58220" />
          <path d="M12.5 17 H15.5 V24 H12.5 Z" fill="#FFFFFF" />
          <path d="M19 13 C22 13 24 15 24 18.5 C24 22 22 24 19 24 H17 V13 Z" fill="none" stroke="#F58220" strokeWidth="2" />
        </svg>
      );

    case 'Tata AIG':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Tata AIG Logo">
          <rect width="36" height="36" rx="6" fill="#06121E" stroke="#122A42" strokeWidth="1" />
          <circle cx="13" cy="18" r="8" fill="#00539B" />
          <path d="M9.5 14.5 H16.5 C16.5 14.5 14 15.5 13.5 18 C13.2 19.5 13 22 13 22 C13 22 12.8 19.5 12.5 18 C12 15.5 9.5 14.5 9.5 14.5 Z" fill="#FFFFFF" />
          <rect x="22" y="13" width="8" height="10" rx="1.5" fill="#002D72" />
          <text x="26" y="20.5" fontFamily="sans-serif" fontSize="7" fontWeight="900" fill="#FFFFFF" textAnchor="middle">AIG</text>
        </svg>
      );

    case 'Digit Insurance':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Digit Insurance Logo">
          <rect width="36" height="36" rx="6" fill="#1C1705" stroke="#3D320A" strokeWidth="1" />
          <circle cx="18" cy="18" r="11" fill="#FFB703" />
          <text x="18" y="17.5" fontFamily="sans-serif" fontSize="7.5" fontWeight="900" fill="#000000" textAnchor="middle" letterSpacing="-0.5px">digit</text>
          <path d="M12 20.5 Q18 24 24 20.5" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'SBI General':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="SBI General Logo">
          <rect width="36" height="36" rx="6" fill="#08101E" stroke="#102442" strokeWidth="1" />
          <circle cx="18" cy="18" r="11" fill="#00A3E0" />
          <circle cx="18" cy="16" r="3.5" fill="#FFFFFF" />
          <rect x="16.5" y="16" width="3" height="9" fill="#FFFFFF" />
        </svg>
      );

    case 'Kotak General':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Kotak General Logo">
          <rect width="36" height="36" rx="6" fill="#1A0A0A" stroke="#3A1515" strokeWidth="1" />
          <rect x="7" y="7" width="22" height="22" rx="4" fill="#ED1C24" />
          <path d="M13 14 C11 14 11 18 13 18 C15 18 17 14 19 14 C21 14 21 18 19 18 C17 18 15 22 13 22" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M23 13 V23 M23 18 L19 14 M23 18 L19 22" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'IFFCO Tokio':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="IFFCO Tokio Logo">
          <rect width="36" height="36" rx="6" fill="#061A0C" stroke="#12381C" strokeWidth="1" />
          <circle cx="18" cy="18" r="11" fill="#008000" />
          <circle cx="18" cy="18" r="8" stroke="#FFB81C" strokeWidth="1.2" fill="none" strokeDasharray="2 2" />
          <circle cx="18" cy="18" r="4" fill="#FFFFFF" />
          <circle cx="18" cy="18" r="2" fill="#003865" />
        </svg>
      );

    case 'Zuno':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Zuno Logo">
          <rect width="36" height="36" rx="6" fill="#150824" stroke="#2D124D" strokeWidth="1" />
          <circle cx="18" cy="18" r="11" fill="#7928CA" />
          <path d="M13 14 H23 L13 22 H23" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="21" cy="14" r="1.5" fill="#00F2FE" />
        </svg>
      );

    case 'Reliance General':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Reliance General Logo">
          <rect width="36" height="36" rx="6" fill="#1C0A0A" stroke="#3D1414" strokeWidth="1" />
          <path d="M18 7 L29 27 H7 Z" fill="#E31B23" />
          <path d="M18 11 L25 25 H11 Z" fill="#003399" />
          <circle cx="18" cy="19" r="3.5" fill="#FFFFFF" />
        </svg>
      );

    case 'Magma HDI':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Magma HDI Logo">
          <rect width="36" height="36" rx="6" fill="#1A0E05" stroke="#3A200B" strokeWidth="1" />
          <path d="M7 26 L16 10 L21 26 Z" fill="#F58220" />
          <path d="M18 13 L26 13 L29 26 L21 26 Z" fill="#0054A6" />
          <circle cx="14" cy="20" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="36" height="36" rx="6" fill="#0A0D11" stroke="#1D242B" strokeWidth="1" />
          <circle cx="18" cy="18" r="8" stroke="#32D8FF" strokeWidth="1.5" fill="none" />
        </svg>
      );
  }
}

// 16 Official Vehicle Manufacturer SVG Logos with exact brand colors
export function VehicleBrandLogo({ brand, className = 'w-7 h-7' }: { brand: string; className?: string }) {
  switch (brand) {
    case 'BMW':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="BMW Logo">
          <rect width="36" height="36" rx="6" fill="#080C14" stroke="#162238" strokeWidth="1" />
          <circle cx="18" cy="18" r="12" fill="#000000" stroke="#8E99A5" strokeWidth="1.2" />
          <circle cx="18" cy="18" r="8" fill="#FFFFFF" stroke="#8E99A5" strokeWidth="0.8" />
          <path d="M18 10 A8 8 0 0 1 26 18 H18 Z" fill="#0066B1" />
          <path d="M18 18 H10 A8 8 0 0 1 18 26 Z" fill="#0066B1" />
          <text x="18" y="9.5" fontFamily="sans-serif" fontSize="3" fontWeight="900" fill="#FFFFFF" textAnchor="middle">BMW</text>
        </svg>
      );

    case 'Mercedes':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Mercedes-Benz Logo">
          <rect width="36" height="36" rx="6" fill="#0A0E14" stroke="#1A2433" strokeWidth="1" />
          <circle cx="18" cy="18" r="12" stroke="#E0E6ED" strokeWidth="1.5" fill="none" />
          <path d="M18 7 L18 18 L18 7 Z" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M18 7 L19 18 L18 18 Z" fill="#E0E6ED" />
          <path d="M18 7 L17 18 L18 18 Z" fill="#8E99A5" />
          <path d="M8.5 23.5 L18 18 L8.5 23.5 Z" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M8.5 23.5 L18 17 L18 18 Z" fill="#E0E6ED" />
          <path d="M8.5 23.5 L18 19 L18 18 Z" fill="#8E99A5" />
          <path d="M27.5 23.5 L18 18 L27.5 23.5 Z" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M27.5 23.5 L18 19 L18 18 Z" fill="#E0E6ED" />
          <path d="M27.5 23.5 L18 17 L18 18 Z" fill="#8E99A5" />
        </svg>
      );

    case 'Audi':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Audi Logo">
          <rect width="36" height="36" rx="6" fill="#0A0E14" stroke="#1A2433" strokeWidth="1" />
          <g stroke="#D1D5DB" strokeWidth="1.4" fill="none">
            <circle cx="10.5" cy="18" r="4.2" />
            <circle cx="15.5" cy="18" r="4.2" />
            <circle cx="20.5" cy="18" r="4.2" />
            <circle cx="25.5" cy="18" r="4.2" />
          </g>
        </svg>
      );

    case 'Porsche':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Porsche Logo">
          <rect width="36" height="36" rx="6" fill="#140F05" stroke="#33240D" strokeWidth="1" />
          <path d="M12 9 H24 V19 C24 23 18 27 18 27 C18 27 12 23 12 19 Z" fill="#D4AF37" stroke="#000000" strokeWidth="0.8" />
          <rect x="13" y="11" width="4" height="4" fill="#C8102E" />
          <rect x="19" y="11" width="4" height="4" fill="#000000" />
          <rect x="13" y="16" width="4" height="4" fill="#000000" />
          <rect x="19" y="16" width="4" height="4" fill="#C8102E" />
          <rect x="16.5" y="13.5" width="3" height="4" fill="#D4AF37" stroke="#000000" strokeWidth="0.5" />
        </svg>
      );

    case 'Toyota':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Toyota Logo">
          <rect width="36" height="36" rx="6" fill="#140607" stroke="#331114" strokeWidth="1" />
          <ellipse cx="18" cy="18" rx="12" ry="8.5" stroke="#EB0A1E" strokeWidth="1.8" fill="none" />
          <ellipse cx="18" cy="18" rx="4" ry="7" stroke="#EB0A1E" strokeWidth="1.6" fill="none" />
          <ellipse cx="18" cy="14" rx="8" ry="3.2" stroke="#EB0A1E" strokeWidth="1.6" fill="none" />
        </svg>
      );

    case 'Honda':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Honda Logo">
          <rect width="36" height="36" rx="6" fill="#140607" stroke="#331114" strokeWidth="1" />
          <path d="M8 9 L10 27 H26 L28 9 Z" stroke="#CC0000" strokeWidth="1.5" rx="3" fill="none" />
          <path d="M12 11 L13.5 24 H15.5 L15 18 H21 L20.5 24 H22.5 L24 11 H22 L21.5 16 H14.5 L14 11 Z" fill="#CC0000" />
        </svg>
      );

    case 'Hyundai':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Hyundai Logo">
          <rect width="36" height="36" rx="6" fill="#060C14" stroke="#121F33" strokeWidth="1" />
          <ellipse cx="18" cy="18" rx="12" ry="8" stroke="#002C6C" strokeWidth="1.8" fill="none" transform="rotate(-15 18 18)" />
          <path d="M12 23 C14 15 15 13 16 13 M20 23 C21 23 22 21 24 13 M13.5 18 H22.5" stroke="#00AAD2" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'Tata':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Tata Motors Logo">
          <rect width="36" height="36" rx="6" fill="#06101C" stroke="#12253D" strokeWidth="1" />
          <circle cx="18" cy="18" r="12" fill="#00539B" />
          <path d="M10 13 H26 C26 13 21 15 19.5 20 C19 22 18.5 25 18 25 C17.5 25 17 22 16.5 20 C15 15 10 13 10 13 Z" fill="#FFFFFF" />
        </svg>
      );

    case 'Kia':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Kia Logo">
          <rect width="36" height="36" rx="6" fill="#140608" stroke="#331015" strokeWidth="1" />
          <rect x="7" y="10" width="22" height="16" rx="2" stroke="#BB162B" strokeWidth="1.2" fill="none" />
          <text x="18" y="22.5" fontFamily="'Arial Black', sans-serif" fontSize="11" fontWeight="900" fill="#BB162B" textAnchor="middle" letterSpacing="1.5px">KIA</text>
        </svg>
      );

    case 'Skoda':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Skoda Logo">
          <rect width="36" height="36" rx="6" fill="#06140E" stroke="#103324" strokeWidth="1" />
          <circle cx="18" cy="18" r="12" stroke="#78FAAE" strokeWidth="1.5" fill="#0E3A2F" />
          <circle cx="18" cy="14.5" r="1.5" fill="#78FAAE" />
          <path d="M18 10 L23 17 H13 Z" fill="#78FAAE" />
          <path d="M18 17 V24 M15 19 L18 24 L21 19" stroke="#78FAAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'Volvo':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Volvo Logo">
          <rect width="36" height="36" rx="6" fill="#060C14" stroke="#121D2E" strokeWidth="1" />
          <circle cx="17" cy="19" r="8.5" stroke="#E2E8F0" strokeWidth="1.8" fill="none" />
          <path d="M23 13 L27 9 M23 9 H27 V13" stroke="#E2E8F0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="9" y="16.5" width="16" height="5" fill="#003057" stroke="#E2E8F0" strokeWidth="0.6" />
          <text x="17" y="20.5" fontFamily="sans-serif" fontSize="3.5" fontWeight="900" fill="#FFFFFF" textAnchor="middle" letterSpacing="0.5px">VOLVO</text>
        </svg>
      );

    case 'Ford':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Ford Logo">
          <rect width="36" height="36" rx="6" fill="#060C1A" stroke="#121E38" strokeWidth="1" />
          <ellipse cx="18" cy="18" rx="13" ry="8.5" fill="#003478" stroke="#E2E8F0" strokeWidth="1.2" />
          <text x="18" y="21" fontFamily="'Brush Script MT', cursive, sans-serif" fontSize="9" fontWeight="bold" fontStyle="italic" fill="#FFFFFF" textAnchor="middle">Ford</text>
        </svg>
      );

    case 'BYD':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="BYD Logo">
          <rect width="36" height="36" rx="6" fill="#140608" stroke="#331015" strokeWidth="1" />
          <ellipse cx="18" cy="18" rx="12" ry="7.5" stroke="#D0021B" strokeWidth="1.5" fill="none" />
          <text x="18" y="21.5" fontFamily="sans-serif" fontSize="8" fontWeight="900" fill="#D0021B" textAnchor="middle" letterSpacing="1px">BYD</text>
        </svg>
      );

    case 'MG':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="MG Logo">
          <rect width="36" height="36" rx="6" fill="#140607" stroke="#331012" strokeWidth="1" />
          <polygon points="12,7 24,7 29,12 29,24 24,29 12,29 7,24 7,12" stroke="#A30000" strokeWidth="1.8" fill="#1F080A" />
          <text x="18" y="21.5" fontFamily="'Times New Roman', serif" fontSize="10" fontWeight="900" fill="#E2E8F0" textAnchor="middle" letterSpacing="0.5px">MG</text>
        </svg>
      );

    case 'Nissan':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Nissan Logo">
          <rect width="36" height="36" rx="6" fill="#140608" stroke="#331015" strokeWidth="1" />
          <circle cx="18" cy="18" r="10.5" stroke="#C3002F" strokeWidth="1.5" fill="none" />
          <rect x="7" y="15.5" width="22" height="5" fill="#0A0D11" stroke="#C3002F" strokeWidth="1" />
          <text x="18" y="19.5" fontFamily="sans-serif" fontSize="4" fontWeight="900" fill="#FFFFFF" textAnchor="middle" letterSpacing="1px">NISSAN</text>
        </svg>
      );

    case 'Volkswagen':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Volkswagen Logo">
          <rect width="36" height="36" rx="6" fill="#060E1A" stroke="#102038" strokeWidth="1" />
          <circle cx="18" cy="18" r="11" stroke="#15365A" strokeWidth="1.5" fill="#001E50" />
          <path d="M12 13 L15 18 L18 13 L21 18 L24 13" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M13 18 L16 23 L18 19 L20 23 L23 18" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="36" height="36" rx="6" fill="#0A0D11" stroke="#1D242B" strokeWidth="1" />
          <circle cx="18" cy="18" r="8" stroke="#FF7A29" strokeWidth="1.5" fill="none" />
        </svg>
      );
  }
}
