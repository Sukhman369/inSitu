"use client"

import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { PALETTES, DEFAULT_PALETTE_ID } from "@/lib/data/palettes"

interface PaletteStudioProps {
  isOpen: boolean
  onClose: () => void
}

export default function PaletteStudio({ isOpen, onClose }: PaletteStudioProps) {
  const [activePalette, setActivePalette] = useState<string>(DEFAULT_PALETTE_ID)
  const [copied, setCopied] = useState(false)

  const applyPalette = (paletteId: string) => {
    const selected = PALETTES.find((p) => p.id === paletteId)
    if (!selected) return

    const root = document.documentElement
    Object.entries(selected.variables).forEach(([key, val]) => {
      root.style.setProperty(key, val)
      // Also map backward-compatible --snoov- prefix so legacy components work seamlessly
      const legacyKey = key.replace("--insitu-", "--snoov-")
      root.style.setProperty(legacyKey, val)
    })

    setActivePalette(paletteId)
    if (typeof window !== "undefined") {
      localStorage.setItem("insitu_palette", paletteId)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("insitu_palette")
      if (saved && PALETTES.some((p) => p.id === saved)) {
        applyPalette(saved)
      } else {
        applyPalette(DEFAULT_PALETTE_ID)
      }
    }
  }, [])

  const currentPalette = PALETTES.find((p) => p.id === activePalette) || PALETTES[0]

  const handleCopyChoice = () => {
    const text = `/* inSitu Chosen Palette: ${currentPalette.name} */\n:root {\n${Object.entries(
      currentPalette.variables
    )
      .map(([k, v]) => `  ${k}: ${v};`)
      .join("\n")}\n}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

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
              LIVE COLOR PALETTE STUDIO
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-insitu-charcoal font-normal mt-0.5">
              Select Brand Color Direction
            </h2>
            <p className="text-xs text-insitu-muted mt-1 font-sans">
              Click any palette below to instantly preview the entire application live with zero reload.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 ml-4">
            <button
              onClick={onClose}
              className="btn-primary py-2 px-3.5 text-[10px]"
            >
              APPLY & EXPLORE
            </button>
            <button
              onClick={onClose}
              className="px-2.5 py-1.5 border border-insitu-border hover:border-insitu-charcoal bg-white/50 hover:bg-white text-insitu-charcoal font-mono text-[11px] uppercase tracking-wider rounded-[2px] transition-all flex items-center gap-1 shadow-2xs active:scale-95"
              aria-label="Close modal"
              title="Close modal (Esc)"
            >
              <span>✕</span>
              <span className="hidden sm:inline text-[10px] text-insitu-muted">ESC</span>
            </button>
          </div>
        </div>

        {/* Palettes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {PALETTES.map((palette) => {
            const isSelected = activePalette === palette.id
            return (
              <div
                key={palette.id}
                onClick={() => applyPalette(palette.id)}
                className={clsx(
                  "p-4 rounded-[2px] border cursor-pointer transition-all duration-200 relative flex flex-col justify-between",
                  isSelected
                    ? "bg-white border-insitu-charcoal ring-2 ring-insitu-charcoal shadow-md"
                    : "bg-insitu-sand/40 border-insitu-border hover:border-insitu-charcoal/60 hover:bg-white"
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[9px] font-mono tracking-widest uppercase font-semibold text-insitu-green">
                      {palette.tag}
                    </span>
                    {isSelected && (
                      <span className="text-[9px] font-mono text-white bg-insitu-charcoal px-1.5 py-0.5 rounded-[1px] uppercase font-bold">
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-base text-insitu-charcoal font-semibold">
                    {palette.name}
                  </h3>
                  <p className="text-[10px] font-mono text-insitu-muted uppercase tracking-wider mb-2">
                    {palette.subtitle}
                  </p>
                  <p className="text-xs text-insitu-muted leading-relaxed font-sans line-clamp-2">
                    {palette.description}
                  </p>
                </div>

                {/* Color Swatches */}
                <div className="mt-4 pt-3 border-t border-insitu-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-5 h-5 rounded-full border border-black/20 shadow-sm"
                      style={{ backgroundColor: palette.variables["--insitu-primary"] }}
                      title={`Primary: ${palette.variables["--insitu-primary"]}`}
                    />
                    <div
                      className="w-5 h-5 rounded-full border border-black/20 shadow-sm"
                      style={{ backgroundColor: palette.variables["--insitu-canvas"] }}
                      title={`Canvas: ${palette.variables["--insitu-canvas"]}`}
                    />
                    <div
                      className="w-5 h-5 rounded-full border border-black/20 shadow-sm"
                      style={{ backgroundColor: palette.variables["--insitu-sand"] }}
                      title={`Sand: ${palette.variables["--insitu-sand"]}`}
                    />
                    <div
                      className="w-5 h-5 rounded-full border border-black/20 shadow-sm"
                      style={{ backgroundColor: palette.variables["--insitu-charcoal"] }}
                      title={`Text: ${palette.variables["--insitu-charcoal"]}`}
                    />
                  </div>

                  <span className="text-[10px] font-mono font-medium text-insitu-charcoal uppercase underline">
                    {isSelected ? "Selected ✓" : "Preview →"}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-insitu-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-insitu-muted font-sans">
            Active: <strong className="text-insitu-charcoal">{currentPalette.name}</strong>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopyChoice}
              className="flex-1 sm:flex-none btn-secondary py-2.5 text-[11px]"
            >
              {copied ? "COPIED CSS TOKENS ✓" : "COPY CSS TOKENS"}
            </button>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none btn-primary py-2.5 text-[11px]"
            >
              KEEP & EXPLORE
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
