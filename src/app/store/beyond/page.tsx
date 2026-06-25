import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  logo: "/store/logo-tenant-A1-Beyond.jpg",
  title: "Beyond",
  subtitle: "ร้านทำสี ยืด ดัด และตัดผมชาย-หญิง",
  description:
    "ศูนย์ทำสี ยืด ดัด ครบวงจร มีบริการตัดผมชาย-หญิง พร้อมทีมช่างมืออาชีพ ดูแลเส้นผมให้สวยสุขภาพดี",
  time: "เปิดทุกวัน",
  heroImage: "/store/beyond/b1.jpg",
  section2: {
    type: "service" as const,
    items: [
      { name: "📍 สาขา 1", description: "ปากซอยบางบอน 5 ซอย 5", price: "โทร 081-8855809" },
      { name: "📍 สาขา 2", description: "ปากซอยพุทธบูชา 19", price: "โทร 092-4180675" },
      { name: "📍 สาขา 3", description: "The Fourth สาย 4", price: "โทร 065-2252340" },
      { name: "Instagram", description: "@beyondsalonbeauty", price: "" },
      { name: "Facebook", description: "Beyond Salon Beauty", price: "" },
      { name: "Line", description: "@beyondsalon คลิ๊กที่ lin.ee/ySgGDdP", price: "" },
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