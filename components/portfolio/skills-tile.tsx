"use client"

import { motion } from "framer-motion"
import { SKILL_NODES, SKILL_EDGES } from "@/constants/portfolio-data"
import type { TileSize } from "@/types/portfolio"

const SIZE_MAP: Record<TileSize, { px: number; text: string }> = {
  lg: { px: 64, text: "text-xs"    },
  md: { px: 56, text: "text-[10px]" },
  sm: { px: 48, text: "text-[9px]"  },
}

const LEVEL_COLORS: Record<string, string> = {
  core:       "border-primary/40 hover:border-primary hover:text-primary hover:bg-primary/10",
  proficient: "border-border hover:border-[#7C6FFF] hover:text-[#7C6FFF] hover:bg-[#7C6FFF]/10",
  familiar:   "border-border hover:border-[#00C49A] hover:text-[#00C49A] hover:bg-[#00C49A]/10",
}

export function SkillsTile() {
  return (
    <div className="h-full flex flex-col p-6">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground mb-4">
        Capability Graph
      </h3>

      <div className="flex-1 relative">
        {/* エッジ */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} aria-hidden="true">
          {SKILL_EDGES.map((edge, idx) => {
            const from = SKILL_NODES.find((n) => n.id === edge.from)
            const to   = SKILL_NODES.find((n) => n.id === edge.to)
            if (!from || !to) return null
            return (
              <motion.line
                key={idx}
                x1={`${from.x}%`} y1={`${from.y}%`}
                x2={`${to.x}%`}   y2={`${to.y}%`}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                strokeDasharray="4 2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.4, duration: 0.4 }}
              />
            )
          })}
        </svg>

        {/* ノード */}
        {SKILL_NODES.map((node, idx) => {
          const { px, text } = SIZE_MAP[node.size]
          const half = px / 2

          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.08, duration: 0.35, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: `${node.x}%`,
                top:  `${node.y}%`,
                marginLeft: -half,
                marginTop:  -half,
                width:  px,
                height: px,
                zIndex: 1,
              }}
            >
              {/* パルスリング (coreのみ) */}
              {node.level === "core" && (
                <motion.span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "9999px",
                    border: "1px solid rgba(56,182,255,0.4)",
                  }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                />
              )}

              {/* ノード本体 */}
              <div
                className={`w-full h-full rounded-full bg-muted/50 border flex items-center justify-center text-center font-mono text-muted-foreground transition-all duration-200 cursor-default ${text} ${LEVEL_COLORS[node.level]}`}
                title={`Level: ${node.level}`}
              >
                {node.label}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
