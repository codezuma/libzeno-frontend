import Link from 'next/link'

const links = [
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
    {
        title: 'Shipping & Delivery',
        href: '/shipping',
    },
    {
        title: 'Terms',
        href: '/terms',
    },
    {
        title: 'Privacy',
        href: '/privacy',
    },
    {
        title: 'Refund',
        href: '/refund',
    },
]

export default function FooterSection() {
    return (
        <footer className="border-b bg-white py-12 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap justify-between gap-6">
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="order-last block text-center text-sm md:order-first">
                        <div>
                            <a href="mailto:info@libzeno.com" className="hover:underline">info@libzeno.com</a> | <a href="tel:+917849901618" className="hover:underline">+917849901618</a>
                        </div>
                        <div>Libzeno Technologies Private Limited</div>
                        <div className="text-muted-foreground mt-2">© 2025 Libzeno Technologies Private Limited. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
