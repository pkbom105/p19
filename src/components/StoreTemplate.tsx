"use client";

import OurStore from "./OurStore";

interface StoreItem {
  logo?: string;
  title: string;
  subtitle: string;
  description: string;
  time: string;
  hours?: string;
  closedInfo?: string;
  bookingNotice?: string;
  phone?: string;
  email?: string;
  lineId?: string;
  instagram?: string;
  facebookUrl?: string;
  facebookName?: string;
  menuUrl?: string;
  heroImage: string;
  section2: {
    type: "menu" | "service" | "promotion";
    items: { name: string; description: string; price?: string }[];
    images?: string[];
  };
  galleryImages: string[];
}

interface StoreTemplateProps {
  store: StoreItem;
}

export default function StoreTemplate({ store }: StoreTemplateProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Section 1: Hero with 2 columns */}
      <section className="w-full py-16 px-4 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-center">
          {/* Left Column: Info */}
          <div className="space-y-4">
            {store.logo && (
              <img
                src={store.logo}
                alt={`${store.title} logo`}
                className="h-40 w-auto mb-2"
              />
            )}
            <h1
              className="text-5xl font-black tracking-tighter my-8"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 900 }}
            >
              {store.title}
            </h1>
            <p className="text-xl font-bold text-gray-600">{store.subtitle}</p>
            <p className="text-base text-gray-500 leading-relaxed">{store.description}</p>

            {/* Booking Notice */}
            {store.bookingNotice && (
              <div className="flex items-start gap-2 pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg text-sm">
                  {store.bookingNotice}
                </span>
              </div>
            )}

            {/* Hours (day range format) */}
            {store.hours && (
              <div className="flex items-start gap-2 text-gray-500 pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  {store.hours.split("\n").map((line, i) => (
                    <span key={i} className="font-medium block">{line}</span>
                  ))}
                  {store.closedInfo && (
                    <p className="text-red-500 font-medium mt-1">{store.closedInfo}</p>
                  )}
                </div>
              </div>
            )}

            {/* Phone */}
            {store.phone && (
              <div className="flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${store.phone.replace(/[^0-9]/g, "")}`}
                  className="font-medium text-blue-600 hover:underline"
                >
                  {store.phone}
                </a>
              </div>
            )}

            {/* Email */}
            {store.email && (
              <div className="flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${store.email}`}
                  className="font-medium text-blue-600 hover:underline"
                >
                  {store.email}
                </a>
              </div>
            )}

            {/* Facebook */}
            {store.facebookUrl && (
              <div className="flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <a
                  href={store.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline"
                >
                  {store.facebookName || "Facebook"}
                </a>
              </div>
            )}

            {/* Menu Button */}
            {store.menuUrl && (
              <div className="pt-2">
                <a
                  href={store.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#6B1414] text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5Z"/><path d="M8 7h8"/><path d="M8 11h6"/></svg>
                  ดูเมนู
                </a>
              </div>
            )}

            {/* Instagram */}
            {store.instagram && (
              <div className="flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <a
                  href={`https://instagram.com/${store.instagram.replace(/^@/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline"
                >
                  {store.instagram}
                </a>
              </div>
            )}

            {/* Line ID */}
            {store.lineId && (
              <div className="flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <a
                  href={`https://line.me/R/ti/p/${store.lineId.replace(/^@/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline"
                >
                  {store.lineId}
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={store.heroImage}
                alt={store.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Photos (ratio 3/4) */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#4185c5" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl text-center mb-12 text-white font-black"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {store.section2.type === "menu"
              ? "Hi-Light"
              : store.section2.type === "service"
              ? "บริการ"
              : "โปรโมชั่น"}
          </h2>

          {store.section2.images ? (
            <div className={`grid grid-cols-1 gap-6 ${store.section2.images!.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'}`}>
              {store.section2.images!.map((src, index) => (
                <div key={index} className={`${store.section2.images!.length === 2 ? 'aspect-square' : 'aspect-[3/4]'} rounded-2xl overflow-hidden shadow-md`}>
                  <img
                    src={src}
                    alt={`${store.title} ${store.section2.type} ${index + 1}`}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {store.section2.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  {item.price && (
                    <p className="text-lg font-bold text-gray-800 mt-3">{item.price}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Gallery Grid 2x2 */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl text-center mb-12 text-gray-800 font-black"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            แกลเลอรี่
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {store.galleryImages.map((src, index) => (
              <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <img
                  src={src}
                  alt={`${store.title} gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Store section before footer */}
      <OurStore />
    </main>
  );
}