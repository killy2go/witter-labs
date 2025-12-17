// components/CTA.tsx
"use client";

import React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
};

export function CTA({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl text-sm font-medium transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 active:scale-[0.99]";

  const styles =
    variant === "primary"
      ? "bg-sky-500 text-slate-950 hover:bg-sky-400"
      : "border border-slate-700 text-slate-200 hover:border-sky-400 hover:text-sky-200";

  return <a className={`${base} ${styles} ${className}`} {...props} />;
}
