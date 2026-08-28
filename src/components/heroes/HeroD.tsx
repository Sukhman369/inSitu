import React from "react"

export default function HeroD() {
  return (
    <section className="relative w-full bg-insitu-canvas border-b border-insitu-border pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      <div className="content-container">
        
        {/* Monospaced Meta Header */}
        <div className="flex items-center justify-between pb-6 border-b border-insitu-border/80 text-[10px] font-mono tracking-widest text-insitu-muted uppercase">
          <span>PARIS / MILAN / LONDON</span>
          <span className="text-insitu-green font-semibold">FOUNDATIONAL COLLECTION 04</span>
          <span>LIMITED EDITION</span>
        </div>

        {/* Oversized Fluid Typography Headline */}
        <div className="my-8 sm:my-14">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-insitu-charcoal tracking-tight leading-[0.95] text-left">
            TACTILE <br />
            <span className="italic font-normal ml-6 sm:ml-16 text-insitu-green">ARCHITECTURAL</span> <br />
            RESTRAINT.
          </h1>
        </div>

        {/* Grid Below Typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-insitu-border/80 items-end">
          <div className="col-span-1">
            <p className="text-xs sm:text-sm text-insitu-muted font-sans leading-relaxed">
              An unyielding pursuit of silhouette purity, unlined European linen draping, and deliberate, quiet modern luxury.
            </p>
            <div className="mt-6">
              <a href="#collection" className="btn-primary">
                EXPLORE ARCHIVE →
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 relative aspect-[16/9] sm:aspect-[21/9] rounded-[2px] overflow-hidden border border-insitu-border">
            <img
              src="/images/model-detail.webp"
              alt="Detail Atelier Visual"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
