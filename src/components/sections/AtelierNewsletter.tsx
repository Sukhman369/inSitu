"use client"

import React, { useState } from "react"

export default function AtelierNewsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
    }
  }

  return (
    <section id="newsletter" className="w-full bg-insitu-sand/50 py-20 sm:py-28 border-b border-insitu-border">
      <div className="editorial-container text-center max-w-xl mx-auto">
        
        <span className="text-[10px] font-mono tracking-widest text-insitu-green uppercase font-semibold block mb-3">
          PRIVATE ARCHIVE ACCESS
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl text-insitu-charcoal font-normal">
          Join the Atelier Journal
        </h2>

        <p className="text-xs sm:text-sm text-insitu-muted font-sans mt-3 leading-relaxed">
          Receive private invitations to numbered capsule releases, material essays, and seasonal lookbook previews.
        </p>

        {subscribed ? (
          <div className="mt-8 p-4 bg-white border border-insitu-border text-xs font-mono text-insitu-green">
            THANK YOU. YOU ARE NOW ON THE PRIVATE ATELIER LIST ✓
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white border border-insitu-border text-xs text-insitu-charcoal placeholder:text-insitu-muted focus:outline-none focus:border-insitu-charcoal rounded-[2px]"
            />
            <button type="submit" className="btn-primary py-3 px-8 text-xs">
              REQUEST ACCESS
            </button>
          </form>
        )}

      </div>
    </section>
  )
}
