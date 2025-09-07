import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import Chat from "@/components/landing/Chat";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a202c]">
      <Navbar />
      <main>
        <Hero />
        <section className="px-4 py-10">
          <Chat />
        </section>
      </main>
    </div>
  );
}
