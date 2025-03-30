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
    pubg: [
      {
        title: "BGMI Pro League",
        image: "./tournament1.jpg",
        timeRemaining: "Starting in 2 hours",
        description: "Squad-based tournament with 100 teams competing for a prize pool of $5,000.",
        teams: 100,
        registeredTeams: 85,
        prize: 5000,
        date: "Today, 8:00 PM",
      },
      {
        title: "BGMI Weekend Cup",
        image: "./tournament2.jpg",
        timeRemaining: "Tomorrow, 8:00 PM",
        description: "Weekend special tournament with custom rooms and live streaming.",
        teams: 100,
        registeredTeams: 62,
        prize: 3000,
        date: "Tomorrow, 8:00 PM",
      },
      {
        title: "BGMI Championship Series",
        image: "./champianTrophy.jpg",
        timeRemaining: "In 3 days",
        description: "Official championship series with qualification rounds and finals.",
        teams: 100,
        registeredTeams: 45,
        prize: 10000,
        date: "Sat, 10:00 AM",
      },
    ],
    freefire: [
      {
        title: "Free Fire Pro League",
        image: "./tournament1.jpg",
        timeRemaining: "Starting in 3 hours",
        description: "Squad-based tournament with 100 teams competing for a prize pool of $4,000.",
        teams: 100,
        registeredTeams: 90,
        prize: 4000,
        date: "Today, 9:00 PM",
      },
      {
        title: "Free Fire Weekend Cup",
        image: "./tournament2.jpg",
        timeRemaining: "Tomorrow, 9:00 PM",
        description: "Weekend special tournament with custom rooms and live streaming.",
        teams: 100,
        registeredTeams: 75,
        prize: 2500,
        date: "Tomorrow, 9:00 PM",
      },
      {
        title: "Free Fire Championship Series",
        image: "./champianTrophy.jpg",
        timeRemaining: "In 2 days",
        description: "Official championship series with qualification rounds and finals.",
        teams: 100,
        registeredTeams: 60,
        prize: 8000,
        date: "Fri, 7:00 PM",
      },
    ],
  }

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
          title="Upcoming Tournaments"
          description="Join our upcoming tournaments and compete for glory and amazing prizes."
          highlightWord="Tournaments"
        />

        <Tabs defaultValue="pubg" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl">
            <TabsTrigger
              value="pubg"
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

          {["pubg", "freefire"].map((game) => (
            <TabsContent key={game} value={game} className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div key={game} variants={container} initial="hidden" animate="show" exit={{ opacity: 0 }}>
                  {tournaments[game as keyof typeof tournaments].map((tournament, i) => (
                    <motion.div key={i} variants={item} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                      <Card
                        className={cn(
                          "bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden group",
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

                            {/* Tournament Badge */}
                            <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-primary/30 shadow-glow">
                              {game === "pubg" ? "BGMI Mobile" : "Free Fire"}
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
                                    ${tournament.prize.toLocaleString()} Prize
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
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                              >
                                View Details
                              </Button>
                             <Dialog>
                              <DialogTrigger>
                              <HoverGlowEffect>
                                <Button variant="gaming" size="sm">
                                  Register Now
                                </Button>
                              </HoverGlowEffect>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogTitle>
                                  To Register You Need To Download Application 
                                </DialogTitle>
                                <Button>
                                  Downlaod Now
                                </Button>
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

              <div className="text-center pt-6">
                <Button
                  variant="outline"
                  className="border-primary/30 hover:border-primary/50 transition-colors hover:bg-primary/10"
                >
                  View All Tournaments
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

