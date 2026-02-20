import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AudioPlayer from "@/components/ui/AudioPlayer";
import { Analytics } from "@vercel/analytics/next";

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
// Fallback for Vercel deployment URL if custom domain isn't fully propagated or verified by WhatsApp
const deployUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : siteUrl;

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuğba Balcı | Kurumsal İletişim & Organizasyon",
    description: "İnsan odaklı, güven veren ve sonuç üreten bir profesyonel yaklaşım.",
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EPGMFKRZPQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EPGMFKRZPQ');
          `}
        </Script>

        <AudioPlayer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
