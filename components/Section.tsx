// components/Section.tsx
import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`max-w-5xl mx-auto px-4 py-16 md:py-20 ${className}`}
    >
      {children}
    </section>
  );
}
