"use client"

import { useState } from "react"
import { contact } from "@/lib/contact"
import { ChevronDown, ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const householdRoles = [
  { label: 'House Helpers', body: 'General household assistance: cleaning, errands, day-to-day home management. Full-time or part-time.' },
  { label: 'Cooks', body: 'Meal preparation for families. Able to follow dietary preferences and cooking styles on request.' },
  { label: 'Cleaners', body: 'Dedicated cleaning staff for regular or one-off deep cleans.' },
  { label: 'Nannies', body: 'Childcare support for working parents. Screened for safety and reliability.' },
  { label: 'Care Support', body: 'Assistance for elderly or family members who need daily support at home.' },
]

const businessRoles = [
  { label: 'Hotels & Lodges', body: 'Housekeeping, laundry and general facility staff for hospitality properties.' },
  { label: 'Hospitals', body: 'Cleaning and support staff trained for healthcare environment standards.' },
  { label: 'Schools & Hostels', body: 'Caretaking, cleaning and general support for educational and residential institutions.' },
  { label: 'Offices & Business Areas', body: 'Office cleaners and support staff for commercial premises.' },
  { label: 'Restaurants & Bars', body: 'Kitchen helpers, cleaners and general floor support staff.' },
  { label: 'Banks', body: 'Professional cleaning and premises support for financial institutions.' },
]

export function AudiencesSection() {
  const { ref, isVisible } = useScrollReveal(0.15)
  const [activeTab, setActiveTab] = useState<"households" | "businesses">("households")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleTabChange = (tab: "households" | "businesses") => {
    setActiveTab(tab)
    setOpenIndex(null)
  }

  const currentRoles = activeTab === "households" ? householdRoles : businessRoles

  return (
    <section id="clients" className="bg-[--background] py-24 md:py-32">
      <div className="px-6 md:px-12 lg:px-20 max-w-3xl mx-auto" ref={ref}>
        <div className={`mb-16 pb-5 border-b border-[--border] transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="font-sans text-[11px] uppercase tracking-[0.2em] mb-4 text-[--muted-foreground]">
            Who We Serve
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-balance text-[--foreground]">
            Households and Businesses.
          </h2>
        </div>
        
        <div className={`transition-all duration-700 delay-200 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          
          {/* Tab Bar */}
          <div className="flex items-center gap-8 border-b border-[--border] mb-12">
            <button
              onClick={() => handleTabChange("households")}
              className={`pb-4 font-serif text-xl font-medium transition-colors relative ${
                activeTab === "households" ? "text-[--foreground]" : "text-[--muted-foreground] hover:text-[--foreground]/70"
              }`}
            >
              For Households
              {activeTab === "households" && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[--foreground] shadow-[0_0_10px_rgba(10,45,18,0.5)]" />
              )}
            </button>
            <button
              onClick={() => handleTabChange("businesses")}
              className={`pb-4 font-serif text-xl font-medium transition-colors relative ${
                activeTab === "businesses" ? "text-[--foreground]" : "text-[--muted-foreground] hover:text-[--foreground]/70"
              }`}
            >
              For Businesses
              {activeTab === "businesses" && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[--foreground] shadow-[0_0_10px_rgba(10,45,18,0.5)]" />
              )}
            </button>
          </div>

          {/* Accordion List */}
          <div key={activeTab} className="flex flex-col mb-12 border-t border-[--border]">
            {currentRoles.map((role, i) => {
              const isOpen = openIndex === i
              return (
                <div 
                  key={role.label} 
                  className="accordion-item border-b border-[--border] animate-in slide-in-from-bottom-4 fade-in duration-500 fill-mode-both"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${activeTab}-${i}`}
                    className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
                  >
                    <span className="font-sans text-sm font-medium text-[--foreground] hover:text-[--accent-green] transition-colors duration-300">
                      {role.label}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[--muted-foreground] transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180 text-[--accent-green]" : "rotate-0"
                      }`}
                    />
                  </button>
                  <div
                    id={`accordion-content-${activeTab}-${i}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mb-5" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-sans text-sm text-[--muted-foreground] leading-[1.75] max-w-prose pb-1">
                        {role.body}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="group inline-flex">
            <a 
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                activeTab === "households" 
                  ? "Hello Trusting Hands. I am looking for a worker for my home. Please get in touch." 
                  : "Hello Trusting Hands. I am looking for a worker for my business. Please get in touch."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs font-medium tracking-[0.15em] uppercase border-b border-[--foreground] pb-1 text-[--foreground] flex items-center gap-1 transition-colors hover:text-[--accent-green] hover:border-[--accent-green]"
            >
              {activeTab === "households" ? "Enquire for Households" : "Enquire for Businesses"}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
