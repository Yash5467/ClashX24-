"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Gamepad2, Smartphone, Trophy, Users, Target } from "lucide-react"
import type { JSX } from "react"

export const FloatingGameIcons = () => {
  const [icons, setIcons] = useState<JSX.Element[]>([])

  useEffect(() => {
    const iconComponents = [
      <Gamepad2 key="gamepad" className="text-primary" />,
      <Smartphone key="smartphone" className="text-primary" />,
      <Trophy key="trophy" className="text-primary" />,
      <Users key="users" className="text-primary" />,
      <Target key="target" className="text-primary" />,
    ]

    const randomIcons = Array.from({ length: 10 }, (_, i) => {
      const randomIcon = iconComponents[Math.floor(Math.random() * iconComponents.length)]
      const size = Math.random() * 20 + 10 // Random size between 10px and 30px

      return (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0],
            y: [0, -50],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        >
          {randomIcon}
        </motion.div>
      )
    })

    setIcons(randomIcons)
  }, [])

  return <div className="absolute inset-0 pointer-events-none overflow-hidden">{icons}</div>
}

