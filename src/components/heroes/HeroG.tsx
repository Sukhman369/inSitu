"use client"

import React, { useState } from "react"
import clsx from "clsx"

interface TeamModel {
  id: string
  name: string
  garmentName: string
  category: string
  price: string
  fabric: string
  tag: string
  image: string
  zIndex: number
  details: string[]
}

const TEAM_LINEUP: TeamModel[] = [
  {
    id: "model-1",
    name: "Look 01",
    garmentName: "Heavy Boxy Denim Chore",
    category: "Outerwear",
    price: "$240",
    fabric: "14oz Raw Selvedge Denim",
    tag: "ARCHIVE",
    image: "/images/model-cutout-1.webp",
    zIndex: 10,
    details: ["14oz Japanese Selvedge", "Custom Matte Hardware", "Drop Shoulder Cut"],
  },
  {
    id: "model-2",
    name: "Look 02",
    garmentName: "Deconstructed Linen Blazer",
    category: "Tailoring",
    price: "$380",
    fabric: "100% Belgian Flax Linen",
    tag: "LIMITED RUN",
    image: "/images/model-cutout-2.webp",
    zIndex: 12,
    details: ["Unlined Construction", "Horn Buttons", "Breathable Structure"],
  },
  {
    id: "model-3",
    name: "Look 03",
    garmentName: "Oversized Graphic Heavyweight Tee",
    category: "Signature Tee",
    price: "$120",
    fabric: "240 GSM Organic Combed Cotton",
    tag: "HERO PIECE",
    image: "/images/model-cutout-3.webp",
    zIndex: 30,
    details: ["240 GSM Heavy Weight", "High-Density Screenprint", "Unisex Boxy Fit"],
  },
  {
    id: "model-4",
    name: "Look 04",
    garmentName: "Double-Pleated Wide Leg Pant",
    category: "Tailoring",
    price: "$290",
    fabric: "High-Twist Tropical Wool",
    tag: "BESTSELLER",
    image: "/images/model-cutout-1.webp",
    zIndex: 15,
    details: ["Virgin Wool Blend", "Deep Double Pleats", "Fluid Drape"],
  },
  {
    id: "model-5",
    name: "Look 05",
    garmentName: "Heavyweight Boxy Hoodie",
    category: "Streetwear",
    price: "$220",
    fabric: "450 GSM French Terry",
    tag: "RESTOCKED",
    image: "/images/model-cutout-2.webp",
    zIndex: 10,
    details: ["450 GSM Heavy French Terry", "Double Layer Hood", "Hidden Pocket"],
  },
]

export default function HeroG() {
  const [activeModel, setActiveModel] = useState<TeamModel | null>(null)

  return (
    <section className="relative w-full min-h-[90vh] bg-[#0E0E11] text-white overflow-hidden border-b border-[#222] select-none flex flex-col justify-between">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(45,45,55,0.45),rgba(14,14,17,0.98))]" />
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#0E0E11] via-[#0E0E11]/90 to-transparent z-30" />
      </div>

      {/* Top Status Bar */}
      <div className="relative z-30 content-container pt-6 sm:pt-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-insitu-green animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/70">
            HERO G: INTERACTIVE 3D LINEUP · TAP ANY MODEL
          </span>
        </div>
        <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase hidden sm:block">
          5 RUNWAY LOOKS
        </span>
      </div>

      {/* Center Giant Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="font-serif text-[18vw] font-bold text-white/[0.03] tracking-tighter uppercase select-none leading-none">
          INSITU
        </span>
      </div>

      {/* Interactive Models Lineup Container */}
      <div className="relative z-20 flex-1 flex items-end justify-center w-full max-w-6xl mx-auto px-4 pb-12 sm:pb-16 pt-8">
        <div className="relative w-full h-[520px] sm:h-[620px] flex items-end justify-center">
          {TEAM_LINEUP.map((model, idx) => {
            const isSelected = activeModel?.id === model.id
            const isDimmed = activeModel !== null && !isSelected

            const offsets = [
              "-translate-x-[150%] sm:-translate-x-[180%]",
              "-translate-x-[75%] sm:-translate-x-[90%]",
              "translate-x-0",
              "translate-x-[75%] sm:translate-x-[90%]",
              "translate-x-[150%] sm:translate-x-[180%]",
            ]

            return (
              <div
                key={model.id}
                onClick={() => setActiveModel(isSelected ? null : model)}
                style={{ zIndex: isSelected ? 40 : model.zIndex }}
                className={clsx(
                  "absolute bottom-0 cursor-pointer transition-all duration-500 ease-out origin-bottom flex flex-col items-center group",
                  offsets[idx],
                  isDimmed ? "opacity-30 filter grayscale scale-95" : "opacity-100",
                  isSelected ? "scale-105 filter drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]" : "hover:scale-[1.02]"
                )}
              >
                {/* Product Tag Indicator Pill */}
                <div
                  className={clsx(
                    "mb-2 px-2.5 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase transition-all duration-300 backdrop-blur-md border",
                    isSelected
                      ? "bg-insitu-green text-white border-white/40 shadow-lg scale-110"
                      : "bg-black/60 text-white/80 border-white/10 group-hover:border-white/40 group-hover:bg-black/90"
                  )}
                >
                  {model.name} · {model.price}
                </div>

                {/* Model Cutout Image */}
                <img
                  src={model.image}
                  alt={model.garmentName}
                  className="h-[380px] sm:h-[500px] w-auto object-contain pointer-events-none drop-shadow-2xl"
                />

                {/* Hotspot Pulse Dot */}
                <span
                  className={clsx(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300",
                    isSelected
                      ? "bg-insitu-green border-white scale-125"
                      : "bg-white/40 border-white/80 opacity-0 group-hover:opacity-100"
                  )}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Selected Model Detail Popover Bar */}
      {activeModel && (
        <div className="relative z-30 bg-black/90 backdrop-blur-xl border-t border-white/15 py-4 px-6 animate-fadeIn">
          <div className="content-container flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="px-2 py-0.5 bg-insitu-green text-white text-[9px] font-mono uppercase font-bold rounded-[1px]">
                {activeModel.tag}
              </span>
              <div>
                <h3 className="font-serif text-lg text-white font-medium">
                  {activeModel.garmentName}
                </h3>
                <p className="text-[11px] font-mono text-white/60">
                  {activeModel.fabric} · {activeModel.category}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-base font-serif text-white font-semibold">
                {activeModel.price}
              </span>
              <button
                onClick={() => setActiveModel(null)}
                className="text-xs font-mono text-white/60 hover:text-white px-3 py-1.5 border border-white/10 rounded-[2px]"
              >
                CLOSE [✕]
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
