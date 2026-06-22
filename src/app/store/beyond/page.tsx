import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  logo: "/store/beyond-logo.jpg",
  title: "Beyond",
  subtitle: "ร้านทำสี ยืด ดัด และตัดผมชาย-หญิง",
  description:
    "ศูนย์ทำสี ยืด ดัด ครบวงจร มีบริการตัดผมชาย-หญิง พร้อมทีมช่างมืออาชีพ ดูแลเส้นผมให้สวยสุขภาพดี",
  time: "เปิดทุกวัน",
  heroImage:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
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
    "https://images.unsplash.com/photo-1634302081030-6a3e1a6b3b7b?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&h=450&fit=crop",
  ],
};

export default function BeyondPage() {
  return <StoreTemplate store={storeData} />;
}