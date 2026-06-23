"use client"

// ============================================================
// AI Reasoning Log: TikTok CTA Tile
// Dedicated tile for TikTok navigation — pulling it out of
// ContactTile increases click-through by making it the primary
// CTA. Pulsing border draws the eye without being aggressive.
// ============================================================

export function TiktokTile() {
  return (
    <a
      href="https://www.tiktok.com/@kouteipengin1"
      target="_blank"
      rel="noopener noreferrer"
      className="h-full flex flex-col items-center justify-center p-6 gap-3 group"
      aria-label="TikTokを見る"
    >
      {/* TikTokロゴ SVG */}
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted/30 border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-muted-foreground group-hover:fill-primary transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
        </svg>
      </div>

      <div className="text-center">
        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          @kouteipengin1
        </p>
        <p className="text-xs font-mono text-muted-foreground mt-1">
          制作過程を発信中
        </p>
      </div>
    </a>
  )
}
