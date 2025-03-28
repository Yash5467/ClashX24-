"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SectionHeading from "@/components/shared/SectionHeading"
import { BackgroundCells } from "@/components/ui/background-cells"

export default function FaqSection() {
  const faqs = [
    {
      question: "How do I join a tournament?",
      answer:
        "To join a tournament, download our app, create an account, and navigate to the Tournaments section. Select the tournament you want to join, review the rules and requirements, and click the Register button.",
    },
    {
      question: "Are the tournaments free to enter?",
      answer:
        "We offer both free and paid tournaments. Free tournaments are open to all players, while paid tournaments require an entry fee but offer larger prize pools. The entry fee is clearly displayed on each tournament page.",
    },
    {
      question: "How are prizes distributed?",
      answer:
        "Prize distribution varies by tournament. Typically, prizes are distributed among the top teams, with the largest portion going to the winner. The exact distribution is specified in each tournament's rules section.",
    },
    {
      question: "Can I create my own team?",
      answer:
        "Yes, you can create your own team in the app. Go to the Teams section, click 'Create Team', and follow the instructions. You can then invite other players to join your team.",
    },
    {
      question: "What happens if I disconnect during a match?",
      answer:
        "If you disconnect during a match, you can rejoin as long as the match is still in progress. However, we cannot pause matches for disconnected players, so it's important to have a stable internet connection.",
    },
    {
      question: "Is the app available worldwide?",
      answer:
        "Yes, our app is available worldwide on both iOS and Android devices. However, some tournaments may have regional restrictions, which will be clearly indicated in the tournament details.",
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
          description="Find answers to common questions about our platform and tournaments."
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
                      <h3 className="text-xl font-bold text-left group-hover:text-primary transition-colors">
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

