"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FloatingPhoneAnimation } from "@/components/ui/floating-phone-animation"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export default function DownloadSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const features = [
    "Join tournaments with just a few taps",
    "Receive real-time notifications for matches",
    "Chat with teammates and opponents",
    "Track your stats and progress",
    "Stream your gameplay directly to our platform",
  ]

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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="download" ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-primary/20 via-transparent to-transparent opacity-50"></div>
      </div>

      <motion.div style={{ opacity, scale }} className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: y1 }} className="relative order-2 lg:order-1">
            <FloatingPhoneAnimation />
          </motion.div>

          <motion.div style={{ y: y2 }} className="space-y-6 order-1 lg:order-2">
            <SpotlightCard>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold leading-tight"
              >
                Download Our <span className="text-primary">Mobile App</span> and Start Competing Today
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground"
              >
                Get instant access to tournaments, team management, live streaming, and more with our dedicated mobile
                app.
              </motion.p>

              <motion.div
                className="space-y-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {features.map((feature, index) => (
                  <motion.div key={index} className="flex items-start gap-3" variants={item}>
                    <div className="p-1 bg-primary/20 rounded-full text-primary mt-0.5 border border-primary/30 shadow-glow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p>{feature}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="pt-4 space-y-4"
              >
                <h3 className="font-medium">Download Now:</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="gaming" className="h-14 px-6 gap-3 justify-start group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.9 2.318A5.32 5.32 0 0 1 22 7.5v9a5.32 5.32 0 0 1-4.1 5.182A80.58 80.58 0 0 1 12 22a80.58 80.58 0 0 1-5.9-.318A5.32 5.32 0 0 1 2 16.5v-9a5.32 5.32 0 0 1 4.1-5.182A80.58 80.58 0 0 1 12 2a80.58 80.58 0 0 1 5.9.318zM7.5 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm4.5-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm4.5-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="font-medium">Google Play</div>
                    </div>
                  </Button>
                  <Button variant="gaming" className="h-14 px-6 gap-3 justify-start group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16.53 11.063c-.008-1.652.72-2.93 2.215-3.878C17.718 5.757 16.01 5.011 14.1 4.95c-1.762-.063-3.629 1.02-4.335 1.02-.739 0-2.37-.957-3.64-.957C3.594 5.038 1 7.11 1 11.358c0 1.278.228 2.588.683 3.895.607 1.714 2.792 5.933 5.06 5.865 1.214-.027 2.062-.812 3.636-.812 1.518 0 2.302.812 3.636.812 2.277.037 4.216-3.823 4.8-5.548-3.059-1.415-3.285-4.124-3.285-4.507zm-3.021-8.039c1.09-1.383.988-2.656.95-3.024-1.012.078-2.174.6-2.85 1.278-.8.804-1.277 1.884-1.18 3.105 1.09.09 2.09-.48 3.08-1.359z"></path>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="font-medium">App Store</div>
                    </div>
                  </Button>
                </div>
              </motion.div>
            </SpotlightCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

