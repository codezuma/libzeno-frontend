"use client";

import { motion } from "motion/react";
import { 
    Rocket, 
    Zap, 
    Globe, 
    Lock,
    BarChart3,
    Users
} from "lucide-react";

export default function ProductRoadmap() {
    const currentProduct = {
        name: "Libzbook",
        status: "Coming Soon",
        description: "Modern library management software designed for educational institutions. Complete digital transformation of your library operations.",
        features: [
            "Comprehensive book cataloging and inventory management",
            "Member registration and profile management",
            "Real-time issue and return tracking",
            "Automated fine calculation and management",
            "Advanced reporting and analytics",
            "Multi-location support for library networks",
            "Mobile app for members and librarians",
            "Seamless staff collaboration tools"
        ],
        icon: Rocket
    };

    const upcomingProducts: any[] = [];

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
        <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-black dark:via-purple-950/20 dark:to-black overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl dark:from-purple-500/5 dark:to-blue-500/5"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl dark:from-blue-500/5 dark:to-purple-500/5"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        custom={0}
                        variants={fadeInUp}
                        className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-400/20"
                    >
                        <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Our Product Journey
                        </span>
                    </motion.div>

                    <motion.h2
                        custom={1}
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white"
                    >
                        Introducing Libzbook
                    </motion.h2>

                    <motion.p
                        custom={2}
                        variants={fadeInUp}
                        className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
                    >
                        Our flagship product that transforms library management with modern, intuitive software designed for educational institutions.
                    </motion.p>
                </motion.div>

                {/* Current Product */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeInUp}
                    className="mb-20"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                        <div className="relative bg-gradient-to-br from-white to-green-50/30 dark:from-neutral-900/80 dark:to-green-950/30 border border-green-500/30 dark:border-green-500/20 rounded-2xl p-12">
                            <div className="flex items-start gap-8">
                                <div className="hidden md:flex w-24 h-24 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 dark:from-green-500/30 dark:to-emerald-500/30 flex-shrink-0 items-center justify-center">
                                    <Rocket className="w-12 h-12 text-green-600 dark:text-green-400" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">
                                            {currentProduct.name}
                                        </h3>
                                        <span className="inline-block px-4 py-1 rounded-full bg-green-100 dark:bg-green-950/50 border border-green-500/50 text-sm font-semibold text-green-700 dark:text-green-300">
                                            {currentProduct.status}
                                        </span>
                                    </div>
                                    <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                                        {currentProduct.description}
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {currentProduct.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                                                <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-20 origin-center"
                ></motion.div>

                {/* What's Coming */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.h3
                        custom={0}
                        variants={fadeInUp}
                        className="text-3xl font-bold text-neutral-900 dark:text-white mb-6"
                    >
                        Our Roadmap Ahead
                    </motion.h3>

                    <motion.p
                        custom={1}
                        variants={fadeInUp}
                        className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto"
                    >
                        After perfecting Libzbook, we'll expand to solve more critical challenges in business operations. Each product will receive the same obsessive attention to quality and user experience.
                    </motion.p>

                    <motion.div
                        custom={2}
                        variants={fadeInUp}
                        className="mt-12 bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 border border-purple-500/20 dark:border-purple-500/10 rounded-xl p-8 max-w-2xl mx-auto"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/30 to-blue-500/30 dark:from-purple-500/40 dark:to-blue-500/40 flex items-center justify-center flex-shrink-0">
                                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                                    Building One Product at a Time
                                </h4>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    Our strategy is simple: master one domain, deliver exceptional value, then apply those learnings to the next business challenge. Quality over speed. Impact over volume.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Vision Statement */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <motion.div
                        custom={0}
                        variants={fadeInUp}
                        className="inline-block max-w-3xl"
                    >
                        <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-500/20 dark:border-blue-500/10 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                                Libzbook: Our Flagship Launch
                            </h3>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                                We're completely transforming how educational institutions manage their libraries. Libzbook replaces outdated systems with modern, intuitive software that makes library management effortless. After launching Libzbook successfully, we'll expand to solve the next critical business challenge with the same obsessive focus on excellence.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <div className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                    <Rocket className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    Coming Soon
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                    <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                    For Libraries & Schools
                                </div>
                            </div>
                        </div>
                    </motion.div>
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
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Be Part of Our Journey
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
