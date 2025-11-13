'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is Libzeno?',
            answer: 'Libzeno is a software company focused on building specialized applications for small businesses. We create purpose-built tools that solve specific problems exceptionally well, starting with Libzbook for library management.',
        },
        {
            id: 'item-2',
            question: 'What is Libzbook?',
            answer: 'Libzbook is our flagship product — a comprehensive library management application designed for schools, colleges, and educational institutions. It handles book cataloging, member management, circulation tracking, fines, and reporting.',
        },
        {
            id: 'item-3',
            question: 'Who is Libzbook designed for?',
            answer: 'Libzbook is built for educational institutions including schools, colleges, universities, and community libraries. It\'s designed to be intuitive for librarians and administrators without requiring technical expertise.',
        },
        {
            id: 'item-4',
            question: 'What are the key features of Libzbook?',
            answer: 'Libzbook includes complete book cataloging with ISBN lookup, member management, issue/return tracking, automated fine calculation, comprehensive reports and analytics, barcode support, and multi-user access with role-based permissions.',
        },
        {
            id: 'item-5',
            question: 'Will Libzeno launch other products?',
            answer: 'Yes! We\'re committed to building multiple applications for small businesses. After Libzbook, we plan to expand into other areas like PG management and more. Each product will maintain our focus on quality and solving real problems.',
        },
    ]

    return (
        <section id="faq" className="bg-muted py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div>
                    <h2 className="text-foreground text-4xl font-semibold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Learn more about Libzeno, our Libzbook product, and how we help educational institutions manage their libraries.</p>
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
