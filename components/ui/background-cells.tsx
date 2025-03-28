"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export const BackgroundCells = () => {
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

    // Cell properties
    const cellSize = 50
    const numCols = Math.ceil(canvas.width / cellSize) + 1
    const numRows = Math.ceil(canvas.height / cellSize) + 1

    // Animation
    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const x = col * cellSize
          const y = row * cellSize

          // Calculate pulse effect based on time and position
          const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5
          const size = cellSize * 0.1 * pulse

          ctx.fillStyle = `rgba(34, 197, 94, ${0.05 * pulse})`
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()

          // Draw connecting lines
          if (col < numCols - 1) {
            const nextPulse = Math.sin(time + (x + cellSize) * 0.01 + y * 0.01) * 0.5 + 0.5
            const alpha = (0.03 * (pulse + nextPulse)) / 2

            ctx.strokeStyle = `rgba(34, 197, 94, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + cellSize, y)
            ctx.stroke()
          }

          if (row < numRows - 1) {
            const nextPulse = Math.sin(time + x * 0.01 + (y + cellSize) * 0.01) * 0.5 + 0.5
            const alpha = (0.03 * (pulse + nextPulse)) / 2

            ctx.strokeStyle = `rgba(34, 197, 94, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x, y + cellSize)
            ctx.stroke()
          }
        }
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

