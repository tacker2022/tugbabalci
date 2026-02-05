"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Otomatik başlatma denemesi (Tarayıcı politikaları izin verirse)
    useEffect(() => {
        const playAudio = async () => {
            if (audioRef.current) {
                try {
                    audioRef.current.volume = 0.4; // %40 ses seviyesi ile başla
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (err) {
                    // Otomatik oynatma engellendiyse kullanıcı etkileşimi bekle
                    console.log("Otomatik oynatma engellendi, kullanıcı etkileşimi bekleniyor.");
                    setIsPlaying(false);
                }
            }
        };

        // Sadece ilk yüklemede ve kullanıcı etkileşimi yoksa dene
        // Not: Genellikle modern tarayıcılar sessiz değilse otomatik oynatmaya izin vermez.
        // Bu yüzden başlangıçta "kapalı" başlayıp kullanıcının açması daha "premium" bir deneyimdir.
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Oynatma hatası:", e));
            setHasInteracted(true);
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <audio
                ref={audioRef}
                loop
                src="/background-music.mp3?v=love" // Cache busting için query param eklendi
                preload="auto"
            />

            <AnimatePresence>
                {!hasInteracted && !isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/90 backdrop-blur text-primary text-xs font-medium px-3 py-1.5 rounded-full shadow-sm pointer-events-none"
                    >
                        Müziği Başlat
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={togglePlay}
                className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-500 ${isPlaying
                    ? "bg-primary text-primary-foreground animate-pulse-slow"
                    : "bg-white text-gray-400 hover:text-primary"
                    }`}
                aria-label="Müziği aç/kapat"
            >
                {isPlaying ? (
                    <Volume2 size={20} />
                ) : (
                    <Music size={20} />
                )}
            </button>
        </div>
    );
}
