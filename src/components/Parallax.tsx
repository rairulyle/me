'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type ParallaxProps = { children: ReactNode; speed?: number; className?: string };

/**
 * Shifts children vertically relative to scroll position — positive speed lags
 * behind the scroll (appears further away), negative runs ahead of it.
 * The outer div is measured (never transformed) so there is no feedback loop.
 */
const Parallax = ({ children, speed = 0.12, className = '' }: ParallaxProps) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let visible = false;

    const update = () => {
      frame = 0;
      const rect = outer.getBoundingClientRect();
      const distance = window.innerHeight / 2 - (rect.top + rect.height / 2);
      const clamped = Math.max(-window.innerHeight, Math.min(window.innerHeight, distance));
      inner.style.transform = `translate3d(0, ${(clamped * speed).toFixed(1)}px, 0)`;
    };

    const schedule = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        schedule();
      },
      { rootMargin: '20% 0px' },
    );
    observer.observe(outer);

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={outerRef} className={className}>
      <div ref={innerRef} className='will-change-transform'>
        {children}
      </div>
    </div>
  );
};

export default Parallax;
