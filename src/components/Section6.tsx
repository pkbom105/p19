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

export default function Section6() {
  return (
    <>
      {/* Location section above map */}
      <motion.section
        className="w-full py-16 px-4"
        style={{ backgroundColor: "#ffff" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Column 1 - Title + text + button 50% */}
            <motion.div variants={itemVariants}>
              <h2
                className="font-black mb-4 md:mb-6"
                style={{ fontSize: "clamp(36px, 8vw, 60px)", color: "#687369", fontFamily: "var(--font-sans)" }}
              >
                Location
              </h2>
              <p
                className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6"
                style={{ fontWeight: 300 }}
              >
                ตั้งอยู่ริมถนนติดซอยพุทธบูชา 19
                <br />
                ห่างจากริมถนนพระราม 2 ประมาณ 1.8 กม.
              </p>
              <a
                href="https://maps.google.com/?q=P19+Avenue+Putthabucha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 md:px-8 py-3 rounded-full text-white font-semibold text-base md:text-lg transition-colors"
                style={{ backgroundColor: "#687369" }}
              >
                ดูใน Google Maps
              </a>
            </motion.div>

            {/* Column 2- picture 50% */}
            <motion.div
              className="relative w-full aspect-[4/3] md:aspect-[1/1] overflow-hidden rounded-lg"
              variants={itemVariants}
            >
              <Image
                src="/image/8.png"
                alt="P19 Avenue Layout"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map google map - no animation */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#ffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.8399277350245!2d100.46672547568922!3d13.667495599238558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a35befaeb6ab%3A0x736f878c5c10cfa6!2sP19%20Avenue%20Putthabucha!5e0!3m2!1sen!2sth!4v1782287699414!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="P19 Avenue Location"
            />
          </div>
        </div>
      </section>

      {/* 2 Column Text below map */}
      <motion.section
        className="w-full py-16 px-4"
        style={{ backgroundColor: "#ffff" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Column 1 */}
            <motion.div variants={itemVariants}>
              <h2
                className="font-thin mb-4 md:mb-6"
                style={{ fontSize: "clamp(44px, 10vw, 80px)", color: "#687369", fontFamily: "var(--font-sans)", lineHeight: 0.85 }}
              >
                P19<br></br>
                AVENUE<br></br>
                PUTTHABUCHA
              </h2>              
            </motion.div>

            {/* Column 2 */}
            <motion.div variants={itemVariants}>
              <h5
                className="font-black mb-4 md:mb-6"
                style={{ fontSize: "clamp(24px, 5vw, 30px)", color: "#687369", fontFamily: "var(--font-sans)" }}
              >
                CONTACT
              </h5>
              <div className="space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg">
                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 mt-1 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#687369"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p>
                    351/1 ถนนพุทธบูชา แขวงบางมด เขตจอมทอง กรุงเทพ 10150
                    
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 mt-1 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#687369"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <p>info.p19avenue@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}