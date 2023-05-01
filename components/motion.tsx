import { useInView } from 'framer-motion';
import { ReactHTML, createElement, useRef } from 'react';
import { cssvars } from 'utils';

type Props<T extends keyof ReactHTML> = {
  x?: number;
  y?: number;
  as?: T;
  delay?: number;
  options?: Parameters<typeof useInView>['1'];
} & (T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : unknown);

export default function Motion<T extends keyof ReactHTML = 'div'>({
  as,
  x = 0,
  y = 0,
  style,
  options,
  children,
  delay = 0,
  className,
  ...rest
}: Props<T>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 'all', ...options });

  return createElement(
    as || 'div',
    {
      ref,
      style: { ...cssvars({ x: `${x}rem`, y: `${y}rem`, t: '0.75s', d: `${delay}s` }), ...style },
      className: `duration-500 ease-linear fill-mode-both ${isInView ? 'animate-fade-in' : 'animate-fade-out'} ${className}`,
      ...rest,
    },
    children,
  );
}

export type { Props as MotionProps };
