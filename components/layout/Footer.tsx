import Link from "next/link";
import { Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-secondary-foreground py-12 border-t border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-primary">Tuğba Balcı</h3>
                        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                            Kurumsal iletişim, organizasyon yönetimi ve profesyonel temsil süreçlerinde çözüm ortağınız.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium tracking-wide">Hızlı Bağlantılar</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#about" className="hover:text-primary transition-colors">Hakkında</Link></li>
                            <li><Link href="#expertise" className="hover:text-primary transition-colors">Uzmanlık Alanları</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">İletişime Geç</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium tracking-wide">İletişim</h4>
                        <div className="space-y-3 text-sm text-gray-400">
                            <a href="mailto:tugbabalci@parkexpert.net" className="flex items-center gap-3 hover:text-primary transition-colors">
                                <Mail size={18} className="text-primary" />
                                <span>tugbabalci@parkexpert.net</span>
                            </a>
                            <a href="https://www.linkedin.com/in/tu%C4%9Fba-balci-531a853aa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                                <Linkedin size={18} className="text-primary" />
                                <span>LinkedIn Profili</span>
                            </a>
                            <a href="https://www.instagram.com/tugbabalci.55/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                                <Instagram size={18} className="text-primary" />
                                <span>Instagram Profili</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center flex flex-col items-center gap-4">
                    <p className="text-xs text-gray-500">&copy; {currentYear} Tuğba Balcı. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
