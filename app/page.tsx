import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Approach from "@/components/sections/Approach";
import LiveBroadcast from "@/components/sections/LiveBroadcast";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Approach />
      <LiveBroadcast />
      <Contact />
      <Footer />
    </main>
  );
}
