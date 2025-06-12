"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function QRLandingScreen() {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    const video = videoRef.current;

    if (video && started) {
      video.play().catch((err) => {
        console.error("Video play failed", err);
      });

      const handleEnded = () => {
        router.push("/");

      };

      video.addEventListener("ended", handleEnded);
      return () => video.removeEventListener("ended", handleEnded);
    }
  }, [started]);

  return (
    <div
      className="h-screen w-full flex justify-center items-center"
    >
      {!started && (
        <Button
          onClick={() => setStarted(true)}
        >
          Tap to Start
        </Button>
      )}

      {started && (
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dqdvsab8g/video/upload/v1749713842/bmosckbtedhflavxrxla.mp4"
          autoPlay
          controls={false}
          muted={false}
          playsInline
          className="h-full"
        />
      )}
    </div>
  );
}
