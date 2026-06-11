"use client"

const nodes = [
  { id: "react", label: "React", x: 50, y: 30, size: "lg" },
  { id: "ts", label: "TypeScript", x: 25, y: 55, size: "md" },
  { id: "next", label: "Next.js", x: 75, y: 55, size: "md" },
  { id: "node", label: "Node.js", x: 15, y: 80, size: "sm" },
  { id: "tailwind", label: "Tailwind", x: 40, y: 80, size: "sm" },
  { id: "graphql", label: "GraphQL", x: 60, y: 80, size: "sm" },
  { id: "prisma", label: "Prisma", x: 85, y: 80, size: "sm" },
]

const edges = [
  { from: "react", to: "ts" },
  { from: "react", to: "next" },
  { from: "ts", to: "node" },
  { from: "ts", to: "tailwind" },
  { from: "next", to: "graphql" },
  { from: "next", to: "prisma" },
]

const sizeClasses = {
  lg: "w-16 h-16 text-xs",
  md: "w-14 h-14 text-[10px]",
  sm: "w-12 h-12 text-[9px]"
}

export function SkillsTile() {
  return (
    <div className="h-full flex flex-col p-6">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground mb-4">
        Skills Graph
      </h3>
      
      <div className="flex-1 relative">
        {/* SVG for edges */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          {edges.map((edge, idx) => {
            const fromNode = nodes.find(n => n.id === edge.from)!
            const toNode = nodes.find(n => n.id === edge.to)!
            return (
              <line
                key={idx}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="currentColor"
                strokeWidth="1"
                className="text-border"
                strokeDasharray="4 2"
              />
            )
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            className={`absolute ${sizeClasses[node.size as keyof typeof sizeClasses]} rounded-full bg-muted/50 border border-border flex items-center justify-center text-center font-mono text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-default`}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 1
            }}
          >
            {node.label}
          </div>
        ))}
      </div>
    </div>
  )
}
