'use client';

interface LabelProps {
  children: React.ReactNode;
}

export function Label({ children }: LabelProps) {
  return (
    <span className="bg-[var(--label-bg)] px-4 py-1.5 text-label text-[var(--label-text)] transition-colors hover:bg-[var(--label-bg-hover)]">
      {children}
    </span>
  );
}