import { AgentSupportSection } from "@/features/home/components/agent-support-section"
import { ArchitectureSection } from "@/features/home/components/architecture-section"
import { CapabilitiesSection } from "@/features/home/components/capabilities-section"
import { HeroSection } from "@/features/home/components/hero-section"
import { HomeFooter } from "@/features/home/components/home-footer"
import { HomeHeader } from "@/features/home/components/home-header"
import { PrinciplesSection } from "@/features/home/components/principles-section"
import { QuickStartSection } from "@/features/home/components/quick-start-section"

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <ArchitectureSection />
        <AgentSupportSection />
        <PrinciplesSection />
        <QuickStartSection />
      </main>
      <HomeFooter />
    </>
  )
}
