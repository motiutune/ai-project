"use client"

// ============================================================
// AI Reasoning Log: Deterministic seed for contributions
// v0 used Math.random() on every render → SSR/CSR mismatch
// hydration error. We use a seeded PRNG so server and client
// render identical grids. Swap generateContributions() with a
// real GitHub API call in Step 04 without changing the UI.
// ============================================================

import { useMemo } from "react"
import type { ContributionLevel, ContributionWeek } from "@/types/portfolio"

const WEEKS = 26
const DAYS_PER_WEEK = 7

/** Mulberry32 — fast seedable PRNG, no dependencies */
function mulberry32(seed: number): () => number {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function toLevel(rand: number): ContributionLevel {
  if (rand < 0.3) return 0
  if (rand < 0.5) return 1
  if (rand < 0.7) return 2
  if (rand < 0.9) return 3
  return 4
}

export function useContributions(seed = 42): {
  weeks: readonly ContributionWeek[]
  total: number
} {
  return useMemo(() => {
    const rand = mulberry32(seed)
    const weeks: ContributionWeek[] = Array.from({ length: WEEKS }, () =>
      Array.from({ length: DAYS_PER_WEEK }, () =>
        toLevel(rand())
      ) as unknown as ContributionWeek
    )
    const total = weeks.flat().reduce((sum, v) => sum + v, 0)
    return { weeks, total }
  }, [seed])
}
