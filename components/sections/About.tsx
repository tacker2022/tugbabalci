"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function About() {
    return (
        <SectionWrapper id="about" className="bg-white relative overflow-hidden py-24 lg:py-32">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                {/* Left Column: Photo Area */}
                <div className="lg:col-span-5 relative order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Decorative Frame/Border */}
                        <div className="absolute -inset-4 border border-primary/20 rounded-2xl md:translate-x-4 md:translate-y-4 z-0" />

                        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-2xl z-10">
                            <Image
                                src="/tugba-balci-hero.jpg"
                                alt="Tuğba Balcı"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-[2s] ease-in-out"
                            />
                            {/* Inner Gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Badge/Quote */}
                        <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-6 shadow-xl rounded-tr-3xl rounded-bl-3xl border-l-4 border-primary z-20 max-w-[200px] hidden md:block">
                            <p className="font-serif italic text-primary text-lg leading-tight">
                                "Zarafet, göze batmak değil, akılda kalmaktır."
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Content */}
                <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
                            Sıcak bir iletişim, <br />
                            <span className="text-primary italic relative">
                                güvenilir
                                <svg className="absolute w-full h-2 bottom-0 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span> bir duruş.
                        </h2>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                            <p className="first-letter:float-left first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:mt-[-10px] first-letter:leading-none">
                                Kariyerim boyunca kurumsal iletişim ve organizasyon yönetimi alanlarında, insan ilişkilerini merkeze alan bir vizyonla hareket ettim. Profesyonel hayatın gerektirdiği disiplin ve ciddiyeti, samimiyet ve güven duygusuyla harmanlayarak süreçleri yönetmeyi ilke edindim.
                            </p>
                            <p>
                                Sadece işleri organize etmek değil, kurumların ve projelerin <strong className="text-foreground font-medium">“yüzü”</strong> olabilmek; temsil ettiğim değerleri en doğru, en zarif ve en etkili şekilde yansıtmak benim uzmanlık alanım. Karmaşık süreçlerde dahi sakin kalabilen yapım, detaylara verdiğim önem ve çözüm odaklı yaklaşımım ile iş ortaklarıma konforlu bir çalışma süreci sunuyorum.
                            </p>
                            <p className="border-l-2 border-primary/30 pl-6 italic text-foreground/80">
                                İster büyük bir organizasyonun planlaması olsun, ister kurumsal bir temsil görevi; amacım her zaman <strong>“güven duyulan”</strong> ve <strong>“sonuç üreten”</strong> kişi olmaktır.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="pt-10 flex flex-col items-start gap-2">
                            <div className="h-px w-24 bg-gradient-to-r from-primary/50 to-transparent" />
                            <span className="font-serif text-3xl md:text-4xl text-foreground font-medium italic tracking-wide">
                                Tuğba Balcı
                            </span>
                            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
                                Kurumsal İletişim Uzmanı
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
