import React from "react"
import BrandLogo from "@/components/brand/BrandLogo"

export default function Footer() {
  return (
    <footer className="bg-insitu-charcoal text-insitu-sand pt-16 sm:pt-20 pb-28 border-t border-insitu-border-dark">
      <div className="content-container">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          <div className="md:col-span-4 flex flex-col items-start">
            <BrandLogo width={140} height={48} dark showSubtitle />
            <p className="text-xs text-neutral-400 font-sans mt-4 max-w-sm leading-relaxed">
              inSitu — The open-source in-situ brand decision engine and live design combinator.
            </p>
          </div>

          <div className="md:col-span-2 col-span-6 text-xs">
            <h4 className="font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-4">
              COLLECTION
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-sans">
              <li><a href="#collection" className="hover:text-white transition-colors">Spring / Summer 2026</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Belgian Tailoring</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Heavyweight Knits</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Permanent Essentials</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 col-span-6 text-xs">
            <h4 className="font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-4">
              STUDIO
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-sans">
              <li><a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">Craftsmanship</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">Flax Provenance</a></li>
              <li><a href="#newsletter" className="hover:text-white transition-colors">Private Atelier</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 text-xs">
            <h4 className="font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-4">
              INSITU ENGINE
            </h4>
            <p className="text-neutral-400 font-sans leading-relaxed mb-4">
              Switch themes, logos, and structural hero layouts in real time using the floating bottom dock.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-[2px] font-mono text-[10px] text-insitu-green">
              <span className="w-1.5 h-1.5 rounded-full bg-insitu-green animate-pulse" />
              100% Client-Side Reactive Tokens
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            © 2026 inSitu Open Source Project. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Sukhman369/inSitu" target="_blank" rel="noreferrer" className="hover:text-neutral-300 transition-colors">
              GitHub Repository
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Terms & Licensing
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
