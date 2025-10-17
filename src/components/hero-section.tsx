import React from 'react'
import { Mail, SendHorizonal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:#43339e]">
                <section>
                    <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="text-balance text-5xl font-medium md:text-6xl">
                            Manage Your Library Spaces Effortlessly
                        </TextEffect>
                        <TextEffect
                            per="line"
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.5}
                            as="p"
                            className="mx-auto mt-6 max-w-2xl text-pretty text-lg">
                            LibZeno is the complete solution for library owners to manage multiple study rooms, seat bookings, and student subscriptions - all in one powerful platform.
                        </TextEffect>                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12">
                                <form
                                    action=""
                                    className="mx-auto max-w-sm">
                                    <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                                        <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

                                        <input
                                            placeholder="Your mail address"
                                            className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                                            type="email"
                                        />

                                        <div className="md:pr-1.5 lg:pr-0">
                                            <Button
                                                aria-label="submit"
                                                size="sm"
                                                className="rounded-(--radius)">
                                                <span className="hidden md:block">Get Started</span>
                                                <SendHorizonal
                                                    className="relative mx-auto size-5 md:hidden"
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </form>

                                <div
                                    aria-hidden
                                    className="bg-radial from-primary/50 dark:from-primary/25 relative mx-auto mt-32 max-w-2xl to-transparent to-55% text-left">
                                    <div className="bg-background border-border/50 absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                                        <div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] before:opacity-50"></div>
                                    </div>
                                    <div className="bg-muted dark:bg-background/50 border-border/50 mx-auto w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
                                        <div className="bg-background space-y-2 overflow-hidden rounded-[1.5rem] border p-2 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                                            <AppComponent />

                                            <div className="bg-muted rounded-[1rem] p-4 pb-16 dark:bg-white/5"></div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-5"></div>
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const AppComponent = () => {
    return (
        <div className="relative space-y-3 rounded-[1rem] bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-4 border border-purple-200/20">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <svg
                    className="size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                </svg>
                <div className="text-sm font-semibold">Library Dashboard</div>
            </div>
            <div className="space-y-3">
                <div className="text-foreground border-b border-purple-200/20 pb-3 text-sm font-medium">Active Bookings Overview</div>
                <div className="space-y-3">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground text-xs">Room A - Seats</span>
                            <span className="text-foreground text-xs font-medium">45/50</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                            <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground text-xs">Room B - Seats</span>
                            <span className="text-foreground text-xs font-medium">32/40</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                            <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground text-xs">Room C - Seats</span>
                            <span className="text-foreground text-xs font-medium">28/35</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                            <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-orange-500 to-amber-500"></div>
                        </div>
                    </div>
                </div>
                <div className="pt-2 grid grid-cols-2 gap-2">
                    <div className="bg-green-500/20 rounded-lg p-2 text-center">
                        <div className="text-green-600 dark:text-green-400 text-lg font-bold">₹1.2L</div>
                        <div className="text-muted-foreground text-[10px]">Monthly Revenue</div>
                    </div>
                    <div className="bg-blue-500/20 rounded-lg p-2 text-center">
                        <div className="text-blue-600 dark:text-blue-400 text-lg font-bold">105</div>
                        <div className="text-muted-foreground text-[10px]">Active Students</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
