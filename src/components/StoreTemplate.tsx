"use client";

interface StoreItem {
  logo?: string;
  title: string;
  subtitle: string;
  description: string;
  time: string;
  heroImage: string;
  section2: {
    type: "menu" | "service" | "promotion";
    items: { name: string; description: string; price?: string }[];
  };
  galleryImages: string[];
}

interface StoreTemplateProps {
  store: StoreItem;
}

export default function StoreTemplate({ store }: StoreTemplateProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
            <div className="flex items-center gap-2 text-gray-500 pt-2">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">{store.time}</span>
            </div>
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

      {/* Section 2: Menu / Service / Promotion */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#4185c5" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl text-center mb-12 text-white font-black"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {store.section2.type === "menu"
              ? "เมนู"
              : store.section2.type === "service"
              ? "บริการ"
              : "โปรโมชั่น"}
          </h2>

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
    </div>
  );
}