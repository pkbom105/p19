import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  title: "Li Hua",
  subtitle: "ลี่ฮัว - ข้าวหมูแดง บะหมี่หมูแดง สไตล์ฮ่องกง",
  description:
    "ร้านอาหารสไตล์ฮ่องกง P19 Avenue เมนูเด็ดข้าวหมูแดง บะหมี่หมูแดง หมูแดงสไตล์ฮ่องกงแท้ รสชาติต้นตำรับ",
  time: "11:00 - 22:00 น.",
  heroImage:
    "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=600&fit=crop",
  section2: {
    type: "menu" as const,
    items: [
      { name: "🥩 ข้าวหมูแดง", description: "ข้าวหมูแดงสไตล์ฮ่องกง น้ำราดสูตรพิเศษ", price: "" },
      { name: "🍜 บะหมี่หมูแดง", description: "บะหมี่หมูแดงสไตล์ฮ่องกง", price: "" },
      { name: "📞 โทรศัพท์", description: "061-4292156", price: "" },
      { name: "📍 ที่ตั้ง", description: "P19 Avenue", price: "" },
      { name: "Facebook", description: "Li Hua ลี่ฮัว", price: "" },
      { name: "เวลาเปิด", description: "11:00 - 22:00 น.", price: "" },
    ],
  },
  galleryImages: [
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&h=450&fit=crop",
  ],
};

export default function LiHuaPage() {
  return <StoreTemplate store={storeData} />;
}