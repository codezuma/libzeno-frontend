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
                                    href="mailto:info@libzeno.com"
                                    className="text-primary text-lg hover:underline">
                                    info@libzeno.com
                                </Link>
                                <p className="mt-3 text-sm">+91 78499 01618</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <h3 className="mb-3 text-lg font-semibold">Partnerships</h3>
                                <Link
                                    href="mailto:info@libzeno.com"
                                    className="text-primary text-lg hover:underline">
                                    info@libzeno.com
                                </Link>
                                <p className="mt-3 text-sm">+91 78499 01618</p>
                            </div>
                        </div>
                           <div className="flex flex-col justify-between space-y-6 pt-2">
                               <div>
                                   <h4 className="mb-2 text-base font-semibold">Company</h4>
                                   <div className="text-muted-foreground text-sm pl-1 mb-2">Libzeno Technologies Private Limited</div>
                                   <h4 className="mb-2 text-base font-semibold">Registered Address</h4>
                                   <address className="text-muted-foreground text-sm not-italic pl-1">
                                       C/O KURIYA PATIDAR,<br />
                                       NEAR MORDI BUS STAND,<br />
                                       Chitri, Dungarpur,<br />
                                       Dungarpur- 314035, Rajasthan
                                   </address>
                                   <div className="text-muted-foreground mt-4 text-xs">© 2025 Libzeno Technologies Private Limited. All rights reserved.</div>
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
