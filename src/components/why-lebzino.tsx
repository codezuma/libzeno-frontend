"use client";

import { motion } from "motion/react";
import { 
    Zap, 
    Target, 
    Shield, 
    Lightbulb, 
    Users,
    TrendingUp 
} from "lucide-react";

export default function WhyLibzeno() {
    const problems = [
        {
            icon: Zap,
            title: "Bloated Software",
            description: "Existing solutions try to do everything, making them complex and hard to use. Businesses waste time learning instead of working."
        },
        {
            icon: Target,
            title: "Lack of Focus",
            description: "Generic tools don't address specific industry needs. You get features you don't need and miss the ones you do."
        },
        {
            icon: Shield,
            title: "Poor Support",
            description: "Enterprise solutions are expensive. Affordable tools come with minimal support when you need help most."
        }
    ];

    const differentiators = [
        {
            icon: Lightbulb,
            title: "Deep Expertise",
            description: "We specialize in one domain at a time, building profound knowledge and crafting exceptional solutions."
        },
        {
            icon: Users,
            title: "Built for Real Users",
            description: "Every feature is designed with actual user feedback. We listen, iterate, and continuously improve based on your needs."
        },
        {
            icon: TrendingUp,
            title: "Future Ready",
            description: "Scalable architecture and regular updates ensure your software grows with your business, not against it."
        }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5
            }
        })
    };

    return (
        <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-black dark:via-blue-950/20 dark:to-black overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl dark:from-blue-500/5 dark:to-purple-500/5"></div>
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl dark:from-purple-500/5 dark:to-blue-500/5"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        custom={0}
                        variants={fadeInUp}
                        className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-blue-400/20"
                    >
                        <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Why Choose Libzeno
                        </span>
                    </motion.div>

                    <motion.h2
                        custom={1}
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white"
                    >
                        The Problems We Solve
                    </motion.h2>

                    <motion.p
                        custom={2}
                        variants={fadeInUp}
                        className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
                    >
                        Businesses are drowning in complexity. Libzeno offers a better way.
                    </motion.p>
                </motion.div>

                {/* Problems Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8 mb-20"
                >
                    {problems.map((problem, index) => {
                        const Icon = problem.icon;
                        return (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={fadeInUp}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-500/0 dark:from-red-500/10 dark:to-red-500/0 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative bg-white dark:bg-neutral-900/50 border border-red-500/20 dark:border-red-500/10 rounded-xl p-8 hover:border-red-500/40 dark:hover:border-red-500/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-950/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                                        {problem.title}
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        {problem.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-16 origin-center"
                ></motion.div>

                {/* Differentiators Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        custom={0}
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white"
                    >
                        Our Unique Approach
                    </motion.h2>

                    <motion.p
                        custom={1}
                        variants={fadeInUp}
                        className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
                    >
                        Built on principles of simplicity, expertise, and customer obsession.
                    </motion.p>
                </motion.div>

                {/* Differentiators Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {differentiators.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={fadeInUp}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative bg-white dark:bg-neutral-900/50 border border-blue-500/20 dark:border-blue-500/10 rounded-xl p-8 hover:border-blue-500/40 dark:hover:border-blue-500/20 transition-all duration-300 h-full">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-center mt-16"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Discover Libzeno Today
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
