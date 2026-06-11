import type {
  SkillNode,
  SkillEdge,
  Project,
  TechItem,
  ContactLink,
} from "@/types/portfolio"

// ============================================================
// AI Reasoning Log: Data separated from components
// v0 co-located data inside components. We extract to a
// constants file so components stay pure/presentational and
// data can be swapped (CMS, API) without touching UI logic.
// ============================================================

export const ROLES = [
  "Frontend Engineer",
  "Full-Stack Developer",
  "React Specialist",
  "TypeScript Advocate",
  "UI/UX Enthusiast",
] as const

export const SKILL_NODES: readonly SkillNode[] = [
  { id: "react",      label: "React",      x: 50, y: 28, size: "lg", level: "core"       },
  { id: "ts",         label: "TypeScript", x: 22, y: 55, size: "md", level: "core"       },
  { id: "next",       label: "Next.js",    x: 78, y: 55, size: "md", level: "core"       },
  { id: "node",       label: "Node.js",    x: 12, y: 82, size: "sm", level: "proficient" },
  { id: "tailwind",   label: "Tailwind",   x: 38, y: 82, size: "sm", level: "proficient" },
  { id: "graphql",    label: "GraphQL",    x: 62, y: 82, size: "sm", level: "proficient" },
  { id: "prisma",     label: "Prisma",     x: 88, y: 82, size: "sm", level: "familiar"   },
] as const

export const SKILL_EDGES: readonly SkillEdge[] = [
  { from: "react", to: "ts"       },
  { from: "react", to: "next"     },
  { from: "ts",    to: "node"     },
  { from: "ts",    to: "tailwind" },
  { from: "next",  to: "graphql"  },
  { from: "next",  to: "prisma"   },
] as const

export const PROJECTS: readonly Project[] = [
  {
    title:       "DevDash",
    description: "Real-time developer analytics dashboard with customizable widgets",
    tags:        ["Next.js", "TypeScript", "D3.js"],
    gradient:    "from-blue-500/20 to-cyan-500/20",
    period:      "2025-08",
    architecture: "Next.js App Router + Server Actions + D3.js for SVG rendering",
  },
  {
    title:       "CodeSync",
    description: "Collaborative code editor with live cursors and video chat",
    tags:        ["React", "WebRTC", "Yjs"],
    gradient:    "from-purple-500/20 to-pink-500/20",
    period:      "2025-05",
    architecture: "CRDT (Yjs) for conflict-free edits + WebRTC mesh for P2P video",
  },
  {
    title:       "APIForge",
    description: "Visual API builder with automatic documentation generation",
    tags:        ["Node.js", "OpenAPI", "React"],
    gradient:    "from-orange-500/20 to-red-500/20",
    period:      "2025-02",
    architecture: "AST-based schema parser → OpenAPI 3.1 → React preview renderer",
  },
  {
    title:       "DeployBot",
    description: "CI/CD automation tool with Slack integration",
    tags:        ["Go", "Docker", "Kubernetes"],
    gradient:    "from-green-500/20 to-emerald-500/20",
    period:      "2024-11",
    architecture: "Go webhook server → K8s Job API → Slack Block Kit notifications",
  },
] as const

export const TECH_STACK: readonly TechItem[] = [
  { name: "React",      icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js",    icon: "▲"  },
  { name: "Tailwind",   icon: "🎨" },
  { name: "Node.js",    icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "GraphQL",    icon: "◈"  },
  { name: "Docker",     icon: "🐳" },
  { name: "AWS",        icon: "☁️" },
  { name: "Vercel",     icon: "▲"  },
  { name: "Prisma",     icon: "◆"  },
  { name: "Redis",      icon: "🔴" },
] as const

export const CONTACT_LINKS: readonly ContactLink[] = [
  { label: "GitHub", href: "https://github.com",       type: "github"  },
  { label: "X",      href: "https://x.com",            type: "twitter" },
  { label: "Email",  href: "mailto:hello@example.com", type: "email"   },
] as const
