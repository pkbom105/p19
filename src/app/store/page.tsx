import Link from "next/link";

const stores = [
  {
    id: 1,
    name: "Cafe Amazon",
    subtitle: "ร้านกาแฟสัญชาติไทย ครบรส",
    time: "06:00 - 22:00 น.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop",
    link: "/store/cafeamazon-p19",
  },
  {
    id: 2,
    name: "Li Hua",
    subtitle: "ข้าวหมูแดง บะหมี่หมูแดง สไตล์ฮ่องกง",
    time: "11:00 - 22:00 น.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=400&fit=crop",
    link: "/store/lihua",
  },
  {
    id: 3,
    name: "Beyond",
    subtitle: "ร้านทำสี ยืด ดัด และตัดผมชาย-หญิง",
    time: "เปิดทุกวัน",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop",
    link: "/store/beyond",
  },
  {
    id: 4,
    name: "Velaa",
    subtitle: "ร้านอาหารเพื่อสุขภาพ & คาเฟ่",
    time: "7:00 - 20:00 น.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
    link: "/store/velaa",
  },
  {
    id: 5,
    name: "Chaanin",
    subtitle: "CHAA-NIN Massage | นวดเพื่อสุขภาพ",
    time: "10:00 - 20:00 น.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop",
    link: "/store/chaanin",
  },
  {
    id: 6,
    name: "Curf Studio",
    subtitle: "Private Pilates | Your Beloved Cosy Wellness Studio",
    time: "7:00 - 21:00 น.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
    link: "/store/curf-studio",
  },
];

export default function StoreDirectory() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-4xl text-center mb-4 text-gray-800 font-black"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Our Store
          </h1>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            รวมร้านค้าและบริการทั้งหมดใน P19 Avenue
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <Link
                key={store.id}
                href={store.link}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{store.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{store.subtitle}</p>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                    {store.time}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}