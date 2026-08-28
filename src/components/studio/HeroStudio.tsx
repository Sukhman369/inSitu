"use client"

import React, { useState, useEffect } from "react"
import clsx from "clsx"
import HeroA from "@/components/heroes/HeroA"
import HeroB from "@/components/heroes/HeroB"
import HeroC from "@/components/heroes/HeroC"
import HeroD from "@/components/heroes/HeroD"
import HeroE from "@/components/heroes/HeroE"
import HeroF from "@/components/heroes/HeroF"
import HeroG from "@/components/heroes/HeroG"
import { HERO_VARIANTS, DEFAULT_HERO_ID } from "@/lib/data/heroes"

export const HERO_MAP: Record<string, React.ComponentType> = {
  "hero-g": HeroG,
  "hero-a": HeroA,
  "hero-b": HeroB,
  "hero-c": HeroC,
  "hero-d": HeroD,
  "hero-e": HeroE,
  "hero-f": HeroF,
}

interface HeroStudioProps {
  isOpen: boolean
  onClose: () => void
  activeHero: string
  onSelectHero: (id: string) => void
}

export default function HeroStudioModal({
  isOpen,
  onClose,
  activeHero,
  onSelectHero,
}: HeroStudioProps) {
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="bg-insitu-canvas border border-insitu-border max-w-2xl w-full p-6 sm:p-8 rounded-[2px] shadow-2xl max-h-[90vh] overflow-y-auto relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-insitu-border">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-insitu-green uppercase font-semibold">
              HERO BANNER STUDIO
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-insitu-charcoal font-normal mt-0.5">
              Select Hero Layout Architecture
            </h2>
            <p className="text-xs text-insitu-muted mt-1 font-sans">
              Hot-swap between 7 distinct structural layout archetypes in real time.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-insitu-muted hover:text-insitu-charcoal font-mono text-sm p-2"
          >
            ✕
          </button>
        </div>

        {/* Hero Variants List */}
        <div className="grid grid-cols-1 gap-3.5 mt-6">
          {HERO_VARIANTS.map((variant) => {
            const isSelected = activeHero === variant.id
            return (
              <div
                key={variant.id}
                onClick={() => {
                  onSelectHero(variant.id)
                  onClose()
                }}
                className={clsx(
                  "p-4 rounded-[2px] border cursor-pointer transition-all duration-200 flex items-center justify-between group",
                  isSelected
                    ? "bg-white border-insitu-charcoal ring-2 ring-insitu-charcoal shadow-md"
                    : "bg-insitu-sand/40 border-insitu-border hover:border-insitu-charcoal/60 hover:bg-white"
                )}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-base text-insitu-charcoal font-semibold">
                      {variant.label}
                    </h3>
                    {isSelected && (
                      <span className="text-[9px] font-mono text-white bg-insitu-charcoal px-1.5 py-0.5 rounded-[1px] uppercase font-bold">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-insitu-muted mt-1 font-sans">
                    {variant.desc}
                  </p>
                </div>

                <span className="text-[10px] font-mono font-medium text-insitu-charcoal uppercase underline whitespace-nowrap ml-4">
                  {isSelected ? "Selected ✓" : "Activate →"}
                </span>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-insitu-border flex justify-end">
          <button onClick={onClose} className="btn-primary py-2.5 text-[11px]">
            DONE & EXPLORE
          </button>
        </div>

      </div>
    </div>
  )
}
