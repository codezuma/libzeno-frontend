import ContactSection from "@/components/contact-section-one";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-two";
import CallToAction from "@/components/call-to-action-three";
import FAQs from "@/components/faqs-section-one";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <CallToAction />
      <FAQs />
      <ContactSection />
      <FooterSection />
    </>
  );
}
