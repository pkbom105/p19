"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Section5() {
  return (
    <div style={{ backgroundColor: "#fffbfa" }}>
      <div className="max-w-6xl mx-auto py-30">
        <section className="w-full px-4">
          {/* ===== DESKTOP LAYOUT (md+) ===== */}
          <motion.div
            className="hidden md:flex flex-col justify-center h-[800px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Row 1 - Picture on left side */}
            <motion.div className="flex justify-start mb-4" variants={itemVariants}>
              <div className="relative w-[300px] h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/image/6.png"
                  alt="ELEVATE left"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </motion.div>

            {/* Row 2 - ELEVATE */}
            <motion.h1
              className="font-thin text-center z-10"
              style={{
                fontSize: "clamp(4rem, 12vw, 10rem)",
                color: "#687369",
                letterSpacing: "0.5px",
                lineHeight: "0.2",
                fontFamily: "var(--font-sans)",
                marginLeft: "-280px",
              }}
              variants={itemVariants}
            >
              ELEVATE
            </motion.h1>

            {/* Row 3 - your (bouncing) */}
            <motion.h2
              className="font-thin text-center z-15"
              style={{
                fontSize: "250px",
                color: "#91c73e",
                letterSpacing: "0.3px",
                lineHeight: "0.2",
                fontFamily: "var(--font-buffalo)",
                marginLeft: "480px",
              }}
              variants={itemVariants}
              whileInView={{ y: [0, -10, 0] }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              your
            </motion.h2>

            {/* Row 4 - EVERY DAY */}
            <motion.h1
              className="font-thin text-center z-10"
              style={{
                fontSize: "clamp(4rem, 12vw, 10rem)",
                color: "#687369",
                letterSpacing: "1.2px",
                lineHeight: "1.8",
                fontFamily: "var(--font-sans)",
                marginLeft: "200px",
              }}
              variants={itemVariants}
            >
              EVERY DAY
            </motion.h1>

            {/* Row 5 - Picture on right side */}
            <motion.div className="flex justify-end z-8" style={{ marginTop: "-130px" }} variants={itemVariants}>
              <div className="relative w-[300px] h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/image/8.png"
                  alt="ELEVATE right"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ===== MOBILE LAYOUT (<md) ===== */}
          <motion.div
            className="md:hidden flex flex-col items-center justify-center min-h-[70vh] py-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* ELEVATE */}
            <motion.h1
              className="font-thin text-center z-10 w-full"
              style={{
                fontSize: "clamp(2.8rem, 14vw, 4.5rem)",
                color: "#687369",
                letterSpacing: "0.5px",
                lineHeight: "1",
                fontFamily: "var(--font-sans)",
              }}
              variants={itemVariants}
            >
              ELEVATE
            </motion.h1>

            {/* your (bouncing) */}
            <motion.h2
              className="font-thin text-center z-15 mt-2 w-full"
              style={{
                fontSize: "clamp(44px, 16vw, 85px)",
                color: "#91c73e",
                letterSpacing: "0.3px",
                lineHeight: "0.9",
                fontFamily: "var(--font-buffalo)",
              }}
              variants={itemVariants}
              whileInView={{ y: [0, -10, 0] }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              your
            </motion.h2>

            {/* EVERY DAY */}
            <motion.h1
              className="font-thin text-center z-10 mt-1 w-full"
              style={{
                fontSize: "clamp(2.2rem, 11vw, 3.8rem)",
                color: "#687369",
                letterSpacing: "1.2px",
                lineHeight: "1.3",
                fontFamily: "var(--font-sans)",
              }}
              variants={itemVariants}
            >
              EVERY DAY
            </motion.h1>

            {/* Picture centered */}
            <motion.div className="flex justify-center z-8 mt-6" variants={itemVariants}>
              <div className="relative w-[200px] h-[200px] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/image/8.png"
                  alt="ELEVATE"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}