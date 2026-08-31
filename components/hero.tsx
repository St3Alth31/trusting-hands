"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger)
}

export function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    // Staggered entrance
    gsap.from(".hero-anim", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2
    })
  }, { scope: container })

  return (
    <section ref={container} className="relative h-screen flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[--background]">
        <Image
          ref={bgRef}
          src="/images/image-1.jpg"
          alt="Trusting Hands Domestic Workers"
          fill
          priority
          sizes="100vw"
          className="object-cover -top-[15%] !h-[130%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-16 md:px-12 lg:px-20 md:pb-20">
        <div className="max-w-2xl">
          <div className="hero-anim">
            <h1 className="font-serif text-[clamp(2.25rem,6vw,5rem)] font-normal leading-[1.1] tracking-[-0.01em] text-white text-balance mb-6">
              Care You Can Count On.
            </h1>
          </div>

          <div className="hero-anim">
            <p className="font-sans max-w-sm text-sm text-white/75 mb-10">
              Screened, trained and deployed across Malawi.
            </p>
          </div>
          
          <div className="flex items-center gap-6 hero-anim">
            <Link 
              href="#clients"
              className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-white border-b border-white/50 hover:border-white transition-colors pb-1"
            >
              For Households
            </Link>
            <Link 
              href="#clients"
              className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-white border-b border-white/50 hover:border-white transition-colors pb-1"
            >
              For Businesses
            </Link>
          </div>
        </div>

        <div className="mt-16 md:mt-20 flex items-center gap-4 hero-anim">
          <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/60">
            Scroll to explore
          </span>
          <span className="w-8 h-px bg-white/30 motion-safe:animate-[scrollCue_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
