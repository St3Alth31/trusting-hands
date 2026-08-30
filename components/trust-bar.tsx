"use client"

import { useEffect, useRef, useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const statements = [
  { eyebrow: "Our Standard", text: "Screened & Verified Workers" },
  { eyebrow: "Flexibility", text: "Full-Time or Part-Time" },
  { eyebrow: "Coverage", text: "Serving All of Malawi" }
]

export function TrustBar() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="bg-[--accent-gold] py-8">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
          {statements.map((stmt, i) => (
            <div 
              key={stmt.text}
              className={`flex-1 md:text-center md:border-r border-[#0A2D12]/15 last:border-0 transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-sans text-[11px] uppercase tracking-[0.2em] mb-2 text-[#0A2D12]">
                {stmt.eyebrow}
              </div>
              <div className="font-sans text-sm font-medium text-[#0A2D12]">
                {stmt.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
