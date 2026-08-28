import React from "react"

const PRODUCTS = [
  {
    id: "look-01",
    title: "Heavy Boxy Denim Chore Jacket",
    category: "Outerwear",
    price: "$240",
    image: "/images/model-cutout-1.webp",
    fabric: "14oz Japanese Selvedge",
  },
  {
    id: "look-02",
    title: "Deconstructed Flax Linen Blazer",
    category: "Tailoring",
    price: "$380",
    image: "/images/model-cutout-2.webp",
    fabric: "100% Belgian Flax",
  },
  {
    id: "look-03",
    title: "Oversized Graphic Heavyweight Tee",
    category: "Signature Tee",
    price: "$120",
    image: "/images/model-cutout-3.webp",
    fabric: "240 GSM Combed Cotton",
  },
]

export default function CuratedGrid() {
  return (
    <section id="collection" className="w-full bg-insitu-canvas py-20 sm:py-28 border-b border-insitu-border">
      <div className="content-container">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-insitu-green uppercase font-semibold">
              CURATED ESSENTIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-insitu-charcoal font-normal mt-1">
              Capsule Edition 04
            </h2>
          </div>
          <a href="#collection" className="editorial-link text-xs uppercase tracking-editorial font-medium">
            VIEW ALL 18 STYLES →
          </a>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="group flex flex-col bg-insitu-sand/40 border border-insitu-border p-6 rounded-[2px] hover:border-insitu-charcoal/40 transition-all duration-300 hover:bg-white"
            >
              {/* Image Container */}
              <div className="aspect-[3/4] w-full overflow-hidden relative mb-6 bg-white rounded-[2px] border border-insitu-border/80 shadow-sm">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 text-[9px] font-mono uppercase px-2 py-0.5 bg-insitu-canvas border border-insitu-border text-insitu-charcoal">
                  {prod.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="flex items-start justify-between gap-2 mt-auto">
                <div>
                  <h3 className="font-serif text-lg text-insitu-charcoal font-medium">
                    {prod.title}
                  </h3>
                  <p className="text-[11px] font-mono text-insitu-muted mt-0.5">
                    {prod.fabric}
                  </p>
                </div>
                <span className="text-sm font-serif font-semibold text-insitu-charcoal">
                  {prod.price}
                </span>
              </div>

              {/* Add CTA */}
              <button className="mt-5 w-full btn-secondary py-2.5 text-[10px]">
                QUICK VIEW
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
