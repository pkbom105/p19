"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { src: "/image/1.png", alt: "Coffee and Tea", label: "Coffee and Tea" },
  { src: "/image/2.png", alt: "Food and Beverage", label: "Food and Beverage" },
  { src: "/image/3.png", alt: "Service and Massage", label: "Service and Massage" },
  { src: "/image/4.png", alt: "Beauty and Salon", label: "Beauty and Salon" },
  { src: "/image/5.png", alt: "Activities - Pilates", label: "Activities - Pilates" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.26,
      delayChildren: 1.0,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Section2() {
  return (
    <section className="w-full py-12 md:py-16 px-4" style={{ backgroundColor: "#ebeae2" }}>
      <div className="max-w-6xl mx-auto">
        {/* Title - responsive sizes */}
        <div className="mb-8 md:mb-12" style={{ lineHeight: 1.1 }}>
          <motion.h2
            className="text-start font-black"
            style={{ fontSize: "clamp(40px, 10vw, 90px)", color: "#687369", fontFamily: "var(--font-sans)" }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0, y: [0, -6, 0, -4, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", y: { duration: 0.4, ease: "easeInOut", delay: 0.8 } }}
          >
            Your Neibourhood Mall
          </motion.h2>
          <motion.p
            className="relative z-10 text-start"
            style={{ fontSize: "clamp(28px, 7vw, 60px)", color: "#ffc657", fontFamily: "var(--font-buffalo)", fontWeight: 400, lineHeight: 0.9 }}
            whileInView={{ y: [0, -8, 0] }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            where you can stop by and enjoy
          </motion.p>
        </div>

        {/* 2 cols on mobile, 5 cols on desktop */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((item) => (
            <motion.div key={item.src} className="flex flex-col items-center" variants={itemVariants}>
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 20vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 md:mt-4 text-sm md:text-lg text-gray-600 text-center" style={{ fontWeight: 400 }}>
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}