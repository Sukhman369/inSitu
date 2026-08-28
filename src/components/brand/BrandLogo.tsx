"use client"

import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { LOGO_VARIANTS, DEFAULT_LOGO_ID } from "@/lib/data/logos"

interface BrandLogoProps {
  variant?: "auto" | "icon" | "gold" | "script" | "custom"
  className?: string
  priority?: boolean
  width?: number
  height?: number
  dark?: boolean
  logoId?: string
  showSubtitle?: boolean
  subtitleText?: string
}

export default function BrandLogo({
  variant = "auto",
  className,
  priority = true,
  width,
  height,
  dark = false,
  logoId: explicitLogoId,
  showSubtitle = false,
  subtitleText = "Studio & Atelier",
}: BrandLogoProps) {
  const [activeLogoId, setActiveLogoId] = useState<string>(explicitLogoId || DEFAULT_LOGO_ID)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (explicitLogoId) {
      setActiveLogoId(explicitLogoId)
      return
    }

    const saved = localStorage.getItem("insitu_logo")
    if (saved && LOGO_VARIANTS.some((l) => l.id === saved)) {
      setActiveLogoId(saved)
    }

    const handleLogoChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>
      if (customEvent.detail?.id) {
        setActiveLogoId(customEvent.detail.id)
      }
    }

    window.addEventListener("insitu-logo-change", handleLogoChange)
    return () => {
      window.removeEventListener("insitu-logo-change", handleLogoChange)
    }
  }, [explicitLogoId])

  if (variant === "icon") {
    return (
      <div className={clsx("relative inline-flex items-center justify-center", className)}>
        <img
          src="/brand/snoov-icon.webp"
          alt="Brand Monogram"
          width={width || 36}
          height={height || 36}
          className="object-contain"
        />
      </div>
    )
  }

  if (variant === "gold") {
    return (
      <div className={clsx("relative inline-flex items-center justify-center", className)}>
        <img
          src="/brand/snoov-logo-gold.webp"
          alt="Brand Atelier"
          width={width || 140}
          height={height || 54}
          className="object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    )
  }

  const logo = LOGO_VARIANTS.find((l) => l.id === activeLogoId) || LOGO_VARIANTS[0]

  if (!logo.src || logo.id === "no-logo-clean") {
    return null
  }

  const imageSrc = dark && logo.srcDark ? logo.srcDark : logo.src
  const finalWidth = width || logo.width
  const finalHeight = height || logo.height

  return (
    <div
      className={clsx(
        "relative inline-flex flex-col items-center justify-center text-center transition-all duration-300",
        className
      )}
    >
      <img
        src={imageSrc}
        alt={logo.name}
        width={finalWidth}
        height={finalHeight}
        className={clsx(
          "object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105",
          mounted ? "opacity-100 scale-100" : "opacity-90"
        )}
        style={{
          maxHeight: height ? `${height}px` : "58px",
          width: "auto",
        }}
      />
      {showSubtitle && (
        <span className="text-[8px] tracking-[0.4em] text-insitu-muted uppercase font-sans font-medium -mt-0.5 group-hover:text-insitu-charcoal transition-colors duration-300">
          {subtitleText}
        </span>
      )}
    </div>
  )
}
