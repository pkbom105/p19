"use client";

import Image from "next/image";

const items = [
  { src: "/slide/p19-1.png", alt: "Image 1", label: "Label 1" },
  { src: "/slide/p19-2.png", alt: "Image 2", label: "Label 2" },
  { src: "/slide/p19-3.png", alt: "Image 3", label: "Label 3" },
  { src: "/slide/p19-4.png", alt: "Image 4", label: "Label 4" },
  { src: "/slide/p19-5.png", alt: "Image 5", label: "Label 5" },
];

export default function Section2() {
  return (
    <section
      className="w-full flex items-center justify-center"
      style={{ backgroundColor: "#91c73e", height: "800px" }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Title */}
        <h2
          className="text-white text-center mb-16"
          style={{ fontSize: "100px", fontWeight: 900 }}
        >
          Your Neibourhood Mall
        </h2>

        {/* 5-column grid */}
        <div className="grid grid-cols-5 gap-2">
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
              <p className="mt-4 text-white text-lg text-center" style={{ fontWeight: 400 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}