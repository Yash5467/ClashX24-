"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export const HexagonalGrid = () => {
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

    // Hexagon properties
    const hexSize = 40
    const hexHeight = hexSize * Math.sqrt(3)
    const hexWidth = hexSize * 2
    const hexVertSpace = hexHeight
    const hexHorizSpace = hexWidth * 0.75

    // Calculate number of hexagons needed
    const numCols = Math.ceil(canvas.width / hexHorizSpace) + 1
    const numRows = Math.ceil(canvas.height / hexVertSpace) + 1

    // Animation
    let animationFrame: number
    let time = 0

    const drawHexagon = (x: number, y: number, size: number, time: number) => {
      const vertices = []
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        vertices.push({
          x: x + size * Math.cos(angle),
          y: y + size * Math.sin(angle),
        })
      }

      // Calculate pulse effect based on time and position
      const pulse = Math.sin(time * 0.5 + x * 0.01 + y * 0.01) * 0.5 + 0.5

      ctx.strokeStyle = `rgba(34, 197, 94, ${0.1 + pulse * 0.1})`
      ctx.lineWidth = 1

      ctx.beginPath()
      ctx.moveTo(vertices[0].x, vertices[0].y)
      for (let i = 1; i < 6; i++) {
        ctx.lineTo(vertices[i].x, vertices[i].y)
      }
      ctx.closePath()
      ctx.stroke()
    }

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const x = col * hexHorizSpace + (row % 2 === 0 ? 0 : hexHorizSpace / 2)
          const y = row * hexVertSpace

          drawHexagon(x, y, hexSize, time)
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

