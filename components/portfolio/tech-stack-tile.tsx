"use client"

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "GraphQL", icon: "◈" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Vercel", icon: "▲" },
  { name: "Prisma", icon: "◆" },
  { name: "Redis", icon: "🔴" },
]

export function TechStackTile() {
  const doubledStack = [...techStack, ...techStack]

  return (
    <div className="h-full flex flex-col p-6 overflow-hidden">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground mb-4">
        Tech Stack
      </h3>
      
      <div className="flex-1 flex items-center overflow-hidden">
        <div className="animate-marquee flex gap-4 whitespace-nowrap">
          {doubledStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-sm font-mono text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
