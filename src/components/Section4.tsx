"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    {/* Section 1 - FACILITY */}
    <section className="w-full" style={{ backgroundColor: "#ffff" }}>
      <div className="max-w-6xl mx-auto py-10 md:py-15">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] min-h-[300px] md:min-h-[600px]">
          {/* Left - Picture: scale from small to big */}
          <motion.div
            className="relative w-full h-full min-h-[250px] md:min-h-[600px] overflow-hidden"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/image/6.png"
              alt="P19 Avenue Facility"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* Right - Text: slide from right */}
          <motion.div
            className="flex flex-col px-6 md:px-12 py-8 md:py-16"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h2
              className="font-black mb-6 md:mb-12"
              style={{ fontSize: "clamp(36px, 8vw, 60px)", color: "#687369", fontFamily: "var(--font-sans)" }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              FACILITY
            </motion.h2>

            <motion.div
              className="space-y-6 md:space-y-8 w-full"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.26, delayChildren: 1.0 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
                }}
              >
                <hr className="border-t-2 border-gray-400 mb-3 md:mb-4 w-full" />
                <div className="flex items-baseline justify-between md:justify-start md:gap-120">
                  <span className="text-3xl md:text-5xl font-black text-gray-700">4000</span>
                  <span className="text-lg md:text-2xl text-gray-500">sqm.</span>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
                }}
              >
                <hr className="border-t-2 border-gray-400 mb-3 md:mb-4 w-full" />
                <div className="flex items-baseline justify-between md:justify-start md:gap-139">
                  <span className="text-3xl md:text-5xl font-black text-gray-700">6</span>
                  <span className="text-lg md:text-2xl text-gray-500">stores</span>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
                }}
              >
                <hr className="border-t-2 border-gray-400 mb-3 md:mb-4 w-full" />
                <div className="flex items-baseline justify-between md:justify-start md:gap-117">
                  <span className="text-3xl md:text-5xl font-black text-gray-700">35</span>
                  <span className="text-lg md:text-2xl text-gray-500">Parking Unit</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Section 2 - TRAFFIC (Reversed layout) */}
    <section className="w-full" style={{ backgroundColor: "#ebeae2" }}>
      <div className="max-w-6xl mx-auto py-10 md:py-15">
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] min-h-[300px] md:min-h-[600px]">
          {/* Left - Text: slide from left */}
          <motion.div
            className="flex flex-col px-6 md:px-12 py-8 md:py-16 order-2 md:order-1"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h2
              className="font-black mb-6 md:mb-12"
              style={{ fontSize: "clamp(36px, 8vw, 60px)", color: "#687369", fontFamily: "var(--font-sans)" }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              TRAFFIC
            </motion.h2>

            <motion.div
              className="space-y-6 md:space-y-8 w-full"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.26, delayChildren: 1.0 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
                }}
              >
                <hr className="border-t-2 border-gray-400 mb-3 md:mb-4 w-full" />
                <div className="flex items-baseline justify-between md:justify-start md:gap-80">
                  <span className="text-3xl md:text-5xl font-black text-gray-700">20-30K</span>
                  <span className="text-lg md:text-2xl text-gray-500">Cars Traffic/Day</span>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
                }}
              >
                <hr className="border-t-2 border-gray-400 mb-3 md:mb-4 w-full" />
                <div className="flex items-baseline justify-between md:justify-start md:gap-108">
                  <span className="text-3xl md:text-5xl font-black text-gray-700">10</span>
                  <span className="text-lg md:text-2xl text-gray-500">Avaliable Units</span>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
                }}
              >
                <hr className="border-t-2 border-gray-400 mb-3 md:mb-4 w-full" />
                <div className="flex items-baseline justify-between md:justify-start md:gap-105">
                  <span className="text-3xl md:text-5xl font-black text-gray-700">35%</span>
                  <span className="text-lg md:text-2xl text-gray-500">Completion</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Picture: scale from small to big */}
          <motion.div
            className="relative w-full h-full min-h-[250px] md:min-h-[600px] overflow-hidden order-1 md:order-2"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/image/7.png"
              alt="P19 Avenue Location"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Section 3 - VIBE 2x2 Picture Grid */}
    <section className="w-full py-10 md:py-16 px-4" style={{ backgroundColor: "#ffff" }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-start mb-6 md:mb-12 font-black"
          style={{ fontSize: "clamp(40px, 10vw, 90px)", color: "#687369", fontFamily: "var(--font-sans)" }}
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          VIBE
        </motion.h2>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {[
            { src: "/store/amazon/a1.jpg", alt: "Cafe Amazon", link: "/store/cafeamazon-p19" },
            { src: "/store/lihua/l2.jpg", alt: "Li Hua", link: "/store/lihua" },
            { src: "/store/beyond/b4.jpg", alt: "Beyond", link: "/store/beyond" },
            { src: "/store/velaa/v1.jpg", alt: "Velaa", link: "/store/velaa" },
          ].map((img, i) => (
            <motion.a
              key={img.alt}
              href={img.link}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-lg group block"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Badge */}
              <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 bg-black/60 text-white text-xs font-semibold px-2 md:px-3 py-1 rounded-full backdrop-blur-sm">
                {img.alt}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>    
    </>
  );
}