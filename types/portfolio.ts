// ============================================================
// AI Reasoning Log: Why strict types here?
// v0 generated loose string types. We enforce readonly arrays
// and discriminated unions so TypeScript catches data-shape
// bugs at compile time, not at runtime in production.
// ============================================================

export type SkillLevel = "core" | "proficient" | "familiar"
export type TileSize = "lg" | "md" | "sm"
export type ContributionLevel = 0 | 1 | 2 | 3 | 4

export interface SkillNode {
  readonly id: string
  readonly label: string
  readonly x: number
  readonly y: number
  readonly size: TileSize
  readonly level: SkillLevel
}

export interface SkillEdge {
  readonly from: string
  readonly to: string
}

export interface Project {
  readonly title: string
  readonly description: string
  readonly tags: readonly string[]
  readonly gradient: string
  readonly url?: string
  readonly period: string
  readonly architecture?: string
}

export interface TechItem {
  readonly name: string
  readonly icon: string
}

export interface ContactLink {
  readonly label: string
  readonly href: string
  readonly type: "github" | "twitter" | "email"
}

export type ContributionWeek = readonly [
  ContributionLevel,
  ContributionLevel,
  ContributionLevel,
  ContributionLevel,
  ContributionLevel,
  ContributionLevel,
  ContributionLevel
]

export interface CommandAction {
  readonly id: string
  readonly label: string
  readonly description?: string
  readonly shortcut?: string
  readonly action: () => void
}
