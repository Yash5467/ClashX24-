"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Users, Calendar, Smartphone } from "lucide-react"
import { Card } from "@/components/ui/card"
import SectionHeading from "@/components/shared/SectionHeading"
import { HexagonalGrid } from "@/components/ui/hexagonal-grid"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { cn } from "@/lib/utils"

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

const features = [
  {
    icon: <Trophy className="h-10 w-10 text-white" />,
    title: "Daily Challenges",
    description:
      "Participate in daily skill-based challenges for BGMI Mobile and Free Fire to improve and compete.",
  },
  {
    icon: <Users className="h-10 w-10 text-white" />,
    title: "Team Management",
    description:
      "Create or join teams, manage your roster, and communicate with teammates seamlessly.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-white" />,
    title: "Event Scheduling",
    description:
      "Stay updated with upcoming events and receive timely notifications to never miss out.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-white" />,
    title: "Mobile-First Design",
    description:
      "Our app is optimized for mobile gamers with intuitive controls and smooth interfaces.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M12 2v8"></path>
        <path d="m4.93 10.93 1.41 1.41"></path>
        <path d="M2 18h2"></path>
        <path d="M20 18h2"></path>
        <path d="m19.07 10.93-1.41 1.41"></path>
        <path d="M22 22H2"></path>
        <path d="m16 6-4 4-4-4"></path>
        <path d="M16 18a4 4 0 0 0-8 0"></path>
      </svg>
    ),
    title: "Live Streaming",
    description:
      "Stream your gameplay directly through the app and engage with a growing community.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
    title: "Global Leaderboards",
    description:
      "Track your performance against players worldwide with comprehensive ranking and stats.",
  },
];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <HexagonalGrid />
      </div>

      <div className="container relative z-10" ref={ref}>
        <SectionHeading
          title="Why Choose Our Platform"
          description="We provide the best experience for mobile battle royale gaming with features designed for skillful players."
          highlightWord="Platform"
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {features.map((feature, index) => (
            <Card
             key={index}
              className={cn(
                "bg-card/50 backdrop-blur-sm border-primary/20 h-full overflow-hidden group",
                "hover:border-primary/50 transition-all duration-300",
                "relative before:absolute before:inset-0 before:bg-gaming-gradient before:opacity-0",
                "before:transition-opacity hover:before:opacity-100 before:-z-10 hover:scale-105 transition-all",
              )}
            >
              <div className="p-6 space-y-4 relative z-10">
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-all duration-300 border border-primary/30 shadow-glow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

