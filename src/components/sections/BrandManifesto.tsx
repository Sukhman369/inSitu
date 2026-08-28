import React from "react"

export default function BrandManifesto() {
  return (
    <section id="manifesto" className="w-full bg-insitu-canvas py-20 sm:py-28 border-b border-insitu-border">
      <div className="editorial-container text-center">
        
        <span className="text-[10px] font-mono tracking-widest text-insitu-green uppercase font-semibold block mb-4">
          EDITORIAL MANIFESTO · PILLAR 01
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-insitu-charcoal font-normal tracking-tight max-w-3xl mx-auto leading-[1.15]">
          "We craft garments that quietly command respect through texture, proportion, and endurance."
        </h2>

        <p className="text-xs sm:text-sm text-insitu-muted font-sans max-w-xl mx-auto mt-8 leading-relaxed">
          Rejecting trend cycles in favor of permanent architectural elegance. Every piece in the collection is numbered, traceable, and produced in limited runs of 150 units.
        </p>

        <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-insitu-border max-w-md mx-auto text-xs font-mono text-insitu-muted">
          <div>
            <span className="block text-insitu-charcoal font-bold text-sm">FLAX & WOOL</span>
            <span>100% Organic</span>
          </div>
          <div className="border-l border-insitu-border pl-8">
            <span className="block text-insitu-charcoal font-bold text-sm">ATELIER</span>
            <span>Western Europe</span>
          </div>
          <div className="border-l border-insitu-border pl-8">
            <span className="block text-insitu-charcoal font-bold text-sm">EDITION</span>
            <span>150 Units</span>
          </div>
        </div>

      </div>
    </section>
  )
}
