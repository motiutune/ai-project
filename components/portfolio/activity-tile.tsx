"use client"

// Generate placeholder contribution data
function generateContributions() {
  const weeks = 52
  const days = 7
  const contributions: number[][] = []
  
  for (let w = 0; w < weeks; w++) {
    const week: number[] = []
    for (let d = 0; d < days; d++) {
      // Random contribution levels 0-4
      const rand = Math.random()
      if (rand < 0.3) week.push(0)
      else if (rand < 0.5) week.push(1)
      else if (rand < 0.7) week.push(2)
      else if (rand < 0.9) week.push(3)
      else week.push(4)
    }
    contributions.push(week)
  }
  return contributions
}

const contributions = generateContributions()

const levelColors = [
  "bg-muted/30",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/60",
  "bg-primary/90"
]

export function ActivityTile() {
  const totalContributions = contributions.flat().reduce((a, b) => a + b, 0) * 3

  return (
    <div className="h-full flex flex-col p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
          Activity
        </h3>
        <span className="text-xs text-muted-foreground font-mono">
          {totalContributions} contributions
        </span>
      </div>
      
      <div className="flex-1 flex items-center">
        <div className="w-full overflow-hidden">
          <div className="flex gap-[3px]">
            {contributions.slice(-26).map((week, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-[3px]">
                {week.map((level, dayIdx) => (
                  <div
                    key={dayIdx}
                    className={`w-[10px] h-[10px] rounded-[2px] ${levelColors[level]} transition-colors duration-200 hover:ring-1 hover:ring-primary/50`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-1 mt-4 text-xs text-muted-foreground">
        <span>Less</span>
        {levelColors.map((color, i) => (
          <div key={i} className={`w-[10px] h-[10px] rounded-[2px] ${color}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}
