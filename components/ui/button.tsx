'use client';

import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

/** Anything the app router should not own: absolute URLs, mail, tel, in-page anchors. */
const EXTERNAL_HREF = /^(https?:|mailto:|tel:|#)/;

export function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  target,
  rel,
  'aria-label': ariaLabel,
}: ButtonProps) {

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

  if (href && EXTERNAL_HREF.test(href)) {
    return (
      <a href={href} target={target} rel={rel} aria-label={ariaLabel} className={combinedClasses}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} type="button" aria-label={ariaLabel}>
      {children}
    </button>
  );
}