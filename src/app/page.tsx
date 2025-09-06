import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-50 to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
