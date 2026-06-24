"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { PROJECTS } from "@/constants/portfolio-data"
import type { Project } from "@/types/portfolio"

function ProjectCard({ project }: { readonly project: Project }) {
  const [showArch, setShowArch] = useState(false)

  return (
    <div
      className={`h-full rounded-xl bg-gradient-to-br ${project.gradient} border border-border/50 p-6 flex flex-col relative overflow-hidden`}
      onMouseEnter={() => setShowArch(true)}
      onMouseLeave={() => setShowArch(false)}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-1">{project.period}</p>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-foreground">
            {project.title}
          </h4>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs font-mono rounded-md bg-background/50 text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      {/* ホバーでアーキテクチャ表示 */}
      {project.architecture && (
        <div className={`absolute inset-0 bg-background/90 backdrop-blur-sm p-6 flex flex-col justify-center transition-opacity duration-300 ${showArch ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <p className="text-xs font-mono text-primary mb-2">// Architecture</p>
          <p className="text-sm text-foreground leading-relaxed">{project.architecture}</p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-xs font-mono text-primary hover:underline"
            >
              <ExternalLink className="w-3 h-3" />
              {project.url}
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export function WorksTile() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi])

  return (
    <div className="h-full flex flex-col p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
          Service Log
        </h3>
        <div className="flex gap-2">
          <button onClick={scrollPrev} className="p-1.5 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors" aria-label="Previous project">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={scrollNext} className="p-1.5 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors" aria-label="Next project">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {PROJECTS.map((project) => (
            <div key={project.title} className="flex-[0_0_100%] min-w-0 h-full px-1">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {PROJECTS.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${idx === selectedIndex ? "bg-primary" : "bg-muted"}`}
            onClick={() => emblaApi?.scrollTo(idx)}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
