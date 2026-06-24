"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&display=swap');
      </style>
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
          style={{ backgroundImage: "url(/slide/p19-fg.png)" }}
        />

        {/* Text overlay P19 Avenue */}
        <div className="absolute inset-0 z-10 flex justify-center mt-[150px]">
          <p
            className="text-white drop-shadow-lg"
            style={{
              fontSize: "220px",
              fontFamily: "League Spartan, sans-serif",
              fontWeight: 900,
            }}
          >
            P19 AVENUE
          </p>
        </div>

        {/* Text overlay Putthabucha */}
        <div className="absolute inset-0 z-30 flex justify-center mt-[400px] ml-[850px]">
          <p
            className="drop-shadow-lg"
            style={{
              fontSize: "100px",
              fontFamily: "Corinthia, cursive",
              lineHeight: 1,
              color: "#ffc657",
            }}
          >
            Putthabucha
          </p>
        </div>
      </div>
    </div>
  );
}