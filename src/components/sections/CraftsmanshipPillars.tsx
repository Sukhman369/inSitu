import React from "react"
import { Feather, ShieldCheck, RefreshCw } from "lucide-react"

export default function CraftsmanshipPillars() {
  return (
    <section id="pillars" className="w-full bg-insitu-canvas py-20 sm:py-28 border-b border-insitu-border">
      <div className="content-container">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono tracking-widest text-insitu-green uppercase font-semibold">
            METICULOUS MATERIAL PROVENANCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-insitu-charcoal font-normal mt-1">
            Crafted for Generational Longevity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 border border-insitu-border bg-insitu-sand/30 rounded-[2px]">
            <Feather className="w-6 h-6 text-insitu-green mb-4" />
            <h3 className="font-serif text-xl text-insitu-charcoal font-medium">
              100% Belgian Flax Linen
            </h3>
            <p className="text-xs text-insitu-muted font-sans mt-2 leading-relaxed">
              Harvested from certified Western European crops. Grown with natural rainfall, zero irrigation, and minimal carbon footprint.
            </p>
          </div>

          <div className="p-8 border border-insitu-border bg-insitu-sand/30 rounded-[2px]">
            <ShieldCheck className="w-6 h-6 text-insitu-green mb-4" />
            <h3 className="font-serif text-xl text-insitu-charcoal font-medium">
              Numbered Archive Batches
            </h3>
            <p className="text-xs text-insitu-muted font-sans mt-2 leading-relaxed">
              Strictly limited to 150 pieces per silhouette to eliminate overproduction and maintain uncompromising atelier craftsmanship.
            </p>
          </div>

          <div className="p-8 border border-insitu-border bg-insitu-sand/30 rounded-[2px]">
            <RefreshCw className="w-6 h-6 text-insitu-green mb-4" />
            <h3 className="font-serif text-xl text-insitu-charcoal font-medium">
              Lifetime Atelier Repair
            </h3>
            <p className="text-xs text-insitu-muted font-sans mt-2 leading-relaxed">
              We stand behind every seam and button. Complimentary lifetime repair service included with every numbered garment.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
