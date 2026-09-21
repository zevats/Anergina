import React from 'react';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  contained?: boolean;
  noPadding?: boolean;
  border?: 'top' | 'bottom' | 'both' | 'none';
}

export function SectionWrapper({
  id,
  className = '',
  style,
  children,
  contained = true,
  noPadding = false,
  border = 'none',
}: SectionWrapperProps) {
  const borderStyles =
    border === 'top'
      ? 'border-t border-[#1D242B]/80'
      : border === 'bottom'
      ? 'border-b border-[#1D242B]/80'
      : border === 'both'
      ? 'border-y border-[#1D242B]/80'
      : '';

  const paddingStyles = noPadding ? '' : 'py-20 sm:py-24 lg:py-28';

  return (
    <section
      id={id}
      style={style}
      className={`relative w-full overflow-hidden ${borderStyles} ${paddingStyles} ${className}`}
    >
      {contained ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
