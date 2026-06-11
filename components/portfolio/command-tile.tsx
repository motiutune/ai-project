"use client"

// ============================================================
// AI Reasoning Log: CommandTile now opens a real palette
// v0 rendered a static hint with no interaction. We wire it to
// a keyboard shortcut (Cmd/Ctrl+K) and a click handler that
// opens a cmdk-based palette — the #1 differentiator from the
// design brief. Actions are typed via CommandAction interface.
// ============================================================

import { useEffect, useState, useCallback } from "react"
import { Command } from "lucide-react"
import type { CommandAction } from "@/types/portfolio"

const ACTIONS: readonly CommandAction[] = [
  {
    id: "works",
    label: "View Works",
    description: "Browse project history",
    shortcut: "W",
    action: () => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "skills",
    label: "View Skills",
    description: "Explore capability graph",
    shortcut: "S",
    action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "contact",
    label: "Contact",
    description: "Open contact links",
    shortcut: "C",
    action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "github",
    label: "Open GitHub",
    description: "View source code",
    action: () => window.open("https://github.com", "_blank"),
  },
] as const

export function CommandTile() {
  const [open, setOpen] = useState(false)
  const [query, setQuery]   = useState("")

  const toggle = useCallback(() => {
    setOpen((v) => !v)
    setQuery("")
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        toggle()
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [toggle])

  const filtered = ACTIONS.filter(
    (a) =>
      query === "" ||
      a.label.toLowerCase().includes(query.toLowerCase()) ||
      a.description?.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <button
        onClick={toggle}
        className="h-full w-full flex items-center justify-center p-6 group"
        aria-label="Open command palette"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-muted/30 border border-border/50 group-hover:border-primary/50 transition-colors">
            <Command className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">K</span>
          </div>
          <span className="text-sm text-muted-foreground">to navigate</span>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-background/80 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <Command className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none font-mono"
              />
              <kbd className="text-xs font-mono text-muted-foreground bg-muted/30 px-1.5 py-0.5 rounded">ESC</kbd>
            </div>
            <ul className="p-2 max-h-64 overflow-y-auto">
              {filtered.map((action) => (
                <li key={action.id}>
                  <button
                    onClick={() => { action.action(); setOpen(false) }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-muted/40 transition-colors text-left group"
                  >
                    <div>
                      <p className="text-sm text-foreground">{action.label}</p>
                      {action.description && (
                        <p className="text-xs text-muted-foreground">{action.description}</p>
                      )}
                    </div>
                    {action.shortcut && (
                      <kbd className="text-xs font-mono text-muted-foreground bg-muted/30 px-1.5 py-0.5 rounded">
                        {action.shortcut}
                      </kbd>
                    )}
                  </button>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="px-3 py-4 text-sm text-muted-foreground text-center font-mono">
                  No results for &ldquo;{query}&rdquo;
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
