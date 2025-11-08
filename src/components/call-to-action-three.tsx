import { Button } from '@/components/ui/button'
import { Calendar, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function StatsSection() {
    return (
        <section id="about">
            <div className="bg-muted py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-foreground max-w-lg text-balance text-3xl font-semibold lg:text-4xl">
                        <span className="text-muted-foreground">Ready to modernize your library?</span> Start with Libzbook today
                    </h2>
                    <p className="mt-4 text-lg">Join educational institutions that trust Libzbook to manage their libraries efficiently. Simple, reliable, and built for the way you work.</p>
                    <div className="mt-8 flex gap-3">
                        <Button
                            asChild
                            className="pr-2">
                            <Link href="#">
                                Try Libzbook Free
                                <ChevronRight
                                    strokeWidth={2.5}
                                    className="size-3.5! opacity-50"
                                />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="pl-2.5">
                            <Link href="#">
                                <Calendar
                                    className="!size-3.5 opacity-50"
                                    strokeWidth={2.5}
                                />
                                Schedule a Demo
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
