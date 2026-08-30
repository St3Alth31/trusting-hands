"use client"

import { Hotel, Trees, Cross, BedDouble, GraduationCap, Building2, Home, Store, UtensilsCrossed, Wine, Landmark } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const services = [
  { label: 'Hotels', icon: Hotel },
  { label: 'Lodges', icon: Trees },
  { label: 'Hospitals', icon: Cross },
  { label: 'Hostels', icon: BedDouble },
  { label: 'Schools', icon: GraduationCap },
  { label: 'Offices', icon: Building2 },
  { label: 'Houses', icon: Home },
  { label: 'Business Areas', icon: Store },
  { label: 'Restaurants', icon: UtensilsCrossed },
  { label: 'Bars', icon: Wine },
  { label: 'Banks', icon: Landmark },
]

export function ServicesSection() {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <section id="services" className="bg-[--background] py-24 md:py-32 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto" ref={ref}>
        <div className={`mb-16 pb-5 border-b border-[--border] transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="font-sans text-[11px] uppercase tracking-[0.2em] mb-4 text-[--muted-foreground]">
            What We Cover
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-balance text-[--foreground]">
            Workers for Every Setting.
          </h2>
        </div>
        
        {/* Antigravity floating grid */}
        <div className="service-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div 
                key={service.label} 
                className={`service-card flex flex-col items-center text-center gap-4 border border-[--accent-green] bg-transparent rounded-[--radius] p-6 transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100 + 100}ms` }}
              >
                <div className="p-3 bg-[--accent-green]/10 rounded-full w-fit">
                  <Icon size={24} className="text-[--accent-green]" strokeWidth={1.5} />
                </div>
                <span className="font-sans text-base font-medium text-[--accent-green]">{service.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
