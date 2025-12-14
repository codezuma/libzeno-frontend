import Link from 'next/link'
import ContactForm from '@/components/contact-form'

export default function ContactSection() {
    return (
        <section id="contact" className="bg-muted py-15 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="text-4xl font-semibold lg:text-5xl">Get Started with Libzbook</h1>
                <p className="text-muted-foreground mt-4 text-lg">Let's discuss how Libzbook can help modernize your library management. Reach out for a demo or to learn more about our solutions.</p>
                <div className="mt-12 grid gap-12 lg:grid-cols-5">
                    <div className="grid grid-cols-2 lg:col-span-2 lg:block lg:space-y-12">
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <h2 className="mb-3 text-lg font-semibold">Sales & Support</h2>
                                <Link
                                    href="mailto:libzeno@gmail.com"
                                    className="text-primary text-lg hover:underline">
                                    libzeno@gmail.com
                                </Link>
                                <p className="mt-3 text-sm">+91 70233 67766</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <h3 className="mb-3 text-lg font-semibold">Partnerships</h3>
                                <Link
                                    href="mailto:libzeno@gmail.com"
                                    className="text-primary text-lg hover:underline">
                                    libzeno@gmail.com
                                </Link>
                                <p className="mt-3 text-sm">+91 70233 67766</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
