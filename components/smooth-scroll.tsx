"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"
import "../styles/lenis.css"

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/blog" || pathname.startsWith("/onboarding")) return

    const lenis = new Lenis({
      lerp: 0.03,
      infinite: false,
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 0.8,
    } as any)

    let animationFrameId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null
      const href = link?.getAttribute("href")

      if (!href || href === "#") return

      const destination = document.querySelector(href)
      if (!destination) return

      event.preventDefault()
      lenis.scrollTo(destination as HTMLElement, { offset: -88, duration: 1.15 })
      window.history.replaceState(null, "", href)
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
    }
  }, [pathname])

  return <>{children}</>
}
