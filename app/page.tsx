import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { ServicesSection } from "@/components/services-section"
import { HowItWorks } from "@/components/how-it-works"
import { AudiencesSection } from "@/components/audiences-section"
import { EditorialBreak } from "@/components/editorial-break"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TrustBar />
      <ServicesSection />
      <HowItWorks />
      <AudiencesSection />
      <EditorialBreak />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
