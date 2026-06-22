import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  title: "Curf Studio",
  subtitle: "Your Beloved Cosy Wellness Studio | Private Pilates",
  description:
    "สตูดิโอพิลาทิสส่วนตัว บรรยากาศอบอุ่น ดูแลทุกการเคลื่อนไหว มีครูพิลาทิสที่ได้รับใบเซอร์และประสบการณ์มากมาย พร้อมอุปกรณ์คุณภาพจากแบรนด์ Elina เปิดให้บริการ 3 สาขา",
  time: "7:00 - 21:00 น.",
  heroImage:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
  section2: {
    type: "service" as const,
    items: [
      { name: "✨ สาขาราชพฤกษ์", description: "Private Class 1,100 บาท, Duo Class 1,900 บาท", price: "" },
      { name: "✨ สาขาบางแค", description: "ทดลอง Private Class 1,100 บาท/ครั้ง", price: "" },
      { name: "✨ สาขาพระราม 2", description: "ทดลอง Private Class 950 บาท/ครั้ง", price: "" },
      { name: "📞 โทรศัพท์", description: "080-0692799", price: "" },
      { name: "Instagram", description: "@curfstudio.pilates", price: "" },
      { name: "Line", description: "@curfstudio", price: "" },
    ],
  },
  galleryImages: [
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop",
  ],
};

export default function CurfStudioPage() {
  return <StoreTemplate store={storeData} />;
}