"use client"

import React, { useState, useEffect } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { HERO_MAP } from "@/components/studio/HeroStudio"
import { DEFAULT_HERO_ID, HERO_VARIANTS } from "@/lib/data/heroes"
import BrandManifesto from "@/components/sections/BrandManifesto"
import CuratedGrid from "@/components/sections/CuratedGrid"
import CraftsmanshipPillars from "@/components/sections/CraftsmanshipPillars"
import AtelierNewsletter from "@/components/sections/AtelierNewsletter"

export default function HomeShowcase() {
  const [activeHeroId, setActiveHeroId] = useState<string>(DEFAULT_HERO_ID)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("insitu_hero")
      if (saved && HERO_VARIANTS.some((h) => h.id === saved)) {
        setActiveHeroId(saved)
      }

      const handleHeroChange = (e: Event) => {
        const customEvent = e as CustomEvent<{ id: string }>
        if (customEvent.detail?.id) {
          setActiveHeroId(customEvent.detail.id)
        }
      }

      window.addEventListener("insitu-hero-change", handleHeroChange)
      return () => {
        window.removeEventListener("insitu-hero-change", handleHeroChange)
      }
    }
  }, [])

  const ActiveHero = HERO_MAP[activeHeroId] || HERO_MAP[DEFAULT_HERO_ID]

  return (
    <div className="flex flex-col w-full min-h-screen bg-insitu-canvas">
      {/* 01 — Editorial Navigation Header */}
      <Header />

      {/* 02 — Dynamic Active Hero (Hot-swappable via inSitu Studio) */}
      <ActiveHero />

      {/* 03 — Brand Manifesto */}
      <BrandManifesto />

      {/* 04 — Curated Grid */}
      <CuratedGrid />

      {/* 05 — Craftsmanship & Material Provenance */}
      <CraftsmanshipPillars />

      {/* 06 — Private Atelier Newsletter */}
      <AtelierNewsletter />

      {/* 07 — Luxury Editorial Footer */}
      <Footer />
    </div>
  )
}
