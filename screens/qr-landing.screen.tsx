"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";

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
      className="h-screen w-full relative flex justify-center items-center px-4"
    >
      {!started && (
        <button
          className="text-xl px-0 py-0  absolute inset-0  h-full cursor-pointer"
          onClick={() => setStarted(true)}
        >
          <Image
            src="https://res.cloudinary.com/dqdvsab8g/image/upload/v1749717713/srnvzxz0snzehgz77yty.jpg"
            alt="bg-image-qr"
            height={800}
            width={1600}
            className="-z-10 opacity-50 h-full cursor-pointer"
          />
        <span className="absolute top-1/2 left-1/2 font-semibold text-xl cursor-pointer -translate-x-1/2 -translate-y-1/2" >
            Tap to Start
        </span>
        </button>
      )}

      {started && (
        <div className="relative">
          <Iphone15Pro
            videRef={videoRef}
            className="size-full"
            videoSrc="https://res.cloudinary.com/dqdvsab8g/video/upload/v1749713842/bmosckbtedhflavxrxla.mp4"
          />
        </div>
      )}
    </div>
  );
}
