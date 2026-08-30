"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { contact } from "@/lib/contact"

const stats = [
  { label: "Location", value: "Area 38, Lilongwe" },
  { label: "Service Area", value: "Across Malawi" },
  { label: "Focus", value: "Domestic & Commercial" },
]

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="bg-[--foreground] py-24 md:py-32">
      <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div ref={ref} className={`mb-16 pb-5 border-b border-[--background]/10 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="font-sans text-[11px] uppercase tracking-[0.2em] mb-4 text-[--background]/40">
            About Us
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-[--background] text-balance">
            Rooted in Trust.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          <div className={`flex flex-col max-w-prose transition-all duration-700 delay-100 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-sans text-sm text-[--background]/70 leading-[1.75] mb-6">
              Trusting Hands is a Lilongwe-based domestic worker placement agency. We screen, train and deploy reliable workers to both private households and institutional clients. 
            </p>
            <p className="font-sans text-sm text-[--background]/70 leading-[1.75]">
              Whether you need a house helper for your family or cleaning staff for your hotel, we ensure every worker placed is dependable, professional, and ready to meet your needs. Your home, our priority.
            </p>
          </div>
          
          <div className={`flex flex-col transition-all duration-700 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {stats.map((stat, i) => (
              <div key={stat.label} className="py-6 border-b border-[--background]/10 first:pt-0 flex justify-between items-center">
                <span className="font-sans text-sm font-medium text-[--background]/70">{stat.label}</span>
                <span className="font-serif text-xl text-[--background]">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`mt-24 transition-all duration-700 delay-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="font-sans text-[11px] uppercase tracking-[0.2em] text-[--background]/40">
            {contact.address}
          </div>
        </div>
      </div>
    </section>
  )
}
