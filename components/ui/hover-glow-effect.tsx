"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"

export const HoverGlowEffect = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative"
    >
      {isHovered && (
        <motion.div
          className="absolute inset-0 -z-10 bg-primary/20 blur-xl rounded-full opacity-70"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: 0.7,
            scale: 1.2,
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
          }}
          exit={{ opacity: 0, scale: 0.6 }}
          style={{
            width: "100px",
            height: "100px",
            pointerEvents: "none",
          }}
          transition={{ duration: 0.2 }}
        />
      )}
      {children}
    </motion.div>
  )
}

