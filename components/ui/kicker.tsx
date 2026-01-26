'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface KickerProps {
  children: React.ReactNode;
  className?: string;
}

export function Kicker({ children, className }: KickerProps) {
  return (
    <span 
      className={cn(
        // Typography & Case
        "text-[10px] font-bold uppercase tracking-[0.2em]",
        // Color & Alignment
        "bg-[var(--kicker-bg)] text-[var(--kicker-text)] block mb-4",
        className
      )}
    >
      {children}
    </span>
  );
}