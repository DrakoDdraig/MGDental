import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TreatmentsSection } from "@/components/treatments-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import ReviewsCarousel from "@/components/reviews-carrousel";
export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ReviewsCarousel />
      <TreatmentsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
