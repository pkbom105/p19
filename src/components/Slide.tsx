"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  { src: "/slide/p19-1.png", alt: "Slide 1" },
  { src: "/slide/p19-2.png", alt: "Slide 2" },
  { src: "/slide/p19-3.png", alt: "Slide 3" },
  { src: "/slide/p19-4.png", alt: "Slide 4" },
  { src: "/slide/p19-5.png", alt: "Slide 5" },
];

export default function Slide() {
  return (
    <div className="w-full">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      {/* Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
        {/* Carousel (bottom layer) */}
        <div className="absolute inset-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 8000,
              }),
            ]}
          >
            <CarouselContent className="-ml-0">
              {slides.map((slide) => (
                <CarouselItem key={slide.src} className="pl-0">
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      loading={slide.src === "/slide/p19-1.png" ? "eager" : "lazy"}
                      priority={slide.src === "/slide/p19-1.png"}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Foreground p19-fg overlay (z-20) */}
        <div
          className="absolute inset-0 z-20 bg-cover bg-center"
          style={{ backgroundImage: "url(/slide/p19-fg.png)" }}
        />
        {/* Text overlay P19 Avenue - on top (z-10) */}
        <div className="absolute inset-0 z-10 flex justify-center mt-[150px]">
          <p className="text-white drop-shadow-lg" style={{ fontSize: "220px", fontFamily: "Roboto, sans-serif", fontWeight: 900, fontVariationSettings: '"wdth" 650' }}>
            P19 AVENUE
          </p>
        </div>
         {/* Text overlay Putthabucha - below (z-30) */}
        <div className="absolute inset-0 z-30 flex justify-center mt-[400px] ml-[850px]">
          <p
            className="drop-shadow-lg"
            style={{ fontSize: "100px", fontFamily: "Corinthia, cursive", lineHeight: 1, color: "#ffc657" }}
          >
            Putthabucha
          </p>
        </div>
      </div>
    </div>
  );
}