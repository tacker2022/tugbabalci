"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe, Linkedin, Instagram, Phone, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DeveloperSignature() {
    const [isOpen, setIsOpen] = useState(false);

    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/in/talhaemrecalargun/", label: "LinkedIn" },
        { icon: Instagram, href: "https://www.instagram.com/talhacalargun/", label: "Instagram" },
        { icon: Phone, href: "https://api.whatsapp.com/send/?phone=905372939874&text&type=phone_number&app_absent=0", label: "WhatsApp" },
        { icon: Globe, href: "https://talhacalargun.com/", label: "Website" },
    ];

    return (
        <div className="relative inline-block">
            <button
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none group"
            >
                <span className="opacity-50 group-hover:text-primary transition-colors">&lt;/&gt;</span>
                <span>Developed by</span>
                <span className="font-semibold text-white group-hover:text-primary transition-colors">Talha Çalargün</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-[#111111] border border-white/10 rounded-xl shadow-2xl p-4 z-50 backdrop-blur-sm"
                    >
                        <div className="flex flex-col items-center text-center">
                            {/* Avatar */}
                            <div className="relative w-16 h-16 rounded-full border-2 border-primary/30 overflow-hidden mb-3 shadow-inner">
                                <Image
                                    src="/talhacalargun.jpg"
                                    alt="Talha Çalargün"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h4 className="text-white font-medium text-sm">Talha Çalargün</h4>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-4 mt-1">
                                Digital Systems & Technology Developer
                            </p>

                            <div className="flex items-center justify-center gap-3 w-full">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-primary hover:scale-110 transition-all duration-200"
                                        aria-label={link.label}
                                    >
                                        <link.icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#111111]" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
