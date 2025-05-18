"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Download, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverGlowEffect } from "@/components/ui/hover-glow-effect"

export default function CtaSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section
      ref={ref}
      id="contactUs"
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-30"></div>
      </div>

      <motion.div style={{ y, opacity, scale }} className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6 bg-card/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center border border-primary/30 shadow-glow mb-6"
          >
            <Gamepad2 className="h-10 w-10 text-primary" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Prove Your <span className="text-primary">Skill</span> and Win Real Cash?
          </h2>
          <p className="text-xl text-muted-foreground">
            Download our app now to join skill-based challenges, compete fairly, and earn real money based on your gaming ability.
          </p>

          <motion.div
            className="pt-4 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="https://expo.dev/artifacts/eas/vPKBq2y43ELrRPgGq8JiFz.apk" download={true}>
              <HoverGlowEffect>
                <Button variant="gaming" size="lg" className="gap-2">
                  <Download className="h-5 w-5" /> Download App
                </Button>
              </HoverGlowEffect>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary/50 transition-all duration-300 hover:bg-primary/10"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Skill Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                style={{
                  animationName: "pulse",
                  animationDuration: "1.5s",
                  animationIterationCount: "infinite",
                  animationDelay: `${i * 0.3}s`,
                }}
              ></div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
