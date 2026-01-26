'use client';

import { Label } from "@/components/ui/label";

export function HeroTags() {
  const tags = [
    'Product UX', 
    'Product strategy', 
    'Information architecture', 
    'User Interface', 
    'User experience', 
    'Design systems', 
    'MVP development'
  ];

  return (
    /* Outer section with borders spanning edge to edge */
    <section className="w-full border-t border-b border-[var(--border-subtle)] bg-transparent">
      {/* Inner container centered with max-width to align with Hero content */}
      <div className="mx-auto max-w-[1440px] px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
          {tags.map((tag) => (
            <Label key={tag}>{tag}</Label>
          ))}
        </div>
      </div>
    </section>
  );
}