"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Mail, Linkedin, ArrowRight, Minus } from "lucide-react";

export default function Contact() {
    return (
        <SectionWrapper id="contact" className="bg-background py-20 lg:py-32">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-3xl bg-secondary text-secondary-foreground shadow-2xl p-10 md:p-16 lg:p-24 text-center"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "48px 48px" }}></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="bg-primary/20 p-4 rounded-full mb-8 backdrop-blur-sm"
                        >
                            <Mail size={32} className="text-primary" />
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            Birlikte <span className="text-primary italic">Değer</span> Yaratalım
                        </h2>

                        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Kurumsal iletişim stratejileriniz veya organizasyonel süreçleriniz için
                            profesyonel bir bakış açısına mı ihtiyacınız var?
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
                            <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500" onClick={() => window.location.href = 'mailto:tugbabalci@parkexpert.net'}>
                                E-posta Gönder
                            </Button>

                            <div className="flex items-center gap-4 text-gray-400">
                                <Minus className="hidden sm:block rotate-90" />
                                <span className="hidden sm:block text-sm uppercase tracking-widest">veya</span>
                                <Minus className="hidden sm:block rotate-90" />
                            </div>

                            <a
                                href="https://www.linkedin.com/in/tu%C4%9Fba-balci-531a853aa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-8 py-4 rounded-md border border-white/20 hover:border-primary/50 text-white hover:bg-white/5 transition-all duration-300 w-full sm:w-auto justify-center"
                            >
                                <Linkedin size={20} className="text-primary group-hover:scale-110 transition-transform" />
                                <span className="font-medium">LinkedIn'de Bağlan</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform ml-1" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
