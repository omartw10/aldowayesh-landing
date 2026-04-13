"use client";

import { motion } from "motion/react";

export function PremiumOrnaments() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.03]">
      {/* Subtle lattice pattern */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 30-15 30L15 30z' fill='%239e8245' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 h-64 w-64 bg-[radial-gradient(circle_at_top_left,var(--color-gold),transparent_70%)] opacity-20" />
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-[radial-gradient(circle_at_bottom_right,var(--color-gold),transparent_70%)] opacity-20" />
      
      {/* Vertical elegant lines */}
      <div className="absolute inset-y-0 left-[5%] w-px bg-gradient-to-b from-transparent via-[var(--color-gold)] to-transparent opacity-30" />
      <div className="absolute inset-y-0 right-[5%] w-px bg-gradient-to-b from-transparent via-[var(--color-gold)] to-transparent opacity-30" />
    </div>
  );
}
