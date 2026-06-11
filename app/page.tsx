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

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8 lg:p-12 relative overflow-hidden">
      <CursorGlow />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {/* Hero - Large tile spanning 2 columns and 2 rows */}
          <BentoTile className="md:col-span-2 md:row-span-2" delay={0}>
            <HeroTile />
          </BentoTile>

          {/* Activity - Medium tile spanning 2 columns */}
          <BentoTile className="lg:col-span-2" delay={0.1}>
            <ActivityTile />
          </BentoTile>

          {/* Tech Stack - Spans 2 columns */}
          <BentoTile className="lg:col-span-2" delay={0.2}>
            <TechStackTile />
          </BentoTile>

          {/* Works - Large tile spanning 2 columns and 2 rows */}
          <BentoTile className="md:col-span-2 md:row-span-2" delay={0.3}>
            <WorksTile />
          </BentoTile>

          {/* Skills - Medium tile spanning 2 columns */}
          <BentoTile className="md:col-span-2 lg:col-span-2 md:row-span-2" delay={0.4}>
            <SkillsTile />
          </BentoTile>

          {/* Command - Small tile */}
          <BentoTile delay={0.5}>
            <CommandTile />
          </BentoTile>

          {/* Contact - Small tile */}
          <BentoTile delay={0.6}>
            <ContactTile />
          </BentoTile>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            Built with Next.js + Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  )
}
