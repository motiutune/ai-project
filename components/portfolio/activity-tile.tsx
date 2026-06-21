"use client"

// ============================================================
// AI Reasoning Log: Real GitHub data via API Route
// Previously used a seeded PRNG for SSR-safe fake data.
// Now fetches from /api/github (server-side token handling)
// so GITHUB_TOKEN is never exposed to the client bundle.
// Falls back to empty state gracefully if fetch fails.
// ============================================================

import { useEffect, useState } from "react"

interface ContributionDay {
  contributionCount: number
  date: string
}

interface ContributionWeek {
  contributionDays: ContributionDay[]
}

interface CalendarData {
  totalContributions: number
  weeks: ContributionWeek[]
}

const LEVEL_CLASSES = [
  "bg-muted/30",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/60",
  "bg-primary/90",
] as const

function countToLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0
  if (count <= 2)  return 1
  if (count <= 5)  return 2
  if (count <= 9)  return 3
  return 4
}

export function ActivityTile() {
  const [calendar, setCalendar] = useState<CalendarData | null>(null)
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(false)

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed")
        return res.json()
      })
      .then((data: CalendarData) => {
        setCalendar(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  // 直近26週だけ表示
  const weeks = calendar?.weeks.slice(-26) ?? []

  return (
    <div className="h-full flex flex-col p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
          Activity
        </h3>
        <span className="text-xs text-muted-foreground font-mono">
          {loading && "Loading..."}
          {error && "Failed to load"}
          {calendar && `${calendar.totalContributions} contributions`}
        </span>
      </div>

      <div className="flex-1 flex items-center">
        <div className="w-full overflow-hidden">
          {loading && (
            <div className="flex gap-[3px]">
              {Array.from({ length: 26 }).map((_, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, di) => (
                    <div key={di} className="w-[10px] h-[10px] rounded-[2px] bg-muted/20 animate-pulse" />
                  ))}
                </div>
              ))}
            </div>
          )}

          {!loading && !error && (
            <div className="flex gap-[3px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.contributionDays.map((day, di) => (
                    <div
                      key={di}
                      className={`w-[10px] h-[10px] rounded-[2px] ${LEVEL_CLASSES[countToLevel(day.contributionCount)]} transition-colors duration-200 hover:ring-1 hover:ring-primary/50`}
                      title={`${day.date}: ${day.contributionCount} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}

          {error && (
            <p className="text-xs text-muted-foreground font-mono">
              GitHub data unavailable
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-end gap-1 mt-4 text-xs text-muted-foreground">
        <span>Less</span>
        {LEVEL_CLASSES.map((cls, i) => (
          <div key={i} className={`w-[10px] h-[10px] rounded-[2px] ${cls}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}
