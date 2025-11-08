"use client";

import ShapeHero from "@/components/kokonutui/shape-hero";

export default function HeroSection() {
    return (
        <div>
            <ShapeHero
                title1="Libzeno: Software for Everyone"
                title2="Empowering Everyday Life"
            />
            <div className="text-center mt-6">
                <p className="text-lg md:text-xl text-black/60 dark:text-white/60 mb-4 font-light">
                    Libzeno creates simple, powerful products for normal people. Our solutions include Library Management, PG Management, and more products coming soon.
                </p>
                <p className="text-base text-black/40 dark:text-white/40">
                    Making technology accessible, useful, and delightful for everyone.
                </p>
            </div>
        </div>
    );
}