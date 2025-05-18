"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useAnimationFrame } from "framer-motion"
import { Trophy, Users } from "lucide-react"

export const FloatingPhoneAnimation = () => {
  const phoneRef = useRef<HTMLDivElement>(null)
  const notificationRef = useRef<HTMLDivElement>(null)
  const messageRef = useRef<HTMLDivElement>(null)

  // Animate phone floating
  useAnimationFrame((time) => {
    if (phoneRef.current) {
      const y = Math.sin(time / 1000) * 10
      phoneRef.current.style.transform = `translateY(${y}px)`
    }
  })

  return (
    <div className="relative h-[600px] w-full max-w-[300px] mx-auto">
      <motion.div ref={phoneRef} className="relative h-full w-full">
        <div className="absolute inset-0 rounded-2xl border border-primary/30 shadow-glow"></div>
        <Image
          src="./chatimg01.jpg"
          alt="App interface"
          fill
          className="object-contain rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent rounded-2xl"></div>

        {/* HUD Elements */}
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <motion.div
            className="bg-background/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-primary/30"
            animate={{
              backgroundColor: ["rgba(0,0,0,0.4)", "rgba(34,197,94,0.2)", "rgba(0,0,0,0.4)"],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            LIVE
          </motion.div>
          <div className="bg-background/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-primary/30">
            <span className="text-primary">32</span> Players
          </div>
        </div>

        {/* Notification */}
        <motion.div
          ref={notificationRef}
          className="absolute top-20 right-4 bg-card/80 backdrop-blur-sm p-3 rounded-lg border border-primary/30 w-48 shadow-glow"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-start gap-2">
            <div className="p-1 bg-primary/20 rounded-full">
              <Trophy className="h-4 w-4 text-primary" />
            </div>
            <div>
              <div className="text-xs font-bold">Skill Challenge Live</div>
              <div className="text-xs text-muted-foreground">Prove your skills & win cash prizes</div>
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          ref={messageRef}
          className="absolute bottom-32 left-4 bg-card/80 backdrop-blur-sm p-3 rounded-lg border border-primary/30 w-48 shadow-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex items-start gap-2">
            <div className="p-1 bg-primary/20 rounded-full">
              <Users className="h-4 w-4 text-primary" />
            </div>
            <div>
              <div className="text-xs font-bold">Challenge Invite</div>
              <div className="text-xs text-muted-foreground">XShadowKillerX invited you to a 1v1 skill match</div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-4 right-4 bg-background/40 backdrop-blur-sm p-3 rounded-lg border border-primary/30">
          <div className="text-xs text-muted-foreground mb-1">Next Skill Challenge</div>
          <div className="text-sm font-bold">Ultimate Gamer Showdown</div>
          <div className="w-full h-1.5 bg-muted/50 rounded-full mt-2 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{ duration: 1, delay: 1.5 }}
            ></motion.div>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span>65/100 Players Registered</span>
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
    </div>
  )
}
