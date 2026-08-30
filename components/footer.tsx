"use client"

import Link from "next/link"
import { contact } from "@/lib/contact"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how" },
  { label: "Clients", href: "#clients" },
  { label: "About", href: "#about" },
]

export function Footer() {
  return (
    <footer className="bg-[--background] py-14">
      <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2 flex flex-col">
            <div className="mb-4">
              {/* Note: In a real app this would be an SVG logo, for now we use the wordmark */}
              <div className="font-sans text-xl font-medium tracking-[0.25em] uppercase text-[--foreground]">
                TRUSTING HANDS
              </div>
            </div>
            <p className="font-sans text-xs text-[--muted-foreground]">
              Reliable Workers, Everywhere.
            </p>
          </div>
          
          <div className="md:col-span-1 flex flex-col gap-4">
            <a href={`tel:${contact.phone1.replace(/\s+/g, '')}`} className="font-sans text-sm text-[--foreground] hover:text-[--muted-foreground] transition-colors">
              {contact.phone1}
            </a>
            <a href={`tel:${contact.phone2.replace(/\s+/g, '')}`} className="font-sans text-sm text-[--foreground] hover:text-[--muted-foreground] transition-colors">
              {contact.phone2}
            </a>
            <a href={`mailto:${contact.email}`} className="font-sans text-sm text-[--foreground] hover:text-[--muted-foreground] transition-colors">
              {contact.email}
            </a>
          </div>
          
          <div className="md:col-span-1 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-[--foreground] hover:text-[--muted-foreground] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-[--border] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-sans text-xs text-[--muted-foreground]">
            © {new Date().getFullYear()} Trusting Hands. All rights reserved.
          </div>
          <div className="font-sans text-xs text-[--muted-foreground]">
            Lilongwe, Malawi
          </div>
        </div>
      </div>
    </footer>
  )
}
