"use client";

/**
 * @author: @dorian_baffier
 * @description: Shape Hero
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { motion } from "motion/react";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-pacifico",
});

// Add shimmer styles
const shimmerStyles = `
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  
  .shimmer-button {
    background: linear-gradient(
      90deg,
      #5B73FF 0%,
      #5B73FF 35%,
      #7C8FFF 50%,
      #5B73FF 65%,
      #5B73FF 100%
    );
    background-size: 1000px 100%;
    animation: shimmer 3s infinite;
  }
  
  .shimmer-button:hover {
    animation: shimmer 1.5s infinite;
  }
`;

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    borderRadius = 16,
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
    borderRadius?: number;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    style={{ borderRadius }}
                    className={cn(
                        "absolute inset-0",
                        "bg-linear-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[1px]",
                        "ring-1 ring-white/[0.03] dark:ring-white/[0.02]",
                        "shadow-[0_2px_16px_-2px_rgba(255,255,255,0.04)]",
                        "after:absolute after:inset-0",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]",
                        "after:rounded-[inherit]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export default function ShapeHero({
    title1 = "Elevate Your",
    title2 = "Digital Vision",
    description,
    showCTA = false,
}: {
    title1?: string;
    title2?: string;
    description?: string;
    showCTA?: boolean;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#030303]">
            <div className="absolute inset-0 bg-linear-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] dark:from-indigo-500/[0.05] dark:via-transparent dark:to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                {/* Large circle - top left */}
                <ElegantShape
                    delay={0.2}
                    width={400}
                    height={400}
                    rotate={0}
                    borderRadius={200}
                    gradient="from-indigo-500/[0.3] dark:from-indigo-500/[0.4]"
                    className="left-[-15%] top-[-15%]"
                />

                {/* Wide rectangle - bottom right */}
                <ElegantShape
                    delay={0.5}
                    width={700}
                    height={180}
                    rotate={12}
                    borderRadius={90}
                    gradient="from-rose-500/[0.3] dark:from-rose-500/[0.4]"
                    className="right-[-25%] bottom-[-5%]"
                />

                {/* Medium square - middle left */}
                <ElegantShape
                    delay={0.4}
                    width={320}
                    height={320}
                    rotate={20}
                    borderRadius={40}
                    gradient="from-violet-500/[0.28] dark:from-violet-500/[0.38]"
                    className="left-[-8%] top-[45%]"
                />

                {/* Small pill - top right */}
                <ElegantShape
                    delay={0.6}
                    width={280}
                    height={120}
                    rotate={-18}
                    borderRadius={60}
                    gradient="from-amber-500/[0.3] dark:from-amber-500/[0.4]"
                    className="right-[8%] top-[8%]"
                />

                {/* Medium rectangle - center right */}
                <ElegantShape
                    delay={0.7}
                    width={380}
                    height={200}
                    rotate={30}
                    borderRadius={100}
                    gradient="from-emerald-500/[0.28] dark:from-emerald-500/[0.38]"
                    className="right-[-12%] top-[50%]"
                />

                {/* Circle - bottom left */}
                <ElegantShape
                    delay={0.3}
                    width={250}
                    height={250}
                    rotate={0}
                    borderRadius={125}
                    gradient="from-blue-500/[0.3] dark:from-blue-500/[0.4]"
                    className="left-[15%] bottom-[8%]"
                />

                {/* Small rectangle - top center */}
                <ElegantShape
                    delay={0.8}
                    width={180}
                    height={100}
                    rotate={40}
                    borderRadius={50}
                    gradient="from-purple-500/[0.28] dark:from-purple-500/[0.38]"
                    className="left-[42%] top-[12%]"
                />

                {/* Horizontal pill - middle bottom */}
                <ElegantShape
                    delay={0.9}
                    width={500}
                    height={140}
                    rotate={-10}
                    borderRadius={70}
                    gradient="from-teal-500/[0.28] dark:from-teal-500/[0.38]"
                    className="left-[20%] top-[65%]"
                />

                {/* Small circle accent - top */}
                <ElegantShape
                    delay={1.0}
                    width={150}
                    height={150}
                    rotate={0}
                    borderRadius={75}
                    gradient="from-pink-500/[0.3] dark:from-pink-500/[0.4]"
                    className="right-[25%] top-[5%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <style>{shimmerStyles}</style>
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants as any}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-blue-400/20">
                            <span className={cn("text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", pacifico.className)}>
                                Libzeno
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants as any}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-linear-to-b from-black to-black/80 dark:from-white dark:to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400",
                                    pacifico.className
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>
                    <motion.div
                        custom={2}
                        variants={fadeUpVariants as any}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-black/50 dark:text-white/50 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                            {description || "UI Components built with Tailwind CSS."}
                        </p>
                    </motion.div>
                    
                    {showCTA && (
                        <motion.div
                            custom={3}
                            variants={fadeUpVariants as any}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <a
                                href="#contact"
                                className="shimmer-button group relative inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                            >
                                <span className="relative z-10">Get Started Free</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a
                                href="#features"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-neutral-900 text-blue-600 dark:text-blue-400 font-bold rounded-full border-2 border-blue-500/30 dark:border-blue-400/30 hover:border-blue-500/60 dark:hover:border-blue-400/60 transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                Explore Features
                            </a>
                        </motion.div>
                    )}
                </div>
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-white/80 dark:from-[#030303] dark:via-transparent dark:to-[#030303]/80 pointer-events-none" />
        </div>
    );
}
