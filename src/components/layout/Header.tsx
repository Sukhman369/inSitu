import React from "react"
import BrandLogo from "@/components/brand/BrandLogo"
import { Search, ShoppingBag, User } from "lucide-react"

export default function Header() {
  return (
    <div className="sticky top-0 inset-x-0 z-40">
      {/* Top Announcement Ribbon */}
      <div className="bg-insitu-charcoal text-insitu-sand py-2 px-4 text-center border-b border-insitu-charcoal/40">
        <div className="content-container flex items-center justify-between text-[11px] font-sans tracking-widest uppercase">
          <span className="hidden sm:inline-block text-insitu-sand/60">
            INSITU ATELIER · ARCHIVE 2026
          </span>
          <span className="mx-auto sm:mx-0 font-medium">
            SPRING / SUMMER 2026 — COMPLIMENTARY WORLDWIDE DELIVERY
          </span>
          <span className="hidden sm:inline-block text-insitu-green font-medium">
            LIVE COMBINATOR ACTIVE
          </span>
        </div>
      </div>

      {/* Main Editorial Header */}
      <header className="relative bg-insitu-canvas/95 backdrop-blur-md border-b border-insitu-border transition-all duration-300">
        <nav className="content-container flex items-center justify-between h-20">
          
          {/* Left Navigation */}
          <div className="flex items-center gap-x-8 flex-1 basis-0 text-xs uppercase tracking-editorial font-medium text-insitu-charcoal">
            <a href="#collection" className="editorial-link py-1">
              Collection
            </a>
            <a href="#manifesto" className="editorial-link py-1 text-insitu-muted hover:text-insitu-charcoal hidden sm:inline-block">
              Manifesto
            </a>
            <a href="#pillars" className="editorial-link py-1 text-insitu-muted hover:text-insitu-charcoal hidden md:inline-block">
              Craftsmanship
            </a>
          </div>

          {/* Center Brand Identity (Dynamic InSitu Logo) */}
          <div className="flex items-center justify-center">
            <a href="#" className="group flex flex-col items-center text-center py-1.5 min-h-[50px] justify-center">
              <BrandLogo width={155} height={52} priority showSubtitle />
            </a>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center justify-end gap-x-6 sm:gap-x-8 flex-1 basis-0 text-xs tracking-editorial uppercase font-medium">
            <a
              href="#search"
              className="hidden md:flex items-center gap-1.5 text-insitu-muted hover:text-insitu-charcoal transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
            </a>

            <a
              href="#account"
              className="hidden sm:flex items-center gap-1 text-insitu-muted hover:text-insitu-charcoal transition-colors"
            >
              <User className="w-3.5 h-3.5" />
              <span>Account</span>
            </a>

            <div className="flex items-center gap-1.5 text-insitu-charcoal font-semibold">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>BAG (0)</span>
            </div>
          </div>

        </nav>
      </header>
    </div>
  )
}
