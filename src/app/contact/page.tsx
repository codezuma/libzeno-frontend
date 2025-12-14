import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Contact Us - Libzeno",
  description: "Get in touch with Libzeno. Contact our sales, support, or partnerships team.",
};

export default function ContactPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              Contact Us
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              We're here to help. Reach out to us for any questions, support, or partnership inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                      Sales & Support
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-2">
                      Email:{" "}
                      <a 
                        href="mailto:libzeno@gmail.com" 
                        className="text-primary hover:underline"
                      >
                        libzeno@gmail.com
                      </a>
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Phone: <a href="tel:+917023367766" className="text-primary hover:underline">+91 70233 67766</a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                      Partnerships
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-2">
                      Email:{" "}
                      <a 
                        href="mailto:libzeno@gmail.com" 
                        className="text-primary hover:underline"
                      >
                        libzeno@gmail.com
                      </a>
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Phone: <a href="tel:+917023367766" className="text-primary hover:underline">+91 70233 67766</a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                  Business Hours
                </h2>
                <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM IST</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM IST</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
