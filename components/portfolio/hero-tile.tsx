"use client"

import { useTypewriter } from "@/hooks/use-typewriter"
import { ROLES } from "@/constants/portfolio-data"

export function HeroTile() {
  const { displayText } = useTypewriter({ words: ROLES })

  return (
    <div className="h-full flex flex-col justify-center p-8 lg:p-12">
      <div className="space-y-4">
        <p className="text-muted-foreground font-mono text-sm tracking-wider">
          {"// Hello, I'm"}
        </p>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-6xl font-extrabold text-foreground tracking-tight">
          kouteipengin
        </h1>
        <div className="flex items-center gap-2 min-h-[2.5rem]">
          <span className="text-xl lg:text-2xl text-primary font-medium">
            {displayText}
          </span>
          <span className="text-primary text-2xl animate-blink">|</span>
        </div>
        <p className="text-muted-foreground font-light max-w-md leading-relaxed mt-6">
          WebサイトをAIを活用して作成しています。<br />
          AIでどこまで作れるのか、企画から公開まで検証中。
        </p>
      </div>
    </div>
  )
}
