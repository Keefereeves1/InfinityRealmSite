import React, { forwardRef } from 'react';
import './section.css';

interface SectionProps {
  title: string;
}

// Forward the ref to the root div element
const Section = forwardRef<HTMLDivElement, SectionProps>(({ title }, ref) => {
  return (
    <div className="section" ref={ref}>
      {title}
    </div>
  );
});

export default Section;
