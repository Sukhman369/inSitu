import React from "react"

export default function HeroC() {
  return (
    <section className="relative w-full bg-insitu-canvas border-b border-insitu-border">
      <div className="content-container py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Left */}
          <div className="flex flex-col justify-center max-w-xl">
            <span className="text-[11px] font-mono tracking-widest text-insitu-green uppercase font-semibold">
              SPLIT EDITORIAL 01
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-insitu-charcoal font-normal tracking-tight mt-2 leading-[1.1]">
              Garments Designed for Modern Solitude
            </h1>
            <p className="text-xs sm:text-sm text-insitu-muted font-sans mt-4 leading-relaxed">
              Every seam, unlined facing, and horn button is placed with purpose. We reject seasonal churn in favor of permanent foundational wardrobe staples.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a href="#collection" className="btn-primary">
                SHOP RELEASES
              </a>
              <a href="#manifesto" className="btn-secondary">
                THE MANIFESTO
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-insitu-border flex items-center justify-between text-xs font-mono text-insitu-muted">
              <div>
                <span className="block text-insitu-charcoal font-bold">100%</span>
                <span>Traceable Flax</span>
              </div>
              <div className="border-l border-insitu-border pl-6">
                <span className="block text-insitu-charcoal font-bold">150</span>
                <span>Numbered Units</span>
              </div>
              <div className="border-l border-insitu-border pl-6">
                <span className="block text-insitu-charcoal font-bold">0</span>
                <span>Synthetic Blends</span>
              </div>
            </div>
          </div>

          {/* Portrait Right */}
          <div className="relative aspect-[3/4] max-h-[640px] w-full rounded-[2px] overflow-hidden border border-insitu-border bg-[#1A1A1A]">
            <img
              src="/images/model-portrait.webp"
              alt="Portrait Campaign Visual"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 text-[9px] font-mono tracking-widest uppercase text-white rounded-[1px] border border-white/10">
              LOOK 04 — LINEN TAILORING
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
