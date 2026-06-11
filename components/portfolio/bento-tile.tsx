"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BentoTileProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function BentoTile({ children, className = "", delay = 0 }: BentoTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`
        relative overflow-hidden rounded-[16px] bg-card border border-border
        transition-all duration-300 ease-out
        hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(56,182,255,0.3)]
        group
        ${className}
      `}
    >
      {/* Radial glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}
