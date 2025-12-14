import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

export const metadata = {
  title: "Terms & Conditions - Libzeno",
  description: "Read Libzeno's terms and conditions for using our services and products.",
};

export default function TermsPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                1. Acceptance of Terms
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                By accessing and using Libzeno's services, you accept and agree to be bound by the 
                terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                2. Use License
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on Libzeno's website for 
                personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on Libzeno's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                3. Service Availability
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We strive to ensure that our services are available 24/7, but we do not guarantee 
                uninterrupted access. We reserve the right to perform maintenance, updates, or 
                modifications that may temporarily affect service availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                4. User Accounts
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                When you create an account with us, you must provide information that is accurate, 
                complete, and current at all times. You are responsible for safeguarding the password 
                and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                5. Payment Terms
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                All fees are payable in advance. Payments are processed securely through our payment 
                gateway partners. By making a payment, you agree to our refund and cancellation 
                policy as outlined in our Refund Policy page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                6. Intellectual Property
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                The service and its original content, features, and functionality are and will remain 
                the exclusive property of Libzeno and its licensors. The service is protected by 
                copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                7. Limitation of Liability
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                In no event shall Libzeno, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or 
                punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                8. Changes to Terms
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any 
                time. If a revision is material, we will provide at least 30 days notice prior to any 
                new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                9. Contact Information
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                If you have any questions about these Terms, please contact us at{" "}
                <Link href="mailto:libzeno@gmail.com" className="text-primary hover:underline">
                  libzeno@gmail.com
                </Link>
                {" "}or visit our{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact Us
                </Link>
                {" "}page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
