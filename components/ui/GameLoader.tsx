"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Gamepad2 } from "lucide-react"
import Image from "next/image"

export default function GameLoader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
         <Image 
         src="/logo.jpg"
         alt="clashx-24-brand-icon"
         height={30 }
         width={50} 
         className="rounded-full object-contain"
         />
        </motion.div>
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8 text-2xl font-bold"
      >
        ClashX24
      </motion.div>

      <div className="mt-8 w-64 h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-sm text-muted-foreground"
      >
        Loading game assets... {progress}%
      </motion.div>

      {/* Gaming UI Elements */}
      <div className="absolute bottom-8 flex gap-4">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="w-3 h-3 rounded-full bg-primary/50"
            style={{
              animation: `pulse 1.5s infinite ${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

