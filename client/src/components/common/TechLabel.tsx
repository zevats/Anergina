interface TechLabelProps {
  children: React.ReactNode;
  color?: 'accent' | 'green' | 'secondary';
  className?: string;
}

export function TechLabel({ children, color = 'accent', className = '' }: TechLabelProps) {
  const colorClass =
    color === 'green'
      ? 'text-[#62E6A7]'
      : color === 'secondary'
      ? 'text-[#8E99A5]'
      : 'text-[#32D8FF]';

  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.12em] uppercase ${colorClass} ${className}`}
    >
      <span className="inline-block w-3 h-px bg-current opacity-60" />
      {children}
    </span>
  );
}
