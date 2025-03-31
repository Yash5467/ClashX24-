"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Gamepad2, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { HoverGlowEffect } from "@/components/ui/hover-glow-effect"
import Image from "next/image"
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Tournaments", href: "#tournaments" },
    { name: "Download", href: "#download" },
    { name: "FAQ", href: "#faq" },
  ]

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md py-2 border-b border-border/50" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <motion.div
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative rounded-full overflow-hidden h-10 w-10"
          > 
             <Image
              src="/logo.jpg"
              alt="clashx-24 logo"
              height={100}
              width={400}
              className="h-10 w-10  object-cover rounded-full "
             />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse-glow"></div>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold text-xl text-glow"
          >
            ClashX24
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <HoverGlowEffect>
                <Link
                  href={link.href}
                  className="relative hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
                </Link>
              </HoverGlowEffect>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* <Button variant="gaming" size="sm" className="hidden md:flex">
            <Download className="mr-2 h-4 w-4" /> Download App
          </Button> */}
        </motion.div>

        <Button variant="ghost" size="icon" className="md:hidden z-50" onClick={toggleMobileMenu}>
          <span className="sr-only">Toggle menu</span>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>


      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-bold hover:text-primary transition-colors relative group"
                    onClick={closeMobileMenu}
                  >
                    <TextGenerateEffect words={link.name} />
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-8"
              >
                <Button variant="gaming" size="lg" className="gap-2">
                  <Download className="h-5 w-5" /> Download App
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

