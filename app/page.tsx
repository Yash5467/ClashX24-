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
import { ThreeDBackground } from "@/components/ui/ThreeDBackground"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <ThreeDBackground />

      <div className="relative z-10">
        <Header />
        {/* <TracingBeam className="px-0"> */}
          <main>
            <HeroSection />
            <FeaturesSection />
            <TournamentsSection />
            <DownloadSection />
            <FaqSection />
            <CtaSection />
          </main>
        {/* </TracingBeam> */}
        <Footer />
      </div>
    </div>
  )
}

