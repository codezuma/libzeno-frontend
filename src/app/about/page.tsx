import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

export const metadata = {
  title: "About Us - Libzeno",
  description: "Learn about Libzeno, our mission, values, and commitment to building smart business applications.",
};

export default function AboutPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
            About Libzeno
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                Our Mission
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Libzeno is dedicated to building purpose-driven software that empowers businesses 
                with smart, efficient solutions. We believe in solving one problem exceptionally 
                well before moving to the next, ensuring that every product we create delivers 
                real value to our customers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                What We Do
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                We specialize in creating custom business applications tailored to meet the unique 
                needs of modern businesses. Our flagship product, Libzbook, is a comprehensive 
                library management solution designed for educational institutions.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Our approach is simple: understand the problem deeply, build a solution that works 
                beautifully, and continuously improve based on real-world feedback.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                Our Values
              </h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                <li><strong>Simplicity:</strong> We believe in building intuitive solutions that don't require extensive training.</li>
                <li><strong>Reliability:</strong> Our products are built to work consistently, day in and day out.</li>
                <li><strong>Customer Focus:</strong> Every decision we make is guided by what's best for our customers.</li>
                <li><strong>Innovation:</strong> We continuously explore new technologies and approaches to solve problems better.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                Our Commitment
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                At Libzeno, we are committed to providing exceptional service and support. We understand 
                that implementing new software can be challenging, which is why we work closely with our 
                customers to ensure a smooth transition and ongoing success.
              </p>
            </section>

            <div className="pt-8">
              <Link href="/contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
