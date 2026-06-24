import type {
  SkillNode,
  SkillEdge,
  Project,
  TechItem,
  ContactLink,
} from "@/types/portfolio"

export const ROLES = [
  "Web Engineer",
  "AI-Powered Developer",
  "Next.js Developer",
  "TypeScript Enthusiast",
  "Building with AI",
] as const

export const SKILL_NODES: readonly SkillNode[] = [
  { id: "next",    label: "Next.js",    x: 50, y: 28, size: "lg", level: "core"       },
  { id: "ts",      label: "TypeScript", x: 22, y: 55, size: "md", level: "core"       },
  { id: "js",      label: "JavaScript", x: 78, y: 55, size: "md", level: "core"       },
  { id: "node",    label: "Node.js",    x: 12, y: 82, size: "sm", level: "proficient" },
  { id: "v0",      label: "v0",         x: 35, y: 82, size: "sm", level: "proficient" },
  { id: "claude",  label: "Claude",     x: 55, y: 82, size: "sm", level: "proficient" },
  { id: "github",  label: "GitHub",     x: 78, y: 82, size: "sm", level: "proficient" },
] as const

export const SKILL_EDGES: readonly SkillEdge[] = [
  { from: "next",   to: "ts"     },
  { from: "next",   to: "js"     },
  { from: "ts",     to: "node"   },
  { from: "ts",     to: "v0"     },
  { from: "js",     to: "claude" },
  { from: "next",   to: "github" },
] as const

export const PROJECTS: readonly Project[] = [
  {
    title:        "HackerTypinger",
    description:  "タイピングゲーム。ハッカー気分でコードをタイピングできるWebアプリ。",
    tags:         ["TypeScript", "Next.js", "Vercel"],
    gradient:     "from-blue-500/20 to-cyan-500/20",
    period:       "2025",
    url:          "https://hackertypinger.com/",
    architecture: "Next.js App Router + Vercel デプロイ。独自ドメイン取得済み。",
  },
] as const

export const TECH_STACK: readonly TechItem[] = [
  { name: "Next.js",    icon: "▲"  },
  { name: "TypeScript", icon: "📘" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Node.js",    icon: "🟢" },
  { name: "v0",         icon: "⚡" },
  { name: "Claude",     icon: "🤖" },
  { name: "Gemini",     icon: "✨" },
  { name: "ChatGPT",    icon: "💬" },
  { name: "GitHub",     icon: "🐙" },
  { name: "Vercel",     icon: "▲"  },
] as const

export const CONTACT_LINKS: readonly ContactLink[] = [
  { label: "GitHub", href: "https://github.com/motiutune",              type: "github"  },
  { label: "X",      href: "https://x.com/kouteipenguinAI",            type: "twitter" },
] as const
