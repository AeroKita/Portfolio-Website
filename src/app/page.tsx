import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a202c]">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
