import ClientWrapper from "@/components/client-wrapper"
import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"
import CounterStatsSection from "@/components/counter-stats-section"
import TeamSection from "@/components/team-section"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ClientWrapper>
        <SiteHeader />
      </ClientWrapper>
      <main className="bg-white dark:bg-gray-900">
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <CounterStatsSection />
        <TeamSection />
      </main>
      <SiteFooter />
    </div>
  )
}
