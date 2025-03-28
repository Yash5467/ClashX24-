"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

export function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    const gridSize = 30
    const gridSpacing = 50
    const gridDepth = 10
    const perspective = 500
    const cameraSpeed = 0.5
    const lineColor = "rgba(34, 197, 94, 0.2)" 


    const points: { x: number; y: number; z: number }[] = []
    for (let x = -gridSize; x <= gridSize; x++) {
      for (let z = 1; z <= gridDepth; z++) {
        points.push({ x: x * gridSpacing, y: 0, z: z * gridSpacing })
      }
    }

    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)


      const sortedPoints = [...points].sort((a, b) => b.z - a.z)


      for (const point of sortedPoints) {
        const z = point.z - ((time * cameraSpeed) % gridSpacing)

        const scale = perspective / (perspective + z)
        const x2d = point.x * scale + canvas.width / 2
        const y2d = point.y * scale + canvas.height / 2

        const alpha = Math.max(0, 1 - z / (gridDepth * gridSpacing))
        const size = Math.max(1, 3 * scale)

        ctx.fillStyle = `rgba(34, 197, 94, ${alpha * 0.8})`
        ctx.beginPath()
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2)
        ctx.fill()

        if (point.x < gridSize * gridSpacing) {
          const nextPoint = sortedPoints.find((p) => p.x === point.x + gridSpacing && p.z === point.z)
          if (nextPoint) {
            const nextScale = perspective / (perspective + nextPoint.z)
            const nextX2d = nextPoint.x * nextScale + canvas.width / 2
            const nextY2d = nextPoint.y * nextScale + canvas.height / 2

            ctx.strokeStyle = lineColor
            ctx.lineWidth = Math.max(0.5, 1 * scale)
            ctx.beginPath()
            ctx.moveTo(x2d, y2d)
            ctx.lineTo(nextX2d, nextY2d)
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
      className="fixed inset-0 z-0 opacity-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1.5 }}
    />
  )
}

