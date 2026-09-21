interface DataPulseProps {
  className?: string;
  color?: 'accent' | 'green';
  vertical?: boolean;
  animated?: boolean;
  length?: number;
}

export function DataPulse({
  className = '',
  color = 'accent',
  vertical = false,
  animated = true,
  length = 120,
}: DataPulseProps) {
  const stroke = color === 'green' ? '#62E6A7' : '#32D8FF';
  const gradientId = `pulse-gradient-${color}-${vertical ? 'v' : 'h'}`;

  if (vertical) {
    return (
      <svg
        width="2"
        height={length}
        viewBox={`0 0 2 ${length}`}
        className={`${animated ? '[animation:data-flow_3s_ease-in-out_infinite]' : ''} ${className}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity="0" />
            <stop offset="30%" stopColor={stroke} stopOpacity="0.8" />
            <stop offset="70%" stopColor={stroke} stopOpacity="0.8" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="1"
          y1="0"
          x2="1"
          y2={length}
          stroke={`url(#${gradientId})`}
          strokeWidth="1.5"
        />
        {animated && (
          <circle cx="1" cy="0" r="2" fill={stroke} opacity="0.9">
            <animateMotion dur="2s" repeatCount="indefinite">
              <mpath href={`#vpath-${gradientId}`} />
            </animateMotion>
          </circle>
        )}
      </svg>
    );
  }

  return (
    <svg
      width={length}
      height="2"
      viewBox={`0 0 ${length} 2`}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={stroke} stopOpacity="0" />
          <stop offset="30%" stopColor={stroke} stopOpacity="0.8" />
          <stop offset="70%" stopColor={stroke} stopOpacity="0.8" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <line
        x1="0"
        y1="1"
        x2={length}
        y2="1"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
      />
    </svg>
  );
}
