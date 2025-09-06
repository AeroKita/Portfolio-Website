import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 pb-20 pt-14 sm:pt-20">
      <div className="relative mt-4 h-40 w-40 overflow-hidden rounded-full ring-4 ring-[#ffd700] shadow-xl sm:h-48 sm:w-48 bg-[#0a202c]">
        <Image
          src="/avatar.svg"
          alt="Profile photo"
          fill
          sizes="192px"
          className="object-cover"
          priority
        />
      </div>
      <div className="flex max-w-3xl flex-col items-center text-center">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-[#e2e8f0] sm:text-5xl">AI Instructor & Product Leader</h1>
        <p className="mt-4 text-pretty text-base text-[#e2e8f0]/80 sm:text-lg">Building AI products and teaching worldwide. Inspired by autumn hues — warm amber, rust, and deep plum — for a professional yet welcoming feel.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" variant="outline" className="bg-[#ffd700]/10 text-[#ffd700] border-[#ffd700]/20 hover:bg-[#ffd700]/20">
            <span>Contact</span>
          </Button>
          <Button size="lg" variant="outline" className="bg-[#ffd700]/10 text-[#ffd700] border-[#ffd700]/20 hover:bg-[#ffd700]/20">
            <span>About</span>
          </Button>
        </div>
      </div>

      <div id="about" className="mt-20 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[#e2e8f0] sm:text-3xl">About</h2>
        <p className="mt-3 text-[#e2e8f0]/80">I craft delightful, accessible interfaces with a focus on usability and clarity.</p>
      </div>

      {/* Social section removed per request */}

      <div id="contact" className="mt-16 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[#e2e8f0] sm:text-3xl">Contact</h2>
        <p className="mt-3 text-[#e2e8f0]/80">Reach out at DamandArkelMartin@gmail.com</p>
      </div>

      <div id="core-expertise" className="mt-20 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[#e2e8f0] sm:text-3xl">Core Expertise</h2>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-[#e2e8f0]/80 sm:grid-cols-2">
          {[
            { id: "expertise.item1", text: "Generative AI" },
            { id: "expertise.item2", text: "Product Strategy" },
            { id: "expertise.item3", text: "SaaS Development" },
            { id: "expertise.item4", text: "AI Consulting" },
            { id: "expertise.item5", text: "Technical Leadership" },
            { id: "expertise.item6", text: "Educational Design" },
          ].map((item) => (
            <li key={item.id} className="rounded-md bg-[#ffd700]/10 px-3 py-2 text-[#ffd700]">
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div id="courses" className="mt-20 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[#e2e8f0] sm:text-3xl">Courses & Education</h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" variant="outline" className="bg-[#ffd700]/10 text-[#ffd700] border-[#ffd700]/20 hover:bg-[#ffd700]/20">
            <span>Udemy</span>
          </Button>
          <Button size="lg" variant="outline" className="bg-[#ffd700]/10 text-[#ffd700] border-[#ffd700]/20 hover:bg-[#ffd700]/20">
            <span>Coursera</span>
          </Button>
          <Button size="lg" variant="outline" className="bg-[#ffd700]/10 text-[#ffd700] border-[#ffd700]/20 hover:bg-[#ffd700]/20">
            <span>Codecademy</span>
          </Button>
        </div>
      </div>

      {/* Social & Content section removed per request */}

      <div id="products" className="mt-20 w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-[#e2e8f0] sm:text-3xl">Products Built</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[{ id: "prod.olly", name: "olly.social", users: "25K+ Users", paid: "5K+ Paid" }, { id: "prod.snapy", name: "snapy.ai", users: "35K+ Users" }].map((prod) => (
            <div key={prod.id} className="rounded-lg border border-[#ffd700]/20 bg-[#ffd700]/10 p-5 shadow-sm transition-colors hover:bg-[#ffd700]/20">
              <h3 className="text-lg font-semibold text-[#ffd700]">
                <span className="text-[#ffd700]">{prod.name}</span>
              </h3>
              <p className="mt-1 text-sm text-[#ffd700]">
                <span className="text-[#ffd700]">{`${prod.users}${prod.paid ? ` • ${prod.paid}` : ""}`}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div id="professional-background" className="mt-20 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[#e2e8f0] sm:text-3xl">Professional Background</h2>
        <p className="mt-3 text-[#e2e8f0]/80">12+ years building AI products across Media, Fintech, Regtech, Edtech, and Martech. MBA from SIMSREE; BS in Information Technology.</p>
      </div>

      {/* Teaching & Education section removed per request */}

      {/* Trusted By section removed per request */}

      <div id="blog" className="mt-20 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[#e2e8f0] sm:text-3xl">Blog</h2>
        <p className="mt-3 text-[#e2e8f0]/80">Posts coming soon.</p>
      </div>
    </section>
  );
}

export default Hero;

