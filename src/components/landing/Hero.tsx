import Image from "next/image";
import { Button } from "@/components/ui/button";
import { EditableText } from "@/lib/edit-mode";

export function Hero() {
  return (
    <section id="home" className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 pb-20 pt-14 sm:pt-20">
      <div className="relative mt-4 h-40 w-40 overflow-hidden rounded-full ring-4 ring-amber-400 shadow-xl sm:h-48 sm:w-48 bg-amber-100">
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
        <EditableText id="hero.title" as="h1" className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">AI Instructor & Product Leader</EditableText>
        <EditableText id="hero.subtitle" as="p" className="mt-4 text-pretty text-base text-neutral-700 dark:text-neutral-300 sm:text-lg">Building AI products and teaching worldwide. Inspired by autumn hues — warm amber, rust, and deep plum — for a professional yet welcoming feel.</EditableText>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-700">
            <EditableText id="hero.ctaPrimary" as="span">Contact</EditableText>
          </Button>
          <Button size="lg" variant="outline" className="border-amber-300 text-amber-800 hover:bg-amber-100">
            <EditableText id="hero.ctaSecondary" as="span">About</EditableText>
          </Button>
        </div>
      </div>

      <div id="about" className="mt-20 max-w-3xl text-center text-neutral-800 dark:text-neutral-200">
        <EditableText id="about.title" as="h2" className="text-2xl font-semibold tracking-tight sm:text-3xl">About</EditableText>
        <EditableText id="about.body" as="p" className="mt-3 text-neutral-700 dark:text-neutral-300">I craft delightful, accessible interfaces with a focus on usability and clarity.</EditableText>
      </div>

      {/* Social section removed per request */}

      <div id="contact" className="mt-16 max-w-3xl text-center">
        <EditableText id="contact.title" as="h2" className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-3xl">Contact</EditableText>
        <EditableText id="contact.body" as="p" className="mt-3 text-neutral-700 dark:text-neutral-300">Reach out at DamandArkelMartin@gmail.com</EditableText>
      </div>

      <div id="core-expertise" className="mt-20 max-w-3xl text-center text-neutral-800 dark:text-neutral-200">
        <EditableText id="expertise.title" as="h2" className="text-2xl font-semibold tracking-tight sm:text-3xl">Core Expertise</EditableText>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-neutral-700 dark:text-neutral-300 sm:grid-cols-2">
          {[
            { id: "expertise.item1", text: "Generative AI" },
            { id: "expertise.item2", text: "Product Strategy" },
            { id: "expertise.item3", text: "SaaS Development" },
            { id: "expertise.item4", text: "AI Consulting" },
            { id: "expertise.item5", text: "Technical Leadership" },
            { id: "expertise.item6", text: "Educational Design" },
          ].map((item) => (
            <li key={item.id} className="rounded-md bg-amber-50 px-3 py-2 text-amber-900 dark:bg-amber-900/20 dark:text-amber-200">
              <EditableText id={item.id} as="span">{item.text}</EditableText>
            </li>
          ))}
        </ul>
      </div>

      <div id="courses" className="mt-20 max-w-3xl text-center text-neutral-800 dark:text-neutral-200">
        <EditableText id="courses.title" as="h2" className="text-2xl font-semibold tracking-tight sm:text-3xl">Courses & Education</EditableText>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" variant="outline" className="border-amber-300 text-amber-800 hover:bg-amber-100">
            <EditableText id="courses.udemy" as="span">Udemy</EditableText>
          </Button>
          <Button size="lg" variant="outline" className="border-amber-300 text-amber-800 hover:bg-amber-100">
            <EditableText id="courses.coursera" as="span">Coursera</EditableText>
          </Button>
          <Button size="lg" variant="outline" className="border-amber-300 text-amber-800 hover:bg-amber-100">
            <EditableText id="courses.codecademy" as="span">Codecademy</EditableText>
          </Button>
        </div>
      </div>

      {/* Social & Content section removed per request */}

      <div id="products" className="mt-20 w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center text-neutral-800 dark:text-neutral-200">
          <EditableText id="products.title" as="h2" className="text-2xl font-semibold tracking-tight sm:text-3xl">Products Built</EditableText>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[{ id: "prod.olly", name: "olly.social", users: "25K+ Users", paid: "5K+ Paid" }, { id: "prod.snapy", name: "snapy.ai", users: "35K+ Users" }].map((prod) => (
            <div key={prod.id} className="rounded-lg border border-amber-200 bg-white/50 p-5 shadow-sm dark:border-amber-900/30 dark:bg-neutral-900/40">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                <EditableText id={`${prod.id}.name`} as="span">{prod.name}</EditableText>
              </h3>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                <EditableText id={`${prod.id}.metrics`} as="span">{`${prod.users}${prod.paid ? ` • ${prod.paid}` : ""}`}</EditableText>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div id="professional-background" className="mt-20 max-w-3xl text-center text-neutral-800 dark:text-neutral-200">
        <EditableText id="background.title" as="h2" className="text-2xl font-semibold tracking-tight sm:text-3xl">Professional Background</EditableText>
        <EditableText id="background.body" as="p" className="mt-3 text-neutral-700 dark:text-neutral-300">12+ years building AI products across Media, Fintech, Regtech, Edtech, and Martech. MBA from SIMSREE; BS in Information Technology.</EditableText>
      </div>

      {/* Teaching & Education section removed per request */}

      {/* Trusted By section removed per request */}

      <div id="blog" className="mt-20 max-w-3xl text-center text-neutral-800 dark:text-neutral-200">
        <EditableText id="blog.title" as="h2" className="text-2xl font-semibold tracking-tight sm:text-3xl">Blog</EditableText>
        <EditableText id="blog.body" as="p" className="mt-3 text-neutral-700 dark:text-neutral-300">Posts coming soon.</EditableText>
      </div>
    </section>
  );
}

export default Hero;

