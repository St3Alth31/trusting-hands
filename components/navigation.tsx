"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { contact } from "@/lib/contact"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how" },
  { label: "Clients", href: "#clients" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 60)
      setHidden(currentY > lastScrollY && currentY > 400)
      setLastScrollY(currentY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-[#d4b82a]/90 backdrop-blur-2xl border-b border-[#d4b82a]/20 shadow-sm" : "bg-transparent"}`}
    >
      <nav className="flex items-center justify-between px-6 py-[19px] md:px-12 lg:px-20">
        <Link
          href="/"
          className="relative z-10 block shrink-0 h-[63px] w-[28rem]"
          aria-label="Trusting Hands home"
        >
          {/* White logo — shown on transparent/dark hero nav */}
          <img
            src="/images/group-2-1.png"
            alt="Trusting Hands white logo"
            className={`absolute inset-0 h-[63px] w-auto max-w-[28rem] object-contain object-left transition-opacity duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Color logo — shown when nav turns white on scroll */}
          <img
            src="/images/group-2.png"
            alt="Trusting Hands color logo"
            className={`absolute inset-0 h-[63px] w-auto max-w-[28rem] object-contain object-left transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-sans text-[11px] tracking-[0.15em] uppercase transition-colors duration-500 hover:opacity-100 ${
                scrolled
                  ? "text-[#0A2D12]/70 hover:text-[#0A2D12]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition-colors duration-500 ${
            scrolled || isOpen ? "text-[--foreground]" : "text-white"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-white`}
      >
        <div className="flex flex-col px-6 py-10 gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-2xl font-normal text-[#0A2D12] hover:text-[#0A2D12]/70 transition-colors duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <Link
              href={`tel:${contact.phone1.replace(/\s+/g, '')}`}
              className="font-sans text-[11px] uppercase tracking-[0.15em] text-[--foreground]"
            >
              {contact.phone1}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
