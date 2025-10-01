"use client"

export function CyberpunkGrid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1d684f_1px,transparent_1px),linear-gradient(to_bottom,#1d684f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] animate-grid-flow" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-accent/30 animate-pulse" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-accent/30 animate-pulse animation-delay-1000" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-accent/30 animate-pulse animation-delay-2000" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-accent/30 animate-pulse animation-delay-3000" />
    </div>
  )
}
