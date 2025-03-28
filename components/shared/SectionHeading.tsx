"use client"

import { motion } from "framer-motion"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

interface SectionHeadingProps {
  title: string
  description: string
  highlightWord: string
}

export default function SectionHeading({ title, description, highlightWord }: SectionHeadingProps) {
  // Split the title to highlight the specific word
  const titleParts = title.split(highlightWord)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16 space-y-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        {titleParts[0]}
        <motion.span
          className="text-primary relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: "spring",
            stiffness: 200,
          }}
        >
          {highlightWord}
          <motion.span
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </motion.span>
        {titleParts[1]}
      </h2>
      <motion.div
        className="text-muted-foreground max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <TextGenerateEffect words={description} />
      </motion.div>
    </motion.div>
  )
}

