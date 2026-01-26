'use client';

import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
}

export function Button({ children, href, variant = 'primary', onClick, className = '' }: ButtonProps) {
  
  const variantStyles = {
    primary: "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)]",
    secondary: "bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] hover:bg-[var(--btn-secondary-bg-hover)]",
    outline: "border border-[var(--btn-outline-border)] bg-transparent text-[var(--btn-outline-text)] hover:bg-[var(--btn-outline-bg-hover)]"
  };

  const combinedClasses = [
    "btn-base",
    variantStyles[variant],
    className
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} type="button">
      {children}
    </button>
  );
}