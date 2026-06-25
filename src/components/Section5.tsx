"use client";

import Image from "next/image";

export default function Section5() {
  return (
    <div style={{ backgroundColor: "#fffbfa" }}>
      <div className="max-w-6xl mx-auto py-30">
        <section className="w-full px-4">
          <div className="h-[800px] flex flex-col justify-center">
            {/* Row 1 - Picture on left side */}
            <div className="flex justify-start mb-4">
              <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/image/6.png"
                  alt="ELEVATE left"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 200px, 300px"
                />
              </div>
            </div>

            {/* Row 2 - ELEVATE */}
            <h1
              className="font-thin text-center z-10"
              style={{
                fontSize: "clamp(4rem, 12vw, 10rem)",
                color: "#687369",
                letterSpacing: "0.5px",
                lineHeight: "0.2",
                fontFamily: "var(--font-sans)",
                marginLeft: "-280px",
              }}
            >
              ELEVATE
            </h1>

            {/* Row 3 - your */}
            <h2
              className="font-thin text-center z-15"
              style={{
                fontSize: "250px",
                color: "#91c73e",
                letterSpacing: "0.3px",
                lineHeight: "0.2",
                fontFamily: "var(--font-buffalo)",
                marginLeft: "480px",
              }}
            >
              your
            </h2>

            {/* Row 4 - EVERY DAY */}
            <h1
              className="font-thin text-center z-10"
              style={{
                fontSize: "clamp(4rem, 12vw, 10rem)",
                color: "#687369",
                letterSpacing: "1.2px",
                lineHeight: "1.8",
                fontFamily: "var(--font-sans)",
                marginLeft: "200px",
              }}
            >
              EVERY DAY
            </h1>

            {/* Row 5 - Picture on right side */}
            <div className="flex justify-end z-8" style={{ marginTop: "-130px" }}>
              <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/image/8.png"
                  alt="ELEVATE right"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 200px, 300px"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}