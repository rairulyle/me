'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type RevealProps = { children: ReactNode; className?: string; once?: boolean };

const Reveal = ({ children, className = '', once = false }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle('is-visible', entry.isIntersecting);
        if (entry.isIntersecting && once) observer.disconnect();
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

export default Reveal;
