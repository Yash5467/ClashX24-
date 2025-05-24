"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Trophy, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionHeading from "@/components/shared/SectionHeading"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { HoverGlowEffect } from "@/components/ui/hover-glow-effect"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog"

export default function TournamentsSection() {
  const [activeTab, setActiveTab] = useState("pubg")
  const tournaments = {
    bgmi: [
      {
        title: "BGMI Pro League - Squad (4v4)",
        image: "./tournament1.jpg",
        timeRemaining: "Starting in 2 hours",
        description: "Competitive 4v4 squad battles with 100 teams vying for a ₹5,000 prize pool.",
        teams: 100,
        registeredTeams: 85,
        prize: 5000,
        date: "Today, 8:00 PM",
        type: "4v4 Squad",
      },
      {
        title: "BGMI Solo Showdown (1v1)",
        image: "./tournament3.jpg",
        timeRemaining: "Starting in 4 hours",
        description: "Intense 1v1 battles testing individual skills in custom rooms.",
        teams: 64,
        registeredTeams: 40,
        prize: 2000,
        date: "Today, 10:00 PM",
        type: "1v1 Solo",
      },
    ],
    freefire: [
      {
        title: "Free Fire Pro League - Squad",
        image: "./tournament1.jpg",
        timeRemaining: "Starting in 3 hours",
        description: "4v4 squad tournament with 100 teams competing for a ₹4,000 prize pool.",
        teams: 100,
        registeredTeams: 90,
        prize: 4000,
        date: "Today, 9:00 PM",
        type: "4v4 Squad",
      },
      {
        title: "Free Fire Solo Clash (1v1)",
        image: "./tournament3.jpg",
        timeRemaining: "Starting in 5 hours",
        description: "1v1 battles to prove your solo skills in custom arenas.",
        teams: 64,
        registeredTeams: 50,
        prize: 1500,
        date: "Today, 11:00 PM",
        type: "1v1 Solo",
      },
    ],
  };


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="tournaments" className="py-20 bg-muted/30 relative">
      <BackgroundBeams />

      <div className="container relative z-10">
        <SectionHeading
          title="Upcoming Competitions"
          description="Participate in exciting competitions and showcase your skills to win amazing prizes."
          highlightWord="Competitions"
        />
        <Tabs defaultValue="bgmi" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl">
            <TabsTrigger
              value="bgmi"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-300 data-[state=active]:shadow-glow rounded-lg"
            >
              BGMI Mobile
            </TabsTrigger>
            <TabsTrigger
              value="freefire"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-300 data-[state=active]:shadow-glow rounded-lg"
            >
              Free Fire
            </TabsTrigger>
          </TabsList>

          {["bgmi", "freefire"].map((game) => (
            <TabsContent key={game} value={game} className="space-y-6 ">
              <AnimatePresence mode="wait">
                <motion.div key={game} variants={container} initial="hidden" animate="show" exit={{ opacity: 0 }}>
                  {tournaments[game as keyof typeof tournaments].map((tournament, i) => (
                    <motion.div key={`matches-section-${i}`} variants={item} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                      <Card
                        className={cn(
                          " mb-8 bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden group",
                          "hover:border-primary/50 transition-all duration-300",
                          "relative before:absolute before:inset-0 before:bg-gaming-gradient before:opacity-0",
                          "before:transition-opacity hover:before:opacity-100 before:-z-10",
                        )}
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="relative w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
                            <Image
                              src={tournament.image}
                              alt={tournament.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-primary/30 shadow-glow">
                              {game === "bgmi" ? "BGMI Mobile" : "Free Fire"}
                            </div>
                          </div>
                          <div className="p-6 md:w-2/3 flex flex-col justify-between">
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-primary" />
                                  <span className="text-sm text-muted-foreground">{tournament.date}</span>
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center">
                                  <Clock className="h-4 w-4 mr-1 text-primary" />
                                  {tournament.timeRemaining}
                                </div>
                              </div>
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                                {tournament.title}
                              </h3>
                              <p className="text-muted-foreground">{tournament.description}</p>
                              <div className="flex items-center gap-4 pt-2">
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4 text-primary" />
                                  <span className="text-sm text-muted-foreground">
                                    {tournament.registeredTeams}/{tournament.teams} Teams
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Trophy className="h-4 w-4 text-primary" />
                                  <span className="text-sm text-muted-foreground">
                                    ₹{tournament.prize.toLocaleString()} Prize
                                  </span>
                                </div>
                              </div>

                              {/* Progress Bar */}
                              <div className="w-full bg-muted/50 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-primary"
                                  initial={{ width: "0%" }}
                                  animate={{ width: `${(tournament.registeredTeams / tournament.teams) * 100}%` }}
                                  transition={{ duration: 1, delay: i * 0.2 }}
                                ></motion.div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center mt-6">
                              <Dialog>
                                <DialogTrigger>
                                  <HoverGlowEffect>
                                    <Button variant="gaming" size="sm">
                                      Register Now
                                    </Button>
                                  </HoverGlowEffect>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogTitle>To Register You Need To Download Application</DialogTitle>
                                  <a href="https://clashx24-bucket.blr1.cdn.digitaloceanspaces.com/clashx24-apk/ClashX24.V.1.0.0.apk" download={true}>
                                    <Button>Download Now</Button>
                                  </a>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>

  )
}

