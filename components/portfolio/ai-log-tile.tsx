"use client"

// ============================================================
// AI Reasoning Log: AI Build Log Tile
// This tile communicates the core concept of the project:
// "How far can AI build a website?" — each tool's role is
// shown as a log entry, reinforcing the TikTok narrative.
// ============================================================

const AI_LOG = [
  { tool: "Claude",  role: "設計・コード改善・TS化",      color: "text-[#38B6FF]" },
  { tool: "v0",      role: "UIコンポーネント生成",          color: "text-[#7C6FFF]" },
  { tool: "Gemini",  role: "デザイン提案",                  color: "text-[#00C49A]" },
  { tool: "ChatGPT", role: "構成設計・実装アドバイス",      color: "text-[#FF9F45]" },
  { tool: "GitHub",  role: "バージョン管理",                color: "text-[#F0F4FF]" },
  { tool: "Vercel",  role: "デプロイ",                      color: "text-[#F0F4FF]" },
] as const

export function AiLogTile() {
  return (
    <div className="h-full flex flex-col p-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
          AI Build Log
        </h3>
        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
          Live
        </span>
      </div>

      <div className="flex-1 flex flex-col gap-2 overflow-hidden">
        {AI_LOG.map((entry, idx) => (
          <div
            key={entry.tool}
            className="flex items-center gap-3 font-mono text-xs"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <span className="text-muted-foreground select-none">&gt;</span>
            <span className={`font-medium min-w-[72px] ${entry.color}`}>
              {entry.tool}
            </span>
            <span className="text-muted-foreground">—</span>
            <span className="text-foreground/80">{entry.role}</span>
          </div>
        ))}
      </div>

      <p className="text-[10px] font-mono text-muted-foreground mt-4 border-t border-border/50 pt-3">
        // AIだけでWebサイトはどこまで作れるのか検証中
      </p>
    </div>
  )
}
