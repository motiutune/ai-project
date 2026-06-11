"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "DevDash",
    description: "Real-time developer analytics dashboard with customizable widgets",
    tags: ["Next.js", "TypeScript", "D3.js"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "CodeSync",
    description: "Collaborative code editor with live cursors and video chat",
    tags: ["React", "WebRTC", "Yjs"],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "APIForge",
    description: "Visual API builder with automatic documentation generation",
    tags: ["Node.js", "OpenAPI", "React"],
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "DeployBot",
    description: "CI/CD automation tool with Slack integration",
    tags: ["Go", "Docker", "Kubernetes"],
    gradient: "from-green-500/20 to-emerald-500/20"
  }
]

export function WorksTile() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true })
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

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
          Works
        </h3>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="p-1.5 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            className="p-1.5 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex-[0_0_100%] min-w-0 h-full px-1"
            >
              <div className={`h-full rounded-xl bg-gradient-to-br ${project.gradient} border border-border/50 p-6 flex flex-col`}>
                <div className="flex items-start justify-between">
                  <h4 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-foreground">
                    {project.title}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </div>
                <p className="text-sm text-muted-foreground mt-2 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono rounded-md bg-background/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === selectedIndex ? "bg-primary" : "bg-muted"
            }`}
            onClick={() => emblaApi?.scrollTo(idx)}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
