"use client";

import { motion } from "framer-motion";
const primaryColor = "var(--primary-color)";

const experiences = [
    {
        id: 1,
        company: "Veeva Systems",
        role: "QA Engineer",
        period: "2026 - Present",
        description: "Ensuring software quality for life sciences cloud solutions."
    },
    {
        id: 2,
        company: "Freelance",
        role: "Full Stack Developer",
        period: "2024 - 2026",
        description: "Building scalable web apps using Next.js, Node.js and AWS."
    },
    {
        id: 3,
        company: "University Project",
        role: "Remote Sensing Lead",
        period: "2025",
        description: "Monitoring ocean debris in the Banda Sea using Python & Satellite Data."
    }
];

export default function Experiences() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(4px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                stiffness: 70,
                damping: 12,
            },
        },
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                className="space-y-5"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl font-bold text-center mb-16 text-gray-900 "
                >
                    Work Experience
                </motion.h2>
                {experiences.map((exp) => (
                    <motion.div
                        key={exp.id}
                        variants={itemVariants}
                        className="flex flex-col md:flex-row gap-10 md:items-baseline pb-8 pointer-events-none w-200 relative z-10 text-center p-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl"
                    >
                        <div className="md:w-1/3">
                            <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                            <span className="text-sm text-gray-400 font-mono">{exp.period}</span>
                        </div>
                        <div className="md:w-2/3">
                            <h4 className="text-lg font-medium mb-2" style={{ color: primaryColor }}>{exp.role}</h4>
                            <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}