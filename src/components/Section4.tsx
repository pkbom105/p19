"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const stores = [
  {
    id: 1,
    name: "Cafe Amazon",
    subtitle: "ร้านกาแฟสัญชาติไทย ครบรส",
    time: "06:00 - 22:00 น.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop",
    link: "/store/cafeamazon-p19",
  },
  {
    id: 2,
    name: "Li Hua",
    subtitle: "ข้าวหมูแดง บะหมี่หมูแดง สไตล์ฮ่องกง",
    time: "11:00 - 22:00 น.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=200&h=200&fit=crop",
    link: "/store/lihua",
  },
  {
    id: 3,
    name: "Beyond",
    subtitle: "ร้านทำสี ยืด ดัด และตัดผมชาย-หญิง",
    time: "เปิดทุกวัน",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&h=200&fit=crop",
    link: "/store/beyond",
  },
  {
    id: 4,
    name: "Velaa",
    subtitle: "ร้านอาหารเพื่อสุขภาพ & คาเฟ่",
    time: "7:00 - 20:00 น.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop",
    link: "/store/velaa",
  },
  {
    id: 5,
    name: "Chaanin",
    subtitle: "CHAA-NIN Massage | นวดเพื่อสุขภาพ",
    time: "10:00 - 20:00 น.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&h=200&fit=crop",
    link: "/store/chaanin",
  },
  {
    id: 6,
    name: "Curf Studio",
    subtitle: "Private Pilates | Your Beloved Cosy Wellness Studio",
    time: "7:00 - 21:00 น.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&h=200&fit=crop",
    link: "/store/curf-studio",
  },
];

export default function Section4() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    {/* Section 1 -  layout */}
    <section className="w-full" style={{ backgroundColor: "#ffff" }}>
      <div className="max-w-6xl mx-auto py-15">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] min-h-[600px]">
          {/* Left - Picture spans full height */}
          <div className="relative w-full h-full min-h-[600px] overflow-hidden">
            <Image
              src="/image/6.png"
              alt="P19 Avenue Facility"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>

          {/* Right - Text spans full width */}
          <div className="flex flex-col px-12 py-16">
            <h2
              className="font-black mb-12"
              style={{ fontSize: "60px", color: "#687369", fontFamily: "var(--font-sans)" }}
            >
              FACILITY
            </h2>

            <div className="space-y-8 w-full">
              <div>
                <hr className="border-t-2 border-gray-400 mb-4 w-full" />
                <div className="flex items-baseline gap-120">
                  <span className="text-5xl font-black text-gray-700">4000</span>
                  <span className="text-2xl text-gray-500 text-end">sqm.</span>
                </div>
              </div>

              <div>
                <hr className="border-t-2 border-gray-400 mb-4 w-full" />
                <div className="flex items-baseline gap-139">
                  <span className="text-5xl font-black text-gray-700">6</span>
                  <span className="text-2xl text-gray-500">stores</span>
                </div>
              </div>

              <div>
                <hr className="border-t-2 border-gray-400 mb-4 w-full" />
                <div className="flex items-baseline gap-117">
                  <span className="text-5xl font-black text-gray-700">35</span>
                  <span className="text-2xl text-gray-500">Parking Unit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 2 - Reversed layout */}
    <section className="w-full" style={{ backgroundColor: "#ebeae2" }}>
      <div className="max-w-6xl mx-auto py-15">
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] min-h-[600px]">
          {/* Left - Text spans full width */}
          <div className="flex flex-col px-12 py-16 order-2 md:order-1">
            <h2
              className="font-black mb-12"
              style={{ fontSize: "60px", color: "#687369", fontFamily: "var(--font-sans)" }}
            >
              TRAFFIC
            </h2>

            <div className="space-y-8 w-full">
              <div>
                <hr className="border-t-2 border-gray-400 mb-4 w-full" />
                <div className="flex items-baseline gap-80">
                  <span className="text-5xl font-black text-gray-700">20-30K</span>
                  <span className="text-2xl text-gray-500">Cars Traffic/Day</span>
                </div>
              </div>

              <div>
                <hr className="border-t-2 border-gray-400 mb-4 w-full" />
                <div className="flex items-baseline gap-108">
                  <span className="text-5xl font-black text-gray-700">10</span>
                  <span className="text-2xl text-gray-500">Avaliable Units</span>
                </div>
              </div>

              <div>
                <hr className="border-t-2 border-gray-400 mb-4 w-full" />
                <div className="flex items-baseline gap-105">
                  <span className="text-5xl font-black text-gray-700">35%</span>
                  <span className="text-2xl text-gray-500">Completion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Picture spans full height */}
          <div className="relative w-full h-full min-h-[600px] overflow-hidden order-1 md:order-2">
            <Image
              src="/image/7.png"
              alt="P19 Avenue Location"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Section 3 - VIBE 2x2 Picture Grid */}
    <section className="w-full py-16 px-4" style={{ backgroundColor: "#ffff" }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-start mb-12 font-black"
          style={{ fontSize: "90px", color: "#687369", fontFamily: "var(--font-sans)" }}
        >
          VIBE
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {[
            { src: "/store/amazon/a1.jpg", alt: "Cafe Amazon", link: "/store/cafeamazon-p19" },
            { src: "/store/lihua/l2.jpg", alt: "Li Hua", link: "/store/lihua" },
            { src: "/store/beyond/b4.jpg", alt: "Beyond", link: "/store/beyond" },
            { src: "/store/velaa/v1.jpg", alt: "Velaa", link: "/store/velaa" },
          ].map((img) => (
            <a
              key={img.alt}
              href={img.link}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-lg group block"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Badge */}
              <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                {img.alt}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>    
    </>
  );
}
