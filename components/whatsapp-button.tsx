"use client"

import { MessageCircle } from "lucide-react"
import { contact } from "@/lib/contact"

export function WhatsappButton() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hello Trusting Hands. I am looking for a worker for [my home / my business]. Please get in touch.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[--foreground] text-white flex items-center justify-center rounded-none shadow-lg transition-transform duration-300 ease-out hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
