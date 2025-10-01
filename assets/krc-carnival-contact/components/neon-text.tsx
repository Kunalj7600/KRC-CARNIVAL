"use client"

import { cn } from "@/lib/utils"

interface NeonTextProps {
  text: string
  className?: string
}

export function NeonText({ text, className }: NeonTextProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative z-10 text-accent drop-shadow-[0_0_15px_rgba(121,199,179,0.8)]">{text}</span>
      <span className="absolute top-0 left-0 text-accent opacity-50 blur-sm" aria-hidden="true">
        {text}
      </span>
    </div>
  )
}
