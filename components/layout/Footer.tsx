"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Gamepad2 } from "lucide-react"
import { HoverGlowEffect } from "@/components/ui/hover-glow-effect"

export default function Footer() {
  const footerSections = [
    {
      title: "Quick Links",
      links: ["Home", "Features", "Tournaments", "Download", "FAQ", "Contact Us"],
    },
    {
      title: "Games",
      links: ["PUBG Mobile", "Free Fire",],
    },
  ]

  const contactInfo = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-foreground mt-0.5"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      text: "+91 9131751683",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-foreground mt-0.5"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      text: "clashx2400@gmail.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-foreground mt-0.5"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      text: "khargone Madhya Pradesh 451001",
    },
  ]

  const socialIcons = [
    {
      name: "twitter",
      icon: (
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      ),
    },
    {
      name: "facebook",
      icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>,
    },
    {
      name: "instagram",
      icon: <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>,
    },
    {
      name: "youtube",
      icon: (
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      ),
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-muted/30 border-t border-primary/20">
      <div className="container py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-4" variants={item}>
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <Gamepad2 className="h-8 w-8 text-primary relative z-10" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse-glow"></div>
              </div>
              <span className="font-bold text-xl text-glow">BattleRoyale</span>
            </Link>
            <p className="text-muted-foreground">
              The ultimate platform for mobile battle royale tournaments and competitive gaming.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <HoverGlowEffect key={social.name}>
                  <Link
                    href="#"
                    className="p-2 bg-card/50 backdrop-blur-sm rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 border border-primary/20"
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      {social.icon}
                    </svg>
                  </Link>
                </HoverGlowEffect>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section) => (
            <motion.div key={section.title} variants={item}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:pl-1"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div variants={item}>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  {info.icon}
                  <span className="text-muted-foreground">{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-primary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} BattleRoyale. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <Link key={link} href="#" className="text-muted-foreground hover:text-primary text-sm">
                {link}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

