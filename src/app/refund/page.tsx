import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

export const metadata = {
  title: "Refund & Cancellation Policy - Libzeno",
  description: "Learn about Libzeno's refund and cancellation policy for our services.",
};

export default function RefundPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
            Refund & Cancellation Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                Overview
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                At Libzeno, we strive to provide excellent service and customer satisfaction. This 
                Refund & Cancellation Policy outlines the terms and conditions for refunds and 
                cancellations of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                1. Cancellation Policy
              </h2>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
                Subscription Cancellation
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                You may cancel your subscription at any time. Cancellations can be made:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Through your account dashboard</li>
                <li>By contacting our support team at libzeno@gmail.com</li>
                <li>By calling our support line at +91 70233 67766</li>
              </ul>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mt-4">
                <strong>Cancellations are allowed within 1-2 business days</strong> of the billing 
                cycle. Once cancelled, your subscription will remain active until the end of the 
                current billing period, after which access will be terminated.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-neutral-900 dark:text-neutral-100">
                One-Time Purchase Cancellation
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                For one-time purchases, cancellation requests must be submitted within 48 hours of 
                the purchase date to be eligible for a refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                2. Refund Policy
              </h2>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
                Refund Eligibility
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Refunds may be issued in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Service cancellation within the eligible cancellation period</li>
                <li>Technical issues that prevent service usage and cannot be resolved</li>
                <li>Duplicate payments or billing errors</li>
                <li>Service not delivered as described (subject to verification)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-neutral-900 dark:text-neutral-100">
                Refund Processing Time
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <strong>Refunds will be processed within 5-7 business days</strong> from the date 
                of approval. The refund will be credited to the original payment method used for 
                the transaction. Please note that it may take additional time for the refund to 
                appear in your account, depending on your bank or payment provider.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-neutral-900 dark:text-neutral-100">
                Non-Refundable Items
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                The following are not eligible for refunds:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Services used beyond the cancellation period</li>
                <li>Custom development work that has been completed</li>
                <li>Third-party fees or charges</li>
                <li>Services cancelled due to violation of terms of service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                3. How to Request a Refund
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                To request a refund, please:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Contact our support team at libzeno@gmail.com or call +91 70233 67766</li>
                <li>Provide your account information and transaction details</li>
                <li>Explain the reason for your refund request</li>
                <li>Our team will review your request and respond within 2-3 business days</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                4. Partial Refunds
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                In some cases, we may offer partial refunds based on the extent of service usage 
                or specific circumstances. Partial refunds will be calculated on a pro-rata basis 
                and processed according to the same timeline as full refunds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                5. Chargebacks
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We encourage customers to contact us directly to resolve any issues before initiating 
                a chargeback. Chargebacks may result in account suspension and additional fees. We 
                reserve the right to dispute chargebacks that are not in accordance with our terms 
                of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                6. Changes to This Policy
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We reserve the right to modify this Refund & Cancellation Policy at any time. 
                Changes will be effective immediately upon posting on this page. We encourage you 
                to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                7. Contact Us
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                If you have any questions about our Refund & Cancellation Policy, please contact us at{" "}
                <Link href="mailto:libzeno@gmail.com" className="text-primary hover:underline">
                  libzeno@gmail.com
                </Link>
                {" "}or call us at +91 70233 67766. You can also visit our{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact Us
                </Link>
                {" "}page for more information.
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
