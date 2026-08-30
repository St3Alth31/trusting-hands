"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function EditorialBreak() {
  const { ref, isVisible } = useScrollReveal(0.3)

  return (
    <section className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden">
      {/* Background image */}
      <div 
        ref={ref}
        className="absolute inset-0 z-0 bg-black"
      >
        <img
          src="/images/image-2.jpg"
          alt="Trusting Hands Workers"
          className="w-full h-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/40"
        />
      </div>

      {/* Content overlay positioned bottom left */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-10">
        <div className="max-w-xs">
          <p className={`font-serif italic text-2xl text-white mb-6 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            "Reliable workers, everywhere."
          </p>
          <p className={`font-sans text-[11px] uppercase tracking-[0.2em] text-white/60 transition-all duration-700 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            — Trusting Hands, Lilongwe
          </p>
        </div>
      </div>
    </section>
  )
}
