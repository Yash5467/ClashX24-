"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SectionHeading from "@/components/shared/SectionHeading"
import { BackgroundCells } from "@/components/ui/background-cells"

export default function FaqSection() {
  const faqs = [
    {
      question: "What is skill-based gaming?",
      answer:
        "Skill-based gaming allows players to compete against each other based on their abilities and performance rather than luck. Our platform hosts various skill games where you can test and improve your skills while competing for real cash prizes.",
    },
    {
      question: "How do I participate in skill-based games?",
      answer:
        "To participate, simply download our app, create an account, and browse the available skill games. Choose a game, review the rules, pay the entry fee if applicable, and start competing with other players.",
    },
    {
      question: "Are there any entry fees for skill games?",
      answer:
        "Some skill games are free to join, while others require a small entry fee. Entry fees contribute to the prize pool. All fees and prize details are transparently displayed before you join any game.",
    },
    {
      question: "How are winnings paid out?",
      answer:
        "Winnings from skill-based games are credited directly to your wallet within the app. You can withdraw your earnings securely via supported payment methods like Cashfree or use them to join more games.",
    },
    {
      question: "Can I play solo or with a team?",
      answer:
        "You can play solo or join/create teams depending on the game format. Team-based skill games allow you to collaborate and strategize with friends to increase your chances of winning.",
    },
    {
      question: "What happens if I lose internet connection during a game?",
      answer:
        "If you lose connection during a game, you may rejoin if the match is still active. However, continuous stable internet is recommended as games are time-sensitive and do not pause.",
    },
    {
      question: "Is the platform available internationally?",
      answer:
        "Our platform is accessible worldwide, but some games may have regional restrictions due to legal regulations. These restrictions are clearly mentioned on each game's info page.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="faq" className="py-20 bg-muted/30 relative">
      <BackgroundCells />

      <div className="container relative z-10">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Find answers to common questions about our skill-based gaming platform."
          highlightWord="Questions"
        />

        <motion.div
          className="max-w-3xl mx-auto mt-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={item}>
                <AccordionItem value={`item-${index}`} className="border-none">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden group">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <h3 className="text-xl font-semibold text-left group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-0 pb-4 px-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
