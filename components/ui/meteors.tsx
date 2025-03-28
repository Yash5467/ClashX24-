"use client"

import { cn } from "@/lib/utils"

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number
  className?: string
}) => {
  const meteors = new Array(number).fill(null).map((_, i) => {
    const size = Math.floor(Math.random() * 30) + 1
    const top = Math.floor(Math.random() * 100)
    const left = Math.floor(Math.random() * 100)
    const animationDuration = Math.floor(Math.random() * 10) + 5
    const delay = Math.random() * 5

    return (
      <span
        key={i}
        className={cn(
          "absolute top-0 left-0 w-0.5 h-10 bg-primary rotate-[35deg] shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] block transform-gpu",
          className,
        )}
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size / 10}rem`,
          height: `${size}rem`,
          animation: `meteor ${animationDuration}s linear ${delay}s infinite`,
        }}
      />
    )
  })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors}
      <style jsx global>{`
        @keyframes meteor {
          0% {
            transform: rotate(35deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(35deg) translateX(-200px) translateY(200px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

