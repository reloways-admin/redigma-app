

import React from 'react';

type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="project-tag type-body-small">
      {children}
    </span>
  );
}