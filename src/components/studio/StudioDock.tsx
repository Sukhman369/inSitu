"use client"

import React, { useState, useEffect } from "react"
import { Palette, Sparkles, Layers, SlidersHorizontal } from "lucide-react"
import PaletteStudio from "./PaletteStudio"
import LogoStudio from "./LogoStudio"
import HeroStudioModal, { HERO_MAP } from "./HeroStudio"
import { DEFAULT_HERO_ID, HERO_VARIANTS } from "@/lib/data/heroes"

export default function StudioDock() {
  const [activeModal, setActiveModal] = useState<"palette" | "logo" | "hero" | null>(null)
  const [activeHeroId, setActiveHeroId] = useState<string>(DEFAULT_HERO_ID)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedHero = localStorage.getItem("insitu_hero")
      if (savedHero && HERO_VARIANTS.some((h) => h.id === savedHero)) {
        setActiveHeroId(savedHero)
      }
    }
  }, [])

  const handleSelectHero = (id: string) => {
    setActiveHeroId(id)
    if (typeof window !== "undefined") {
      localStorage.setItem("insitu_hero", id)
      window.dispatchEvent(
        new CustomEvent("insitu-hero-change", {
          detail: { id },
        })
      )
    }
  }

  const currentHero = HERO_VARIANTS.find((h) => h.id === activeHeroId) || HERO_VARIANTS[0]

  return (
    <>
      {/* Floating Bottom Control Bar */}
      <div className="fixed bottom-6 inset-x-0 z-40 flex items-center justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2 p-1.5 bg-[#121316]/95 text-white backdrop-blur-xl border border-white/15 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
          
          {/* Brand Tag */}
          <div className="hidden sm:flex items-center gap-2 pl-3 pr-2 border-r border-white/10 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-insitu-green animate-pulse" />
            <span>inSitu Studio</span>
          </div>

          {/* Palette Studio Trigger */}
          <button
            onClick={() => setActiveModal(activeModal === "palette" ? null : "palette")}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium hover:bg-white/10 transition-all text-neutral-200 hover:text-white"
          >
            <Palette className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-mono uppercase tracking-wider">Palettes (14)</span>
          </button>

          {/* Logo Studio Trigger */}
          <button
            onClick={() => setActiveModal(activeModal === "logo" ? null : "logo")}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium hover:bg-white/10 transition-all text-neutral-200 hover:text-white"
          >
            <Sparkles className="w-3.5 h-3.5 text-insitu-green" />
            <span className="text-[11px] font-mono uppercase tracking-wider">Logos (5)</span>
          </button>

          {/* Hero Studio Trigger */}
          <button
            onClick={() => setActiveModal(activeModal === "hero" ? null : "hero")}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-all shadow-sm"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-mono uppercase tracking-wider">
              Hero: {currentHero.id.toUpperCase()}
            </span>
          </button>

        </div>
      </div>

      {/* Palette Studio Modal */}
      <PaletteStudio
        isOpen={activeModal === "palette"}
        onClose={() => setActiveModal(null)}
      />

      {/* Logo Studio Modal */}
      <LogoStudio
        isOpen={activeModal === "logo"}
        onClose={() => setActiveModal(null)}
      />

      {/* Hero Studio Modal */}
      <HeroStudioModal
        isOpen={activeModal === "hero"}
        onClose={() => setActiveModal(null)}
        activeHero={activeHeroId}
        onSelectHero={handleSelectHero}
      />
    </>
  )
}
