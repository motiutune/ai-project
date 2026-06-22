"use client"

import { useState } from "react"

const AI_LOG = [
  {
    tool:    "Claude",
    role:    "設計・コード改善・TS化",
    detail:  "型定義・カスタムフック・アーキテクチャ設計を担当。v0のコードをプロ品質に昇華。",
    color:   "text-[#38B6FF]",
    border:  "border-[#38B6FF]/30",
    bg:      "bg-[#38B6FF]/5",
  },
  {
    tool:    "v0",
    role:    "UIコンポーネント生成",
    detail:  "Bento Gridレイアウト・全タイルのUIをプロンプトから一気に生成。",
    color:   "text-[#7C6FFF]",
    border:  "border-[#7C6FFF]/30",
    bg:      "bg-[#7C6FFF]/5",
  },
  {
    tool:    "Gemini",
    role:    "デザイン提案",
    detail:  "カラーパレット・フォント・コンセプト設計を提案。Deep Systemの世界観を定義。",
    color:   "text-[#00C49A]",
    border:  "border-[#00C49A]/30",
    bg:      "bg-[#00C49A]/5",
  },
  {
    tool:    "ChatGPT",
    role:    "構成設計・実装アドバイス",
    detail:  "サイト構成・開発ルート・技術スタック選定をアドバイス。企画の方向性を整理。",
    color:   "text-[#FF9F45]",
    border:  "border-[#FF9F45]/30",
    bg:      "bg-[#FF9F45]/5",
  },
  {
    tool:    "GitHub",
    role:    "バージョン管理",
    detail:  "制作プロセスをコミットとして記録。開発の証跡をそのままコンテンツ化。",
    color:   "text-[#F0F4FF]",
    border:  "border-white/20",
    bg:      "bg-white/5",
  },
  {
    tool:    "Vercel",
    role:    "デプロイ",
    detail:  "GitHubと連携して自動デプロイ。pushするだけで本番反映。",
    color:   "text-[#F0F4FF]",
    border:  "border-white/20",
    bg:      "bg-white/5",
  },
] as const

export function AiLogTile() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex items-center gap-2 mb-3">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-foreground">
          AI Build Log
        </h3>
        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
          Live
        </span>
      </div>

      <div className="flex-1 flex flex-col gap-1.5 overflow-hidden">
        {AI_LOG.map((entry, idx) => (
          <div key={entry.tool}>
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className={`w-full flex items-center gap-2 font-mono text-xs px-2 py-1.5 rounded-lg border transition-all duration-200 ${
                openIdx === idx
                  ? `${entry.border} ${entry.bg}`
                  : "border-transparent hover:border-border/50 hover:bg-muted/20"
              }`}
            >
              <span className="text-muted-foreground select-none">&gt;</span>
              <span className={`font-medium min-w-[60px] text-left ${entry.color}`}>
                {entry.tool}
              </span>
              <span className="text-muted-foreground">—</span>
              <span className="text-foreground/70 text-left flex-1 truncate">{entry.role}</span>
              <span className={`text-muted-foreground transition-transform duration-200 ${openIdx === idx ? "rotate-90" : ""}`}>
                ›
              </span>
            </button>

            {/* 詳細展開 */}
            <div className={`overflow-hidden transition-all duration-200 ${openIdx === idx ? "max-h-12 opacity-100" : "max-h-0 opacity-0"}`}>
              <p className="font-mono text-[10px] text-muted-foreground px-6 py-1 leading-relaxed">
                {entry.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] font-mono text-muted-foreground mt-2 border-t border-border/50 pt-2">
        // AIだけでWebサイトはどこまで作れるのか検証中
      </p>
    </div>
  )
}
