import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  title: "Chaanin",
  subtitle: "CHAA-NIN Massage | ชนินทร์ มาสสาจ",
  description:
    "ร้านนวดเพื่อสุขภาพ พุทธบูชา-พระราม 2 ให้บริการนวดแผนไทย นวดผ่อนคลาย ด้วยทีมนักนวดมืออาชีพ บรรยากาศเงียบสงบ เพื่อการพักผ่อนอย่างแท้จริง",
  time: "10:00 - 20:00 น.",
  heroImage:
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
  section2: {
    type: "service" as const,
    items: [
      { name: "📞 โทรศัพท์", description: "063-6368626", price: "" },
      { name: "📧 อีเมล", description: "chaanin.massage@gmail.com", price: "" },
      { name: "Instagram", description: "@chaanin.massage", price: "" },
      { name: "Facebook", description: "CHAA-NIN Massage", price: "" },
      { name: "Line ID", description: "@642ckhym", price: "" },
      { name: "TikTok", description: "@chaanin.massage", price: "" },
    ],
  },
  galleryImages: [
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=450&fit=crop",
  ],
};

export default function ChaaninPage() {
  return <StoreTemplate store={storeData} />;
}