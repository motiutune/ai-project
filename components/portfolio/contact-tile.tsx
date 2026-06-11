"use client"

import { Github, Mail, ExternalLink } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { CONTACT_LINKS } from "@/constants/portfolio-data"
import type { ContactLink } from "@/types/portfolio"

// TikTokはlucide-reactに未収録のためExternalLinkで代用
const ICON_MAP: Record<ContactLink["type"], LucideIcon> = {
  github:  Github,
  twitter: ExternalLink, // TikTok用
  email:   Mail,
}

export function ContactTile() {
  return (
    <div className="h-full flex flex-col justify-center p-6" id="contact">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground mb-4">
        Connect
      </h3>
      <div className="flex flex-wrap gap-3">
        {CONTACT_LINKS.map((link) => {
          const Icon = ICON_MAP[link.type]
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 group"
            >
              <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                {link.label}
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
