"use client";

export default function Section1() {
  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: "#fffefa" }}>
      <div className="max-w-6xl mx-auto">
        <h4
          className="text-center md:text-center"
          style={{ fontSize: "30px", color: "#687369", fontFamily: "var(--font-sans)", fontWeight: 300, lineHeight: 1.8 }}
        >
          โครงการ P19 Avenue ตั้งอยู่บนถนนพุทธบูชาติดซอย19
          <br />
          เป็นคอมมูนิตี้มอลเล็กๆใกล้บ้านคุณที่เข้ามาเติมเต็มชีวิตคนย่านนี้
        </h4>
        <h3
          className="mt-6 text-center"
          style={{ fontSize: "66px", color: "#91c73e", fontFamily: "var(--font-buffalo)", fontWeight: 400, lineHeight: 1.3 }}
        >
          &ldquo;Fulfilling Every Moment of Your Day.&rdquo;
        </h3>
        <div className="text-center">
          <button
            className="mt-8 px-8 py-3 rounded-full text-white font-semibold text-lg transition-colors"
            style={{ backgroundColor: "#687369" }}
          >
            สนใจสอบถาม
          </button>
        </div>
      </div>
    </section>
  );
}