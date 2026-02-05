"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import Image from "next/image";


export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center bg-background overflow-hidden">
            {/* Background/Image Container - Split layout for elegant portrait scaling */}
            <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-background order-2 lg:order-1" />
                {/* Right Column: Image Area */}
                <div className="relative h-full min-h-[50vh] lg:min-h-screen w-full order-1 lg:order-2">
                    <Image
                        src="/tugba-balci-hero.jpg"
                        alt="Tuğba Balcı"
                        fill
                        className="object-cover object-center lg:object-right"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent lg:via-background/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
            </div>

            <SectionWrapper className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full items-center">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-primary font-medium tracking-widest text-sm uppercase mb-4">
                            Kurumsal İletişim • Organizasyon • Profesyonel Temsil
                        </h2>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
                            Tuğba <br /> Balcı
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                            İnsan odaklı, güven veren ve sonuç üreten bir profesyonel yaklaşım.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild>
                                <Link href="#contact">İletişime Geç</Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="#about">Hakkında</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </section>
    );
}
