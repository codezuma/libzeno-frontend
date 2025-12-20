import FooterSection from '@/components/footer';
import { HeroHeader } from '@/components/header';
import ShippingSection from '@/components/shipping-section';

export const metadata = {
  title: 'Shipping & Delivery - Libzeno',
  description: 'Information about shipping and delivery for Libzeno customers.',
};

export default function ShippingPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen bg-white pt-20 dark:bg-neutral-900">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
            Shipping & Delivery
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <ShippingSection />
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
