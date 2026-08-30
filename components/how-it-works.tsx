"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const steps = [
  { number: '01', title: 'Tell Us What You Need', body: 'Let us know your requirements, location, and whether you need full-time or part-time support.' },
  { number: '02', title: 'We Match and Screen', body: 'We select the right candidate from our trained network and ensure all background checks are clear.' },
  { number: '03', title: 'Your Worker Is Deployed', body: 'Your matched worker arrives ready to integrate into your home or business environment smoothly.' },
]

export function HowItWorks() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="how" className="bg-[--muted] py-24 md:py-32">
      <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div ref={ref} className={`mb-16 pb-5 border-b border-[--border] transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="font-sans text-[11px] uppercase tracking-[0.2em] mb-4 text-[--muted-foreground]">
            Our Process
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-balance">
            Simple. Reliable. Fast.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <div 
              key={step.number} 
              className={`flex flex-col transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="font-sans text-[11px] uppercase tracking-[0.15em] font-medium text-[--accent-gold] mb-2">
                {step.number}
              </div>
              <div className="w-6 h-px bg-[--accent-gold] mb-6" />
              <h3 className="font-serif text-xl font-medium mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-[--muted-foreground] leading-[1.75]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
