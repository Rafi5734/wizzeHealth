import HeroSection from "@/pages/heroSection/HeroSection";
import Navbar from "@/pages/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}
