"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useTransform, useScroll, useVelocity, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  // Track velocity of scroll to increase or decrease distance between traced path
  const scrollYVelocity = useVelocity(scrollYProgress)
  const [lastScrollYVelocity, setLastScrollYVelocity] = useState(0)

  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }
  }, [])

  // Control the speed of tracing based on scroll velocity
  useEffect(() => {
    return scrollYVelocity.onChange((latestVelocity) => {
      setLastScrollYVelocity(latestVelocity)
    })
  }, [scrollYVelocity])

  const y1 = useTransform(scrollYProgress, [0, 0.8], [50, svgHeight - 50])
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 50]), {
    stiffness: 500,
    damping: 90,
  })

  // Animate the beam intensity based on scroll velocity
  const beamOpacity = useTransform(scrollYVelocity, [-2, 0, 2], [0.5, 0.2, 0.5])

  const beamGlow = useTransform(scrollYVelocity, [-2, 0, 2], [10, 5, 10])

  return (
    <motion.div ref={ref} className={cn("relative w-full max-w-full", className)}>
      <div className="absolute left-8 top-3 bottom-0 w-px h-full">
        <svg
          width="30"
          height={svgHeight}
          viewBox={`0 0 30 ${svgHeight}`}
          fill="none"
          className="absolute left-0 top-0"
        >
          <motion.path d={`M15 0 L15 ${svgHeight}`} stroke="rgba(34, 197, 94, 0.2)" strokeWidth="1" />
          <motion.path
            d={`M15 ${y1} L15 ${y2}`}
            stroke="rgba(34, 197, 94, 1)"
            strokeWidth="2"
            style={{
              filter: `blur(${beamGlow}px)`,
              opacity: beamOpacity,
            }}
          />
          <motion.circle
            cx="15"
            cy={y2}
            r="5"
            fill="rgba(34, 197, 94, 1)"
            style={{
              filter: `blur(${beamGlow}px)`,
              opacity: beamOpacity,
            }}
          />
        </svg>
      </div>
      <div ref={contentRef} className="ml-16">
        {children}
      </div>
    </motion.div>
  )
}

