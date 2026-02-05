import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import AudioPlayer from "@/components/ui/AudioPlayer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://tugbabalci.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tuğba Balcı",
  jobTitle: "Kurumsal İletişim Uzmanı",
  url: siteUrl,
  image: `${siteUrl}/tugba-balci-hero.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/tu%C4%9Fba-balci-531a853aa/",
    "https://www.instagram.com/tugbabalci.55/"
  ],
  description: "Kurumsal iletişim, organizasyon yönetimi ve profesyonel temsil süreçlerinde çözüm ortağınız.",
  worksFor: {
    "@type": "Organization",
    name: "Park Expert"
  }
};

export const metadata: Metadata = {
  title: "Tuğba Balcı | Kurumsal İletişim & Organizasyon Yönetimi",
  description: "İnsan odaklı, güven veren ve sonuç üreten profesyonel kurumsal iletişim ve organizasyon yönetimi hizmetleri.",
  keywords: ["Tuğba Balcı", "Kurumsal İletişim", "Organizasyon Yönetimi", "Profesyonel Temsil", "Park Expert", "Etkinlik Yönetimi", "Yönetim Danışmanlığı"],
  authors: [{ name: "Talha Çalargün", url: "https://talhacalargun.com" }],
  openGraph: {
    title: "Tuğba Balcı | Kurumsal İletişim & Organizasyon",
    description: "İnsan odaklı, güven veren ve sonuç üreten bir profesyonel yaklaşım.",
    url: siteUrl,
    siteName: "Tuğba Balcı",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tuğba Balcı - Kurumsal İletişim Uzmanı"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuğba Balcı | Kurumsal İletişim & Organizasyon",
    description: "İnsan odaklı, güven veren ve sonuç üreten bir profesyonel yaklaşım.",
    images: ["/opengraph-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-primary text-secondary font-sans`}
      >
        <AudioPlayer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
