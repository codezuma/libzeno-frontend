'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'How does LibZeno help manage multiple libraries?',
            answer: 'LibZeno allows you to manage multiple library locations from a single dashboard. Each library can have multiple rooms with different seating arrangements, and you can track bookings, payments, and occupancy across all locations in real-time.',
        },
        {
            id: 'item-2',
            question: 'How do students book seats?',
            answer: 'Students can browse available seats in different rooms, select their preferred location, and book seats on a monthly subscription basis. They can view availability in real-time and make secure payments directly through the platform.',
        },
        {
            id: 'item-3',
            question: 'What payment methods are supported?',
            answer: 'We support all major credit cards, debit cards, UPI, net banking, and digital wallets. Automated recurring billing ensures seamless monthly subscription payments without manual intervention.',
        },
        {
            id: 'item-4',
            question: 'Can I customize room layouts and pricing?',
            answer: "Yes, LibZeno is fully customizable. You can define different room types, set individual seat pricing, create custom subscription plans, and adjust availability based on your library's needs.",
        },
        {
            id: 'item-5',
            question: 'Is there a mobile app for students and owners?',
            answer: 'Yes, we provide mobile apps for both students and library owners. Students can book and manage their subscriptions on the go, while owners can monitor their libraries, view analytics, and handle bookings from anywhere.',
        },
    ]

    return (
        <section id="faq" className="bg-muted py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div>
                    <h2 className="text-foreground text-4xl font-semibold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-foreground/5 rounded-(--radius) w-full border border-transparent px-8 py-3 shadow ring-1">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dotted">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
