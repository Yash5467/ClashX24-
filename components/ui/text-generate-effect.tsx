"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [renderedText, setRenderedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`text-generate-${words.substring(0, 10)}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [words])

  useEffect(() => {
    if (!isVisible) return

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= words.length) {
        setRenderedText(words.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        setIsComplete(true)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [words, isVisible])

  return (
    <div id={`text-generate-${words.substring(0, 10)}`} className={cn("", className)}>
      {renderedText}
      {!isComplete && isVisible && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="inline-block ml-1 w-1 h-4 bg-primary"
        />
      )}
    </div>
  )
}

