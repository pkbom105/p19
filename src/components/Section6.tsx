"use client";

import Image from "next/image";

export default function Section6() {
  return (
    <>
      {/* Location section above map */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#ffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Column 1 - Title + text + button 50% */}
            <div>
              <h2
                className="font-black mb-6"
                style={{ fontSize: "60px", color: "#687369", fontFamily: "var(--font-sans)" }}
              >
                Location
              </h2>
              <p
                className="text-gray-700 text-lg leading-relaxed mb-6"
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
                className="inline-block px-8 py-3 rounded-full text-white font-semibold text-lg transition-colors"
                style={{ backgroundColor: "#687369" }}
              >
                ดูใน Google Maps
              </a>
            </div>

            {/* Column 2- picture 50% */}
            <div className="relative w-full aspect-[1/1] overflow-hidden rounded-lg">
              <Image
                src="/image/8.png"
                alt="P19 Avenue Layout"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map google map- max-w-6xl centered */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#ffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-[500px] overflow-hidden rounded-lg">
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
