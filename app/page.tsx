"use client"

import { BentoTile } from "@/components/portfolio/bento-tile"
import { HeroTile } from "@/components/portfolio/hero-tile"
import { ActivityTile } from "@/components/portfolio/activity-tile"
import { TechStackTile } from "@/components/portfolio/tech-stack-tile"
import { WorksTile } from "@/components/portfolio/works-tile"
import { SkillsTile } from "@/components/portfolio/skills-tile"
import { CommandTile } from "@/components/portfolio/command-tile"
import { ContactTile } from "@/components/portfolio/contact-tile"
import { CursorGlow } from "@/components/portfolio/cursor-glow"
import { AiLogTile } from "@/components/portfolio/ai-log-tile"
import { TiktokTile } from "@/components/portfolio/tiktok-tile"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8 lg:p-12 relative overflow-hidden">
      <CursorGlow />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">

          {/* Hero - 2×2 */}
          <BentoTile className="md:col-span-2 md:row-span-2" delay={0}>
            <HeroTile />
          </BentoTile>

          {/* Activity - 2列 */}
          <BentoTile className="lg:col-span-2" delay={0.1}>
            <ActivityTile />
          </BentoTile>

          {/* AI Build Log - 2×2 ★高さ2行に変更 */}
          <BentoTile className="lg:col-span-2 md:row-span-2" delay={0.2}>
            <AiLogTile />
          </BentoTile>

          {/* Tech Stack - 2列 */}
          <BentoTile className="lg:col-span-2" delay={0.3}>
            <TechStackTile />
          </BentoTile>

          {/* Works - 2×2 */}
          <BentoTile className="md:col-span-2 md:row-span-2" delay={0.4}>
            <WorksTile />
          </BentoTile>

          {/* Skills - 2×2 */}
          <BentoTile className="md:col-span-2 lg:col-span-2 md:row-span-2" delay={0.5}>
            <SkillsTile />
          </BentoTile>

          {/* Command */}
          <BentoTile delay={0.6}>
            <CommandTile />
          </BentoTile>

          {/* Contact */}
          <BentoTile delay={0.7}>
            <ContactTile />
          </BentoTile>

          {/* TikTok ★追加 */}
          <BentoTile delay={0.8}>
            <TiktokTile />
          </BentoTile>

        </div>

        <footer className="mt-8 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            Built with AI — Next.js + Tailwind CSS + Claude + v0
          </p>
        </footer>
      </div>
    </main>
  )
}
