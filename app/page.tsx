"use client"

import { useEffect, useState } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import TournamentsSection from "@/components/sections/TournamentsSection"
import DownloadSection from "@/components/sections/DownloadSection"
import FaqSection from "@/components/sections/FaqSection"
import CtaSection from "@/components/sections/CtaSection"
import GameLoader from "@/components/ui/GameLoader"
import { ThreeDBackground } from "@/components/ui/ThreeDBackground"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <GameLoader />
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <ThreeDBackground />

      <div className="relative z-10">
        <Header />
        <TracingBeam className="px-0">
          <main>
            <HeroSection />
            <FeaturesSection />
            <TournamentsSection />
            <DownloadSection />
            <FaqSection />
            <CtaSection />
          </main>
        </TracingBeam>
        <Footer />
      </div>
    </div>
  )
}

