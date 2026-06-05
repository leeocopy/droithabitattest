"use client";

import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: boolean;
}

export default function BentoCard({ children, className = "", span = false }: BentoCardProps) {
  return (
    <article
      className={`
        relative overflow-hidden rounded-3xl border border-accent-slate/20
        bg-surface-glass backdrop-blur-md shadow-[0_4px_30px_rgba(34,50,75,0.04)]
        transition-all duration-300 hover:bg-surface-cardHover hover:shadow-[0_8px_40px_rgba(34,50,75,0.08)]
        p-6 md:p-8
        ${span ? "lg:col-span-2" : ""}
        ${className}
      `}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </article>
  );
}
