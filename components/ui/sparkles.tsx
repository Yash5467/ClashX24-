"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleColor = "#FFF",
  particleDensity = 100,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [particles, setParticles] = useState<any[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      setContext(ctx)

      const handleResize = () => {
        if (canvas) {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
        }
      }

      handleResize()
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  useEffect(() => {
    if (context && particles.length === 0) {
      initParticles()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context])

  const initParticles = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const particleCount = Math.min(
      Math.max(Math.round((canvas.width * canvas.height) / 10000) * particleDensity, 50),
      500,
    )

    const newParticles = []

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        color: particleColor,
      })
    }

    setParticles(newParticles)
    animationRef.current = requestAnimationFrame(animateParticles)

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }

  const animateParticles = () => {
    if (!context || !canvasRef.current) return

    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Update and draw particles
    const updatedParticles = [...particles]
    for (let i = 0; i < updatedParticles.length; i++) {
      const particle = updatedParticles[i]

      // Update particle position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Wrap particles around the screen
      if (particle.x > canvasRef.current.width) {
        particle.x = 0
      } else if (particle.x < 0) {
        particle.x = canvasRef.current.width
      }

      if (particle.y > canvasRef.current.height) {
        particle.y = 0
      } else if (particle.y < 0) {
        particle.y = canvasRef.current.height
      }

      // Draw particle
      context.beginPath()
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      context.fillStyle = particle.color
      context.fill()
    }

    setParticles(updatedParticles)
    animationRef.current = requestAnimationFrame(animateParticles)
  }

  useEffect(() => {
    if (particles.length > 0) {
      animationRef.current = requestAnimationFrame(animateParticles)
    }

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [particles])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("h-full w-full", className)}
      style={{
        background,
      }}
    />
  )
}

