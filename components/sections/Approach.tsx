"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ShieldCheck, Scale, HeartHandshake } from "lucide-react";

const values = [
    {
        title: "Güven",
        desc: "Her koşulda şeffaf, dürüst ve güvenilir bir iş ortağı olmak.",
        icon: ShieldCheck
    },
    {
        title: "Tutarlılık",
        desc: "Söz, eylem ve sonuçlarda sürdürülebilir bir kalite standardı.",
        icon: Scale
    },
    {
        title: "İnsan İlişkileri",
        desc: "Empati ve saygı çerçevesinde uzun soluklu bağlar kurmak.",
        icon: HeartHandshake
    },
];

export default function Approach() {
    return (
        <SectionWrapper id="vision" className="bg-secondary text-secondary-foreground relative overflow-hidden py-24 lg:py-32">
            {/* Background Decor - Premium Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* Subtle Texture Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

            <div className="relative z-10 max-w-5xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
                            "Kalite, <span className="text-primary italic">ayrıntılarda</span> gizlidir."
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
                        <p className="text-gray-300 leading-relaxed text-lg md:text-xl max-w-2xl mx-auto font-light">
                            Benim için profesyonellik, yalnızca işi tamamlamak değil; o işe ruhunu,
                            ciddiyetini ve zarafetini katarak değer yaratmaktır.
                        </p>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (i * 0.15), duration: 0.5 }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
                        >
                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary-foreground transition-all duration-500">
                                    <val.icon size={28} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl font-serif font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                                    {val.title}
                                </h3>

                                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">
                                    {val.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
}
