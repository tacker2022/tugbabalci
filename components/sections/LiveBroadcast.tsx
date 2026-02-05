"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Radio, Calendar, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function LiveBroadcast() {
    return (
        <SectionWrapper id="broadcast" className="py-12 lg:py-20 bg-background border-t border-muted/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A202C] via-[#2D3748] to-[#1A202C] text-white shadow-2xl border border-white/5"
                >
                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                    {/* Pulsing Live Indicator Background */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 animate-pulse-slow pointer-events-none" />

                    <div className="flex flex-col lg:flex-row relative z-10">

                        {/* Left Side: Event Info */}
                        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6 border border-red-500/20 w-fit">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                Canlı Yayın
                            </div>

                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                                <span className="text-primary block mb-2">Tyttürk</span>
                                Ekranlarında
                            </h3>

                            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
                                Tuğba Balcı, Tyttürk canlı yayınında sektörel vizyonunu, gelecek projelerini ve kurumsal iletişim stratejilerini izleyicilerle paylaşıyor.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
                                <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 w-full sm:w-auto">
                                    <Calendar className="text-primary" size={24} />
                                    <div className="text-left">
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">Tarih</div>
                                        <div className="font-semibold text-lg">08 Şubat Pazar</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 w-full sm:w-auto">
                                    <Clock className="text-primary" size={24} />
                                    <div className="text-left">
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">Saat</div>
                                        <div className="font-semibold text-lg">10:00 - 13:30</div>
                                    </div>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="bg-white text-secondary hover:bg-gray-100 border-none group px-8 h-12 text-base w-full sm:w-auto"
                                onClick={() => window.open('https://tytturk.com/canli-yayin', '_blank')}
                            >
                                <span>Yayını İzle</span>
                                <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        {/* Right Side: Photo Gallery */}
                        <div className="lg:w-[45%] relative bg-black/20 p-8 min-h-[400px] flex items-center justify-center overflow-hidden">
                            {/* Photo 1 - Upright */}
                            <motion.div
                                className="absolute right-4 md:right-8 top-12 w-48 md:w-64 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-3 z-10"
                                initial={{ opacity: 0, x: 50, rotate: 10 }}
                                whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Image
                                    src="/broadcast-1.jpg"
                                    alt="Tyttürk Yayını Kamera Arkası 1"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Photo 2 - Tilted below */}
                            <motion.div
                                className="absolute left-6 md:left-10 bottom-12 w-40 md:w-60 aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 -rotate-6 z-0 grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                                initial={{ opacity: 0, x: -50, rotate: -10 }}
                                whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <Image
                                    src="/broadcast-2.jpg"
                                    alt="Tyttürk Yayını Kamera Arkası 2"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-[#1A202C] to-transparent opacity-50 z-20 pointer-events-none lg:opacity-0" />
                        </div>

                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
