"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Section3() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Full width background image */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/image/bb1.png"
          alt="Be Our Next Partner"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Text content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.h2
            className="text-white font-black mb-4"
            style={{ fontSize: "64px", fontFamily: "var(--font-sans)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Be Our Next Partner ?
          </motion.h2>
          <motion.p
            className="text-white/80 max-w-xl"
            style={{ fontSize: "20px", fontFamily: "var(--font-sans)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            มาร่วมเป็นส่วนหนึ่งของ P19 Avenue — สนใจพื้นที่ติดต่อ
          </motion.p>
        </div>
      </div>
    </section>
  );
}
