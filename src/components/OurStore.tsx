const stores = [
  {
    id: 1,
    name: "Cafe Amazon",
    subtitle: "ร้านกาแฟสัญชาติไทย ครบรส",
    time: "06:00 - 22:00 น.",
    image: "/store/logo-tenant-B1-Cafe%20Amazon.jpg",
    link: "/store/cafeamazon-p19",
  },
  {
    id: 2,
    name: "Li Hua",
    subtitle: "ข้าวหมูแดง บะหมี่หมูแดง สไตล์ฮ่องกง",
    time: "11:00 - 22:00 น.",
    image: "/store/logo-tenant-B2-Lihua.jpg",
    link: "/store/lihua",
  },
  {
    id: 3,
    name: "Beyond",
    subtitle: "ร้านทำสี ยืด ดัด และตัดผมชาย-หญิง",
    time: "เปิดทุกวัน",
    image: "/store/logo-tenant-A1-Beyond.jpg",
    link: "/store/beyond",
  },
  {
    id: 4,
    name: "Velaa",
    subtitle: "ร้านอาหารเพื่อสุขภาพ & คาเฟ่",
    time: "7:00 - 20:00 น.",
    image: "/store/logo-tenant-A3-Velaa.jpg",
    link: "/store/velaa",
  },
  {
    id: 5,
    name: "Chaanin",
    subtitle: "CHAA-NIN Massage | นวดเพื่อสุขภาพ",
    time: "10:00 - 20:00 น.",
    image: "/store/logo-tenant-A4-Chanin.jpg",
    link: "/store/chaanin",
  },
  {
    id: 6,
    name: "Curf Studio",
    subtitle: "Private Pilates | Your Beloved Cosy Wellness Studio",
    time: "7:00 - 21:00 น.",
    image: "/store/logo-tenant-A5-Curf%20Studio.jpg",
    link: "/store/curf-studio",
  },
];

export default function OurStore() {
  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: "#ebeae2" }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl text-start mb-12 font-black"
          style={{ color: "#687369", fontFamily: "var(--font-sans)" }}
        >
          OUR STORE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stores.map((store) => (
            <a
              key={store.id}
              href={store.link}
              className="flex items-center gap-4 bg-white rounded-2xl p-4 hover:bg-gray-100 transition-colors group"
            >
              {/* Picture */}
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
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
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
