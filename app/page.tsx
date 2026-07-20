import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Story from "@/components/Story";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#05070d] text-white">
      <Background />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Story />
      <FAQ />
      <Footer />
    </main>
  );
}