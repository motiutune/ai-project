"use client"

// ============================================================
// AI Reasoning Log: Extract typewriter to a custom hook
// v0 embedded all timing logic directly in HeroTile.
// Extracting to useTypewriter makes the effect unit-testable
// and reusable across components (e.g. CommandPalette hints).
// ============================================================

import { useState, useEffect, useCallback } from "react"

interface UseTypewriterOptions {
  readonly words: readonly string[]
  readonly typeSpeed?: number
  readonly deleteSpeed?: number
  readonly pauseMs?: number
}

interface UseTypewriterReturn {
  readonly displayText: string
  readonly isDeleting: boolean
  readonly currentIndex: number
}

export function useTypewriter({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseMs = 2000,
}: UseTypewriterOptions): UseTypewriterReturn {
  const [displayText, setDisplayText] = useState<string>("")
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isPausing, setIsPausing] = useState<boolean>(false)

  const tick = useCallback(() => {
    if (isPausing) return

    const current = words[currentIndex]

    if (!isDeleting) {
      if (displayText.length < current.length) {
        setDisplayText(current.slice(0, displayText.length + 1))
      } else {
        setIsPausing(true)
        setTimeout(() => {
          setIsPausing(false)
          setIsDeleting(true)
        }, pauseMs)
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1))
      } else {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % words.length)
      }
    }
  }, [displayText, isDeleting, isPausing, currentIndex, words, pauseMs])

  useEffect(() => {
    const delay = isDeleting ? deleteSpeed : typeSpeed
    const id = setTimeout(tick, delay)
    return () => clearTimeout(id)
  }, [tick, isDeleting, typeSpeed, deleteSpeed])

  return { displayText, isDeleting, currentIndex }
}
