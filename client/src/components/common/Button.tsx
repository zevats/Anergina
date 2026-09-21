import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
}

const baseStyles =
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#32D8FF] focus-visible:outline-offset-3 disabled:opacity-50 disabled:pointer-events-none select-none';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#32D8FF] text-[#050608] hover:bg-[#5ee3ff] active:scale-[0.98] shadow-[0_0_20px_rgba(50,216,255,0.2)]',
  secondary:
    'border border-[#32D8FF] text-[#32D8FF] hover:bg-[rgba(50,216,255,0.08)] active:scale-[0.98]',
  ghost:
    'text-[#8E99A5] hover:text-[#F5F7FA] hover:bg-[rgba(245,247,250,0.05)] active:scale-[0.98]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm rounded-[6px] gap-1.5',
  md: 'h-11 px-6 text-sm rounded-[6px] gap-2',
  lg: 'h-13 px-8 text-base rounded-[10px] gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
  children,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = loading ? (
    <>
      <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      <span>{children}</span>
    </>
  ) : (
    children
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
