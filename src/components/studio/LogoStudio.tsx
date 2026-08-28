"use client"

import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { LOGO_VARIANTS, DEFAULT_LOGO_ID } from "@/lib/data/logos"

interface LogoStudioProps {
  isOpen: boolean
  onClose: () => void
}

export default function LogoStudio({ isOpen, onClose }: LogoStudioProps) {
  const [activeLogo, setActiveLogo] = useState(DEFAULT_LOGO_ID)
  const [previewDark, setPreviewDark] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("insitu_logo")
      if (saved && LOGO_VARIANTS.some((l) => l.id === saved)) {
        setActiveLogo(saved)
      }
    }
  }, [])

  const handleSelectLogo = (id: string) => {
    setActiveLogo(id)
    if (typeof window !== "undefined") {
      localStorage.setItem("insitu_logo", id)
      window.dispatchEvent(
        new CustomEvent("insitu-logo-change", {
          detail: { id },
        })
      )
    }
  }

  const currentVariant = LOGO_VARIANTS.find((l) => l.id === activeLogo) || LOGO_VARIANTS[0]

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
        <div className="flex items-start justify-between pb-4 border-b border-insitu-border">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-insitu-green uppercase font-semibold">
              BRAND IDENTITY STUDIO
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-insitu-charcoal font-normal mt-0.5">
              Select Brand Logo Direction
            </h2>
            <p className="text-xs text-insitu-muted mt-1 font-sans">
              Choose your preferred logo. It updates live across the header, navigation, and footer in real time.
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
              className="text-insitu-muted hover:text-insitu-charcoal font-mono text-sm p-2"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Preview Background Toggle */}
        <div className="flex items-center justify-between mt-4 py-2 px-3 bg-insitu-sand/60 border border-insitu-border rounded-[2px]">
          <span className="text-[11px] font-mono text-insitu-muted uppercase tracking-wider">
            Preview Canvas:
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPreviewDark(false)}
              className={clsx(
                "px-2.5 py-1 text-[10px] font-mono uppercase rounded-[2px] transition-colors",
                !previewDark
                  ? "bg-white text-insitu-charcoal border border-insitu-border font-semibold shadow-xs"
                  : "text-insitu-muted hover:text-insitu-charcoal"
              )}
            >
              Light Canvas
            </button>
            <button
              onClick={() => setPreviewDark(true)}
              className={clsx(
                "px-2.5 py-1 text-[10px] font-mono uppercase rounded-[2px] transition-colors",
                previewDark
                  ? "bg-insitu-charcoal text-white border border-black font-semibold shadow-xs"
                  : "text-insitu-muted hover:text-insitu-charcoal"
              )}
            >
              Dark Canvas
            </button>
          </div>
        </div>

        {/* Logo Options Grid */}
        <div className="grid grid-cols-1 gap-4 mt-5">
          {LOGO_VARIANTS.map((logo) => {
            const isSelected = activeLogo === logo.id
            const previewImg = previewDark && logo.srcDark ? logo.srcDark : logo.src

            return (
              <div
                key={logo.id}
                onClick={() => handleSelectLogo(logo.id)}
                className={clsx(
                  "p-5 rounded-[2px] border cursor-pointer transition-all duration-300 relative group",
                  isSelected
                    ? "border-insitu-green bg-white shadow-md ring-1 ring-insitu-green"
                    : "border-insitu-border bg-insitu-sand/30 hover:border-insitu-border-dark hover:bg-white"
                )}
              >
                {isSelected && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 bg-insitu-green text-white text-[9px] font-mono uppercase tracking-widest font-semibold rounded-[1px]">
                    ACTIVE LOGO ✓
                  </span>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div
                    className={clsx(
                      "w-full sm:w-48 h-24 flex flex-col items-center justify-center p-3 rounded-[2px] border transition-colors flex-shrink-0",
                      previewDark
                        ? "bg-[#161616] border-[#333]"
                        : logo.src
                        ? "bg-[#FAF7F2] border-insitu-border"
                        : "bg-[#FAF7F2] border-dashed border-insitu-border-dark"
                    )}
                  >
                    {logo.src ? (
                      <img
                        src={previewImg}
                        alt={logo.name}
                        className="max-h-16 max-w-[170px] w-auto h-auto object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-center py-1">
                        <span className="text-base opacity-40 block">∅</span>
                        <span className="text-[10px] font-mono uppercase tracking-widest block font-semibold text-insitu-muted">
                          Negative Space
                        </span>
                        <span className="text-[9px] font-sans text-insitu-muted/70 block mt-0.5">
                          Pure Clean Header
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-insitu-green font-semibold">
                        {logo.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg text-insitu-charcoal font-medium mt-0.5">
                      {logo.name}
                    </h3>

                    <p className="text-xs text-insitu-muted mt-1 leading-relaxed font-sans">
                      {logo.description}
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <span className="text-[10px] font-mono text-insitu-muted">
                        Format:{" "}
                        {logo.src
                          ? logo.src.endsWith(".svg")
                            ? "Crisp Vector SVG"
                            : "High-Res Lossless WebP"
                          : "Pure Negative Space"}
                      </span>
                      <span className="text-insitu-border">•</span>
                      <span className="text-[10px] font-mono font-medium text-insitu-charcoal uppercase underline">
                        {isSelected ? "Current Selection" : "Click to Apply →"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Action */}
        <div className="mt-6 pt-4 border-t border-insitu-border flex items-center justify-between">
          <div className="text-xs text-insitu-muted font-sans">
            Active: <strong className="text-insitu-charcoal">{currentVariant.name}</strong>
          </div>
          <button
            onClick={onClose}
            className="btn-primary py-2 px-6 text-[11px]"
          >
            DONE & EXPLORE
          </button>
        </div>

      </div>
    </div>
  )
}
