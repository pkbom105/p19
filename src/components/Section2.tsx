"use client";

import Image from "next/image";

const items = [
  { src: "/store/amazon/a3.jpg", alt: "Coffee and Tea", label: "Coffee and Tea" },
  { src: "/store/velaa/v3.jpg", alt: "Food and Beverage", label: "Food and Beverage" },
  { src: "/store/chaanin/ch4.jpg", alt: "Service and Massage", label: "Service and Massage" },
  { src: "/store/beyond/b4.jpg", alt: "Beauty and Salon", label: "Beauty and Salon" },
  { src: "/store/curf/c3.jpg", alt: "Activities - Pilates", label: "Activities - Pilates" },
];

export default function Section2() {
  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: "#ebeae2" }}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          className="text-start mb-12 font-black"
          style={{ fontSize: "90px", color: "#687369", fontFamily: "var(--font-sans)" }}
        >
          Your Neibourhood Mall
        </h2>

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