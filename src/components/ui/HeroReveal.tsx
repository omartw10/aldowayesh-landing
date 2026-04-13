"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type HeroRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  "data-reveal"?: string;
};

export function HeroReveal({
  children,
  className,
  delay = 0,
  "data-reveal": dataReveal,
}: HeroRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} data-reveal={dataReveal}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      data-reveal={dataReveal}
    >
      {children}
    </motion.div>
  );
}
