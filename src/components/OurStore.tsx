"use client";

import { motion } from "framer-motion";

const stores = [
  {
    id: 1,
    name: "Cafe Amazon",
    subtitle: "ร้านกาแฟสัญชาติไทย ครบรส",
    time: "06:00 - 19:00 น.",
    image: "/store-img/amazon/a4.jpg",
    link: "/store/cafeamazon-p19",
  },
  {
    id: 2,
    name: "Li Hua",
    subtitle: "ข้าวหมูแดง บะหมี่หมูแดง สไตล์ฮ่องกง",
    time: "11:00 - 22:00 น.",
    image: "/store-img/lihua/l1.jpg",
    link: "/store/lihua",
  },
  {
    id: 3,
    name: "Beyond",
    subtitle: "ร้านทำสี ยืด ดัด และตัดผมชาย-หญิง",
    time: "09:30 - 19:30 น.",
    image: "/store-img/beyond/b1.jpg",
    link: "/store/beyond",
  },
  {
    id: 4,
    name: "Velaa",
    subtitle: "ร้านอาหารเพื่อสุขภาพ & คาเฟ่",
    time: "07:00 - 20:00 น.",
    image: "/store-img/velaa/v1.jpg",
    link: "/store/velaa",
  },
  {
    id: 5,
    name: "Chaanin",
    subtitle: "CHAA-NIN Massage | นวดเพื่อสุขภาพ",
    time: "10:00 - 20:00 น.",
    image: "/store-img/chaanin/ch2.jpg",
    link: "/store/chaanin",
  },
  {
    id: 6,
    name: "Curf Studio",
    subtitle: "Private Pilates | Your Beloved Cosy Wellness Studio",
    time: "7:00 - 21:00 น.",
    image: "/store-img/curf/c2.jpg",
    link: "/store/curf-studio",
  },
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function OurStore() {
  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: "#ebeae2" }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl text-start mb-12 font-black"
          style={{ color: "#687369", fontFamily: "var(--font-sans)" }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OUR STORE
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {stores.map((store) => (
            <motion.a
              key={store.id}
              href={store.link}
              className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 bg-white rounded-2xl p-4 md:p-6 hover:bg-gray-100 transition-colors group"
              variants={itemVariants}
            >
              {/* Thumbnail - full width on mobile */}
              <div className="w-full md:w-45 h-48 md:h-38 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl text-gray-800 font-bold">{store.name}</h3>
                <p className="text-gray-500 text-sm">{store.subtitle}</p>
                <p className="text-gray-400 text-xs mt-1">{store.time}</p>
              </div>

              {/* Arrow */}
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 self-end md:self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}