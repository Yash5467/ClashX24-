"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export const BackgroundBeams = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Beam properties
    const beams: {
      x: number
      width: number
      speed: number
      alpha: number
    }[] = []

    // Create initial beams
    const createBeams = () => {
      const numBeams = 10
      beams.length = 0

      for (let i = 0; i < numBeams; i++) {
        beams.push({
          x: Math.random() * canvas.width,
          width: Math.random() * 4 + 1,
          speed: Math.random() * 0.5 + 0.1,
          alpha: Math.random() * 0.3 + 0.1,
        })
      }
    }

    createBeams()

    // Animation
    let animationFrame: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw beams
      for (const beam of beams) {
        beam.x += beam.speed
        if (beam.x > canvas.width) {
          beam.x = -10
        }

        const gradient = ctx.createLinearGradient(beam.x, 0, beam.x, canvas.height)
        gradient.addColorStop(0, `rgba(34, 197, 94, 0)`)
        gradient.addColorStop(0.5, `rgba(34, 197, 94, ${beam.alpha})`)
        gradient.addColorStop(1, `rgba(34, 197, 94, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(beam.x, 0, beam.width, canvas.height)
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1 }}
    />
  )
}

