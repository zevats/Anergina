import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedCounterProps {
  displayValue?: string;
  end?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

function NumericCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 1800,
  delay = 0,
  className = '',
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  const value = useCountUp(inView, { end, suffix, prefix, duration, delay });

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}

export function AnimatedCounter({
  displayValue,
  end,
  suffix = '',
  prefix = '',
  duration = 1800,
  delay = 0,
  className = '',
}: AnimatedCounterProps) {
  if (displayValue) {
    const match = displayValue.match(/^(\D*)(\d+)(\D*)$/);
    if (match) {
      const [, pre, num, suf] = match;
      return (
        <NumericCounter
          end={parseInt(num, 10)}
          suffix={suf}
          prefix={pre}
          duration={duration}
          delay={delay}
          className={className}
        />
      );
    }
    return <span className={className}>{displayValue}</span>;
  }

  if (end !== undefined) {
    return (
      <NumericCounter
        end={end}
        suffix={suffix}
        prefix={prefix}
        duration={duration}
        delay={delay}
        className={className}
      />
    );
  }

  return null;
}
