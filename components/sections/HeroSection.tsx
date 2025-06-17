"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Download, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlitchText } from "@/components/ui/glitch-text"
import { HoverGlowEffect } from "@/components/ui/hover-glow-effect"
import { FloatingGameIcons } from "@/components/ui/floating-game-icons"
import axios from "axios"


export default function HeroSection() {
  const previousTime = 2 * 3600 + 30 * 60 + 50;
  const [time, settime] = useState(previousTime);

  const formatTime = (seconds: number) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };


  useEffect(() => {
    const interval = setInterval(() => {
      console.log(time)
      settime(prev => {
        if (prev <= 0) {
          return previousTime
        }
        return prev - 1;
      }
      );
    }, 1000);
    return () => clearInterval(interval)
  }, [previousTime])




  const ref = useRef(null);
  return (
    <section
      ref={ref}
      id="heroSection"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Gaming background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>

        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        {/* Sparkles effect */}
        {/* <div className="absolute inset-0 w-full h-full">
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
        </div> */}
      </div>

      <motion.div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-primary/20 rounded-full text-primary font-medium text-sm border border-primary/30 shadow-glow"
            >
              India’s Top Skill-Based Battle Royale Platform
            </motion.div>

            <div className="h-24 md:h-28">
              <GlitchText
                text="Skill-Based BGMI & Free Fire Challenges"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                highlightWords={["BGMI", "Free Fire"]}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl max-md:mt-10"
            >
              Challenge yourself with intense battle royale action alongside thousands of skilled players.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href='https://clashx24-bucket.blr1.cdn.digitaloceanspaces.com/clashx24-apk/ClashX24.V.1.0.1.apk'
                download={true}
              >
                <HoverGlowEffect>
                  <Button variant="gaming" size="lg" className="gap-2 relative overflow-hidden group">
                    <span className="relative flex items-center gap-2">
                      <Download className="h-5 w-5" /> Download App
                    </span>
                  </Button>
                </HoverGlowEffect>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {["https://res.cloudinary.com/dqdvsab8g/image/upload/v1743331446/8c491879-55cb-4812-83ab-bb447ff56813_npzjob.jpg", 'https://res.cloudinary.com/dqdvsab8g/image/upload/v1743331029/0db43186-cf21-430e-9066-4db63e813e05_xzctrt.jpg', 'https://res.cloudinary.com/dqdvsab8g/image/upload/v1743331029/da3ae4e0-380d-4ad2-8f7a-d0cdd861b91a_blvuq5.jpg'].map((name: string, i: number) => (
                  <div
                    key={`recent-users-tooltip-${name}-${i}`}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full border-2 flex justify-center items-center bg-white text-black border-primary/30 overflow-hidden shadow-glow"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                    >
                      <Image
                        src={name}
                        alt={`image-icon-${name}-${i}`}
                        height={200}
                        width={400}
                        className="h-10 w-10 object-contain"
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="text-primary font-bold">2000+</span> active players and counting
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
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <div className="bg-background/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-primary/30">
                  LIVE
                </div>
                <div className="bg-background/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-primary/30">
                  <span className="text-primary">32</span> Players
                </div>
              </div>

              <div className="absolute bottom-8 left-4 right-4 bg-background/40 backdrop-blur-sm p-3 rounded-lg border border-primary/30">
                <div className="text-xs text-muted-foreground mb-1">Upcoming Match</div>
                <div className="text-sm font-bold">BGMI Clash Night</div>
                <div className="w-full h-1.5 bg-muted/50 rounded-full mt-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1, delay: 1.5 }}
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>65/100 Squads</span> or <span>65/100 Entries</span>
                  <span>Starts in {formatTime(time)}</span>
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

