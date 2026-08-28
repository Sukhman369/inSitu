import React from "react"

export default function HeroB() {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] bg-black text-white flex flex-col justify-end overflow-hidden border-b border-insitu-border">
      {/* Fullscreen Background Media */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/model-main.webp"
          alt="Cinematic Campaign Visual"
          className="w-full h-full object-cover object-top filter brightness-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 content-container pb-12 sm:pb-20 pt-32">
        <div className="max-w-2xl">
          <span className="inline-block text-[11px] font-mono tracking-widest text-insitu-green uppercase font-semibold mb-3 px-2 py-0.5 bg-black/40 backdrop-blur-md rounded-[1px] border border-white/10">
            CINEMATIC ARCHIVE 04
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.05]">
            Quiet Form, <br />
            <span className="italic font-light text-white/90">Enduring Substance.</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-4 max-w-lg leading-relaxed">
            Crafted for intentional everyday life. Sourced from generational flax ateliers in Western Europe.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a href="#collection" className="btn-primary">
              EXPLORE COLLECTION
            </a>
            <a
              href="#manifesto"
              className="inline-flex items-center justify-center border border-white/30 text-white text-xs uppercase font-medium tracking-editorial px-8 py-3.5 rounded-[2px] transition-all duration-300 hover:bg-white hover:text-black"
            >
              DISCOVER ATELIER
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
