import React from "react"

export default function HeroA() {
  return (
    <section className="relative w-full bg-insitu-canvas pt-6 sm:pt-10 pb-16 sm:pb-24 border-b border-insitu-border">
      <div className="content-container">

        {/* Editorial Subheader */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-insitu-green uppercase font-semibold">
              COLLECTION 04 / SPRING SUMMER 2026
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-insitu-charcoal font-normal tracking-tight mt-1">
              The Architecture of Ease
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-insitu-muted max-w-md font-sans leading-relaxed">
            Tailored restraint, unlined European linen, and fluid proportions designed for quiet confidence and enduring wear.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] max-h-[700px] overflow-hidden rounded-[2px] border border-insitu-border bg-[#161616]">
          <img
            src="/images/model-wide.webp"
            alt="Main Campaign Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-20 bg-white/90 backdrop-blur-md border border-insitu-border p-4 sm:p-6 max-w-[280px] sm:max-w-xs shadow-sm">
            <span className="text-[9px] uppercase tracking-widest font-mono text-insitu-green font-semibold block mb-1">
              SEASONAL EDITORIAL
            </span>
            <p className="font-serif text-sm sm:text-base text-insitu-charcoal leading-snug">
              "A wardrobe refined to pure tactile necessity."
            </p>
            <a
              href="#collection"
              className="inline-flex items-center gap-1.5 text-[10px] tracking-editorial uppercase font-medium text-insitu-charcoal hover:text-insitu-green transition-colors mt-3"
            >
              <span>VIEW LOOKBOOK</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-insitu-border/60">
          <div className="flex items-center gap-4 text-xs font-mono text-insitu-muted">
            <span className="inline-block w-2 h-2 rounded-full bg-insitu-green" />
            <span>LIMITED RUN OF 150 NUMBERED PIECES PER STYLE</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#collection" className="btn-primary">
              EXPLORE COLLECTION
            </a>
            <a href="#manifesto" className="btn-secondary">
              BRAND MANIFESTO
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
