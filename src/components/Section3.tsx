"use client";

import Image from "next/image";

export default function Section3() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Full width background image */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/slide/p19-5.png"
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
          <h2
            className="text-white font-black mb-4"
            style={{ fontSize: "64px", fontFamily: "var(--font-sans)" }}
          >
            Be Our Next Partner ?
          </h2>
          <p
            className="text-white/80 max-w-xl"
            style={{ fontSize: "20px", fontFamily: "var(--font-sans)" }}
          >
            มาร่วมเป็นส่วนหนึ่งของ P19 Avenue — คอมมูนิตี้มอลล์ที่กำลังเติบโตบนถนนพุทธบูชา
          </p>
        </div>
      </div>
    </section>
  );
}