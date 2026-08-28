import React from "react"

export default function HeroE() {
  return (
    <section className="relative w-full bg-insitu-canvas border-b border-insitu-border py-12 sm:py-20">
      <div className="content-container">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-insitu-green uppercase font-semibold">
              LOOKBOOK SHOWCASE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-insitu-charcoal font-normal mt-1">
              Capsule Edition 04
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a href="#collection" className="btn-primary">
              VIEW LOOKS
            </a>
          </div>
        </div>

        {/* Asymmetric 3-Tile Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          <div className="md:col-span-6 aspect-[4/5] rounded-[2px] overflow-hidden border border-insitu-border relative group">
            <img
              src="/images/model-portrait.webp"
              alt="Lookbook 01"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase text-white">
              LOOK 01 — BELGIAN LINEN BLAZER
            </div>
          </div>

          <div className="md:col-span-6 grid grid-rows-2 gap-4 sm:gap-6">
            <div className="aspect-[16/9] rounded-[2px] overflow-hidden border border-insitu-border relative group">
              <img
                src="/images/model-detail.webp"
                alt="Lookbook 02"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase text-white">
                TEXTILE DETAIL — 100% ORGANIC
              </div>
            </div>

            <div className="aspect-[16/9] rounded-[2px] overflow-hidden border border-insitu-border relative group">
              <img
                src="/images/model-main.webp"
                alt="Lookbook 03"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase text-white">
                LOOK 03 — DOUBLE PLEATED WIDE LEG
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
