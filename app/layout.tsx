import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'
import { TooltipProvider } from "@/components/ui/tooltip"
import Script from "next/script"

export const metadata = {
  title: "ClashX24 - Skill-Based Gaming for BGMI & Free Fire",
  description:
    "Experience competitive skill-based challenges in BGMI and Free Fire. Play matches, improve your rank, and earn rewards for your performance.",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MBCJGBW7YG"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MBCJGBW7YG');
        `}
      </Script>
      <body className="min-h-screen bg-background font-sans antialiased">
        <TooltipProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}


