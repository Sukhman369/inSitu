import React from "react"
import { Sparkles, Layers, Palette, Terminal, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-purple-600/15 via-emerald-500/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-xs text-neutral-300 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          inSitu Registry • Initial Architecture Ready
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
          in<span className="text-emerald-400 font-serif italic">Situ</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-neutral-400 font-light leading-relaxed mb-10 max-w-lg">
          The open-source visual design combinator. Preview, hot-swap, and align on 100+ layouts, color palettes, and UI identities in real time.
        </p>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left mb-12">
          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
            <Layers className="w-5 h-5 text-emerald-400 mb-2" />
            <h3 className="text-sm font-semibold text-white">100+ UI Blocks</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Polymorphic heroes, navigation headers, and lookbook grids.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
            <Palette className="w-5 h-5 text-amber-400 mb-2" />
            <h3 className="text-sm font-semibold text-white">Live Design Tokens</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Zero-rebuild CSS variable color stories & typography pairings.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
            <Sparkles className="w-5 h-5 text-purple-400 mb-2" />
            <h3 className="text-sm font-semibold text-white">The Combinator</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Mix and match in real time, copy clean React/Tailwind code.
            </p>
          </div>
        </div>

        {/* Quick Local Run Hint */}
        <div className="w-full p-4 rounded-xl border border-white/10 bg-black/40 text-left font-mono text-xs text-neutral-400">
          <div className="flex items-center gap-2 text-neutral-300 mb-2 font-semibold">
            <Terminal className="w-4 h-4 text-emerald-400" />
            Developer Quickstart:
          </div>
          <p className="text-neutral-500 mb-1"># 1. Install dependencies</p>
          <p className="text-emerald-300 mb-3">npm install</p>
          <p className="text-neutral-500 mb-1"># 2. Run local dev server</p>
          <p className="text-emerald-300">npm run dev</p>
        </div>
      </div>
    </main>
  )
}
