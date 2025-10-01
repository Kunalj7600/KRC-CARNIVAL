"use client"

import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className }: GlitchTextProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative z-10 text-foreground">{text}</span>
      <span className="absolute top-0 left-0 text-accent opacity-70 animate-glitch-1" aria-hidden="true">
        {text}
      </span>
      <span className="absolute top-0 left-0 text-primary opacity-70 animate-glitch-2" aria-hidden="true">
        {text}
      </span>
    </div>
  )
}
