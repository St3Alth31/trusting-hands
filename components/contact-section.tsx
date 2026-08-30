"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { contact } from "@/lib/contact"

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="contact" className="bg-[--foreground] py-24 md:py-32">
      <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div ref={ref} className={`mb-16 pb-5 border-b border-[--background]/10 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="font-sans text-[11px] uppercase tracking-[0.2em] mb-4 text-[--background]/40">
            Get in Touch
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-[--background] text-balance">
            We're Ready to Help.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          <div className={`flex flex-col gap-6 max-w-sm transition-all duration-700 delay-100 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a 
              href={`tel:${contact.phone1.replace(/\s+/g, '')}`}
              className="group font-sans text-xl text-[--background] border-b border-[--background]/50 hover:border-[--background] pb-2 flex justify-between items-center transition-colors"
            >
              {contact.phone1}
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
            
            <a 
              href={`tel:${contact.phone2.replace(/\s+/g, '')}`}
              className="group font-sans text-xl text-[--background] border-b border-[--background]/50 hover:border-[--background] pb-2 flex justify-between items-center transition-colors"
            >
              {contact.phone2}
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
            
            <a 
              href={`mailto:${contact.email}`}
              className="group font-sans text-xl text-[--background] border-b border-[--background]/50 hover:border-[--background] pb-2 flex justify-between items-center transition-colors"
            >
              {contact.email}
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
          
          <div className={`flex flex-col justify-end transition-all duration-700 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* WhatsApp enquiries removed as requested */}
          </div>
        </div>
      </div>
    </section>
  )
}
