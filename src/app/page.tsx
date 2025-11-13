import ContactSection from "@/components/contact-section-one";
import Features from "@/components/features-two";
import CallToAction from "@/components/call-to-action-three";
import FAQs from "@/components/faqs-section-one";
import FooterSection from "@/components/footer";
import BentoGrid from "@/components/kokonutui/bento-grid";
import ShapeHero from "@/components/kokonutui/shape-hero";
import { HeroHeader } from "@/components/header";
import WhyLibzeno from "@/components/why-Libzeno";
import ProductRoadmap from "@/components/product-roadmap";

export default function Home() {
  return (
    <>
         <HeroHeader />

      <ShapeHero 
        title1="Smart Business Apps"
        title2="for Real People"
        description="Libzeno builds purpose-driven software that empowers small businesses. Starting with Libzbook — the modern library management solution trusted by educational institutions."
        showCTA={true}
      />
      <section className="py-16 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
            Empowering Small Businesses with Smart Solutions
          </h2>
          <p className="text-lg md:text-xl mb-8 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Libzeno is building an ecosystem of purpose-built applications for small businesses. 
            We start with one problem, solve it exceptionally well, then move to the next.
          </p>
          <div className="inline-block bg-gradient-to-r from-indigo-500 to-rose-500 p-1 rounded-2xl">
            <div className="bg-white dark:bg-black rounded-2xl px-8 py-6">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">
                Introducing Libzbook
              </h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400">
                Our flagship product — Modern library management for educational institutions
              </p>
            </div>
          </div>
        </div>
      </section>
      <BentoGrid />
      <WhyLibzeno />
      <ProductRoadmap />
      <Features />
      <CallToAction />
      <FAQs />
      <ContactSection />
      <FooterSection />
    </>
  );
}
