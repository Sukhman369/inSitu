import React from "react"

export default function HeroF() {
  return (
    <section className="relative w-full bg-[#3E0B13] text-[#FAF8F8] border-b border-[#5E1823] py-16 sm:py-24 overflow-hidden">
      <div className="content-container flex flex-col items-center text-center">
        
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37] mb-3">
          IMPERIAL MAROON VELVET EDITION
        </span>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight max-w-4xl leading-[1.05]">
          A Study in Architectural Saturated Luxury
        </h1>

        <p className="text-xs sm:text-sm text-[#E2C8CC] font-sans max-w-lg mt-6 leading-relaxed">
          Deep imperial tones meet tailored restraint. Handcrafted from heavy organic cottons and rare natural dye extractions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="#collection"
            className="inline-flex items-center justify-center bg-[#D4AF37] text-[#3E0B13] text-xs uppercase font-semibold tracking-editorial px-8 py-3.5 rounded-[2px] transition-all duration-300 hover:bg-[#C59F2D] hover:shadow-md"
          >
            SHOP CAPSULE
          </a>
          <a
            href="#manifesto"
            className="inline-flex items-center justify-center border border-[#7A202E] text-white text-xs uppercase font-medium tracking-editorial px-8 py-3.5 rounded-[2px] transition-all duration-300 hover:bg-white hover:text-black"
          >
            READ STORY
          </a>
        </div>

        <div className="w-full max-w-4xl mt-12 aspect-[16/9] rounded-[2px] overflow-hidden border border-[#5E1823]">
          <img
            src="/images/model-main.webp"
            alt="Maroon Campaign"
            className="w-full h-full object-cover object-top"
          />
        </div>

      </div>
    </section>
  )
}
