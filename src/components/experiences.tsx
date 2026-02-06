"use client";

import { motion } from "framer-motion";
const primaryColor = "var(--primary-color)";

const experiences = [
    {
        id: 1,
        company: "Miovision", 
        role: "Software Quality", 
        period: "May 2025 - Dec 2025", 
        description: "Reduced software Change Failure Rate from 40% to 5.6% and engineered automated workflows using Cypress and Playwright." 
    },
    {
        id: 2,
        company: "University of Waterloo IST", 
        role: "QA Software Developer", 
        period: "May 2024 - Aug 2024", 
        description: "Built a robust automated test suite for the uWaterloo API v3.0 with 100% coverage and improved dynamic test automation using PHP/Selenium." 
    },
    {
        id: 3,
        company: "Route This",
        role: "QA Developer & DB Maintainer", 
        period: "Sept 2023 - Dec 2023", 
        description: "Developed iOS test suites using Swift XCUI and maintained global footprint databases using ML object detection on satellite imagery." 
    },
    {
        id: 4,
        company: "Ministry of Transportation",
        role: "Geomatics Technician", 
        period: "Jan 2023 - Apr 2023",
        description: "Created and maintained ArcGIS web maps and generated data integration scripts using FME software."
    },
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
                className="space-y-4"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl font-bold text-center mb-5 text-gray-900 "
                >
                    Work Experience
                </motion.h2>
                {experiences.map((exp) => (
                    <motion.div
                        key={exp.id}
                        variants={itemVariants}
                        className="flex flex-col md:flex-row gap-10 md:items-baseline pb-4 pointer-events-none w-200 relative z-10 text-center p-10 rounded-2xl bg-[var(--primary-color)]/20 backdrop-blur-sm border border-white/20 shadow-xl"
                    >
                        <div className="md:w-1/3">
                            <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                            <span className="text-md text-gray-800 font-mono">{exp.period}</span>
                        </div>
                        <div className="md:w-2/3">
                            <h4 className="text-xl font-extrabold mb-2" style={{ color: primaryColor }}>{exp.role}</h4>
                            <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}