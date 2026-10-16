import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import MatchDemo from "@/components/MatchDemo";
import Hub from "@/components/Hub";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <MatchDemo />
      <Hub />
      <Faq />
      <Footer />
    </main>
  );
}
