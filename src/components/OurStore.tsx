const stores = [
  {
    id: 1,
    name: "Cafe Amazon",
    subtitle: "ร้านกาแฟสัญชาติไทย ครบรส",
    time: "06:00 - 19:00 น.",
    image: "/store/amazon/a4.jpg",
    link: "/store/cafeamazon-p19",
  },
  {
    id: 2,
    name: "Li Hua",
    subtitle: "ข้าวหมูแดง บะหมี่หมูแดง สไตล์ฮ่องกง",
    time: "11:00 - 22:00 น.",
    image: "/store/lihua/l1.jpg",
    link: "/store/lihua",
  },
  {
    id: 3,
    name: "Beyond",
    subtitle: "ร้านทำสี ยืด ดัด และตัดผมชาย-หญิง",
    time: "09:30 - 19:30 น.",
    image: "/store/beyond/b1.jpg",
    link: "/store/beyond",
  },
  {
    id: 4,
    name: "Velaa",
    subtitle: "ร้านอาหารเพื่อสุขภาพ & คาเฟ่",
    time: "07:00 - 20:00 น.",
    image: "/store/velaa/v1.jpg",
    link: "/store/velaa",
  },
  {
    id: 5,
    name: "Chaanin",
    subtitle: "CHAA-NIN Massage | นวดเพื่อสุขภาพ",
    time: "10:00 - 20:00 น.",
    image: "/store/chaanin/ch2.jpg",
    link: "/store/chaanin",
  },
  {
    id: 6,
    name: "Curf Studio",
    subtitle: "Private Pilates | Your Beloved Cosy Wellness Studio",
    time: "7:00 - 21:00 น.",
    image: "/store/curf/c2.jpg",
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
              className="flex items-center gap-6 bg-white rounded-2xl p-6 hover:bg-gray-100 transition-colors group"
            >
              {/* Thumbnail */}
              <div className="w-45 h-30 rounded-xl overflow-hidden flex-shrink-0">
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