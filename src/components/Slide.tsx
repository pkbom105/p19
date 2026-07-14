"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  { src: "/slide/p19-1.png", alt: "Slide 1" },
  { src: "/slide/p19-2.png", alt: "Slide 2" },
  { src: "/slide/p19-3.png", alt: "Slide 3" },
  { src: "/slide/p19-4.png", alt: "Slide 4" },
  { src: "/slide/p19-5.png", alt: "Slide 5" },
];

export default function Slide() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
        {/* Slides with fade transition */}
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
            style={{ opacity: index === current ? 1 : 0 }}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority={index === 0}
              />
            </div>
          </div>
        ))}

        {/* Foreground p19-fg overlay */}
        <div
          className="absolute inset-0 z-20 bg-cover bg-center"
          style={{ backgroundImage: "url(/slide/p19-fg3.png)" }}
        />

        {/* Text overlay P19 Avenue - animate once on mount from bottom to top */}
        <div className="absolute inset-0 z-10 flex justify-center mt-[150px]">
          <motion.p
            className="text-white drop-shadow-lg"
            style={{
              fontSize: "190px",
              fontFamily: "var(--font-sans)",
              fontWeight: 900,
            }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            P19 AVENUE
          </motion.p>
        </div>

        {/* Text overlay Putthabucha - animate once on mount from bottom to top */}
        <div className="absolute inset-0 z-30 flex justify-center mt-[400px] ml-[850px]">
          <motion.p
            className="drop-shadow-lg"
            style={{
              fontSize: "100px",
              fontFamily: "var(--font-buffalo)",
              lineHeight: 1,
              color: "#ffc657",
            }}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            Putthabucha
          </motion.p>
        </div>
      </div>
    </div>
  );
}