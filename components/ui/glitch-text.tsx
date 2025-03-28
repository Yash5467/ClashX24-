"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  highlightWords?: string[]
}

export const GlitchText = ({ text, className, highlightWords = [] }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Initial glitch effect
    setTimeout(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 500)

    // Random glitch effects
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 150)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Split text to highlight specific words
  const renderText = () => {
    const words = text.split(" ")

    return words.map((word, index) => {
      const isHighlighted = highlightWords.includes(word)

      return (
        <span key={index} className={cn("inline-block", isHighlighted ? "text-primary relative" : "")}>
          {word}
          {isHighlighted && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>}
          {index < words.length - 1 ? " " : ""}
        </span>
      )
    })
  }

  return (
    <motion.div
      className={cn("relative", className)}
      animate={
        isGlitching
          ? {
              x: [0, -2, 3, -1, 0],
              opacity: [1, 0.85, 0.9, 0.95, 1],
            }
          : {}
      }
      transition={{ duration: 0.2 }}
    >
      {renderText()}

      {isGlitching && (
        <>
          <motion.div
            className="absolute inset-0 text-primary opacity-70 z-10"
            animate={{ x: 2, y: -1 }}
            transition={{ duration: 0.1 }}
          >
            {renderText()}
          </motion.div>
          <motion.div
            className="absolute inset-0 text-blue-500 opacity-70 z-10"
            animate={{ x: -2, y: 1 }}
            transition={{ duration: 0.1 }}
          >
            {renderText()}
          </motion.div>
        </>
      )}
    </motion.div>
  )
}

