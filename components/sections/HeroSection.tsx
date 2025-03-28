"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Download, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SparklesCore } from "@/components/ui/sparkles"
import { GlitchText } from "@/components/ui/glitch-text"
import { HoverGlowEffect } from "@/components/ui/hover-glow-effect"
import { FloatingGameIcons } from "@/components/ui/floating-game-icons"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Gaming background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>

        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        {/* Sparkles effect */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={70}
            className="w-full h-full"
            particleColor="#22c55e"
            speed={0.5}
          />
        </div>
      </div>

      <motion.div style={{ y, opacity }} className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-primary/20 rounded-full text-primary font-medium text-sm border border-primary/30 shadow-glow"
            >
              #1 Battle Royale Tournament Platform
            </motion.div>

            <div className="h-24 md:h-28">
              <GlitchText
                text="Compete in PUBG & Free Fire Tournaments"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                highlightWords={["PUBG", "Free Fire"]}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              Join thousands of players competing for glory and prizes in the biggest mobile battle royale tournaments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <HoverGlowEffect>
                <Button variant="gaming" size="lg" className="gap-2 relative overflow-hidden group">
                  <span className="relative flex items-center gap-2">
                    <Download className="h-5 w-5" /> Download App
                  </span>
                </Button>
              </HoverGlowEffect>

              <Button
                variant="outline"
                size="lg"
                className="gap-2 group border-primary/30 hover:border-primary/80 hover:bg-primary/10"
              >
                View Tournaments
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-primary/30 overflow-hidden shadow-glow"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                  >
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=User${i}`}
                      alt={`User ${i}`}
                      width={40}
                      height={40}
                    />
                  </motion.div>
                ))}
              </div>
              <div className="text-sm">
                <span className="text-primary font-bold">10,000+</span> players already joined
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <FloatingGameIcons />

            <motion.div
              className="relative h-[500px] w-full max-w-[400px] mx-auto"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 rounded-2xl border border-primary/30 shadow-glow"></div>
              <Image
                src="/placeholder.svg?height=1000&width=500&text=App+Screenshot"
                alt="App screenshot"
                fill
                className="object-contain rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent rounded-2xl"></div>

              {/* HUD Elements */}
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <div className="bg-background/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-primary/30">
                  LIVE
                </div>
                <div className="bg-background/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-primary/30">
                  <span className="text-primary">32</span> Players
                </div>
              </div>

              <div className="absolute bottom-8 left-4 right-4 bg-background/40 backdrop-blur-sm p-3 rounded-lg border border-primary/30">
                <div className="text-xs text-muted-foreground mb-1">Next Tournament</div>
                <div className="text-sm font-bold">PUBG Pro League Finals</div>
                <div className="w-full h-1.5 bg-muted/50 rounded-full mt-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1, delay: 1.5 }}
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>65/100 Teams</span>
                  <span>Starts in 2h 15m</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

