export default function ShippingSection() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Shipping & Delivery Policy</h2>
        <p className="mb-2 text-neutral-700 dark:text-neutral-300">
          At Libzeno, we strive to deliver your products and services in a timely and efficient manner. Please review our shipping and delivery policy below:
        </p>
        <ul className="list-disc pl-6 mb-4 text-base text-neutral-700 dark:text-neutral-300">
          <li>All digital products and services are delivered electronically to your registered email address immediately after payment confirmation.</li>
          <li>For physical products (if any), shipping is available across India. Delivery times may vary based on your location and product availability.</li>
          <li>Estimated delivery time for physical products is 5-10 business days from the date of order confirmation.</li>
          <li>Shipping charges, if applicable, will be displayed at checkout before you complete your purchase.</li>
          <li>If you have not received your order within the estimated delivery time, please contact our support team at <a href="mailto:libzeno@gmail.com" className="underline text-primary">libzeno@gmail.com</a> or call +91 70233 67766.</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Registered Address</h3>
        <address className="not-italic text-neutral-700 dark:text-neutral-300">
          C/O KURIYA PATIDAR,<br />
          NEAR MORDI BUS STAND,<br />
          Chitri, Dungarpur,<br />
          Dungarpur- 314035, Rajasthan
        </address>
      </section>
    </>
  );
}
