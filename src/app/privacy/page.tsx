import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

export const metadata = {
  title: "Privacy Policy - Libzeno",
  description: "Learn how Libzeno collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                Introduction
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                At Libzeno, we are committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you use our services. 
                Please read this privacy policy carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                1. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
                Personal Information
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                We may collect personal information that you provide to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Name and contact information (email address, phone number)</li>
                <li>Business information (company name, address)</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Account credentials (username, password)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-neutral-900 dark:text-neutral-100">
                Usage Data
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We automatically collect certain information when you access and use our services, 
                including IP address, browser type, device information, and usage patterns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                2. How We Use Your Information
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information, updates, and security alerts</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and fraudulent activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may 
                share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>With service providers who assist us in operating our services (payment processors, hosting providers)</li>
                <li>When required by law or to respond to legal process</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a business transfer (merger, acquisition, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                4. Data Security
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or 
                destruction. However, no method of transmission over the Internet or electronic 
                storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                5. Data Retention
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required or 
                permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                6. Your Rights
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Access and receive a copy of your personal information</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our services 
                and hold certain information. You can instruct your browser to refuse all cookies 
                or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                8. Children's Privacy
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not 
                knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last 
                updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                10. Contact Us
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
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
