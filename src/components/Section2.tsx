"use client";

import Image from "next/image";

const items = [
  { src: "/image/1.png", alt: "Coffee and Tea", label: "Coffee and Tea" },
  { src: "/image/2.png", alt: "Food and Beverage", label: "Food and Beverage" },
  { src: "/image/3.png", alt: "Service and Massage", label: "Service and Massage" },
  { src: "/image/4.png", alt: "Beauty and Salon", label: "Beauty and Salon" },
  { src: "/image/5.png", alt: "Activities - Pilates", label: "Activities - Pilates" },
];

export default function Section2() {
  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: "#ebeae2" }}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12" style={{ lineHeight: 0.5 }}>
          <h2
            className="text-start font-black"
            style={{ fontSize: "90px", color: "#687369", fontFamily: "var(--font-sans)" }}
          >
            Your Neibourhood Mall
          </h2>
          <p
            className="relative z-10 text-start"
            style={{ fontSize: "60px", color: "#ffc657", fontFamily: "var(--font-buffalo)", fontWeight: 400, lineHeight: 0.8 }}
          >
            where you can stop by and enjoy
          </p>
        </div>

        {/* 5-column grid */}
        <div className="grid grid-cols-5 gap-4">
          {items.map((item) => (
            <div key={item.src} className="flex flex-col items-center">
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600 text-lg text-center" style={{ fontWeight: 400 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}