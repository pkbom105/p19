import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  logo: "/store/logo-tenant-A1-Beyond.jpg",
  title: "Beyond",
  subtitle: "ร้านทำสี ยืด ดัด และตัดผมชาย-หญิง",
  description:
    "ศูนย์ทำสี ยืด ดัด ครบวงจร มีบริการตัดผมชาย-หญิง พร้อมทีมช่างมืออาชีพ ดูแลเส้นผมให้สวยสุขภาพดี",
  time: "09:00 - 20:00 น.",
  hours: "Everyday  09:00 - 20:00",
  phone: "081-8855809",
  email: "beyondsalonbeauty@gmail.com",
  lineId: "@beyondsalon",
  instagram: "beyondsalonbeauty",
  facebookUrl: "https://www.facebook.com/beyondsalonbeauty",
  facebookName: "Beyond Salon Beauty",
  heroImage: "/store/beyond/b1.jpg",
  section2: {
    type: "menu" as const,
    items: [
      { name: "📍 สาขา 1", description: "ปากซอยบางบอน 5 ซอย 5", price: "โทร 081-8855809" },
      { name: "📍 สาขา 2", description: "ปากซอยพุทธบูชา 19", price: "โทร 092-4180675" },
      { name: "📍 สาขา 3", description: "The Fourth สาย 4", price: "โทร 065-2252340" },
    ],
    images: [
      "/store/beyond/t1.png",
      "/store/beyond/t2.png",
    ],
  },
  galleryImages: [
    "/store/beyond/b1.jpg",
    "/store/beyond/b2.jpg",
    "/store/beyond/b3.jpg",
    "/store/beyond/b4.jpg",
  ],
};

export default function BeyondPage() {
  return <StoreTemplate store={storeData} />;
}