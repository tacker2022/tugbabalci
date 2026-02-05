"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Users, CalendarCheck, ClipboardList, TrendingUp } from "lucide-react";

const expertiseItems = [
    {
        title: "Kurumsal İletişim",
        icon: Users,
        desc: "Kurum kültürünü yansıtan, iç ve dış paydaşlarla doğru, şeffaf ve etkili iletişim stratejileri.",
    },
    {
        title: "Organizasyon & Planlama",
        icon: CalendarCheck,
        desc: "Davet, toplantı ve etkinlik süreçlerinin A'dan Z'ye planlanması, kusursuz zaman yönetimi.",
    },
    {
        title: "Proje Koordinasyonu",
        icon: ClipboardList,
        desc: "Farklı birimler arası uyumu sağlayarak projelerin hedeflenen kalitede tamamlanması.",
    },
    {
        title: "Ekip ve Süreç Yönetimi",
        icon: TrendingUp,
        desc: "Ekiplerin motivasyonunu ve verimliliğini artırarak operasyonel süreçlerin sorunsuz işlemesini sağlamak.",
    },
];

export default function Expertise() {
    return (
        <SectionWrapper id="expertise" className="bg-background">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    Uzmanlık Alanları
                </h2>
                <p className="text-muted-foreground text-lg">
                    Profesyonel hayatta değer kattığım temel yetkinlikler.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {expertiseItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-card hover:bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-muted/40 hover:border-primary/20"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <item.icon size={24} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
