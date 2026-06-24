"use client";

import Image from "next/image";

export default function Section6() {
  return (
    <>
      {/* Map - max-w-6xl centered */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#ffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-[500px] overflow-hidden rounded-lg">
            <Image
              src="/image/map-p19.png"
              alt="P19 Avenue Map"
              width={1920}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2 Column Text below map */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#ffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Column 1 */}
            <div>
              <h2
                className="font-black mb-6"
                style={{ fontSize: "60px", color: "#687369", fontFamily: "var(--font-sans)" }}
              >
                GET IN TOUCH
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>258 ถนนพุทธบูชา แขวงบางมด</p>
                <p>เขตจอมทอง กรุงเทพฯ 10150</p>
                <p className="mt-6">Tel: 02-428-2591</p>
                <p>Email: info@p19avenue.com</p>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h2
                className="font-black mb-6"
                style={{ fontSize: "60px", color: "#687369", fontFamily: "var(--font-sans)" }}
              >
                OPENING HOURS
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>Monday - Friday: 08:00 - 22:00</p>
                <p>Saturday - Sunday: 09:00 - 22:00</p>
                <p className="mt-6 text-gray-400 italic">* Open daily including public holidays</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
