"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {

  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 300,
    },
    onscreen: {
      opacity: 1,
      y: 50,
      transition: {
        type: "spring" as const,
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  return (
    <div className="relative h-screen sticky top-0">
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        className="flex flex-col items-center min-h-screen justify-center min-h-[60vh] text-center z-10 pointer-events-none"
      >
        <div className="pointer-events-auto">
          <h1 className="text-5xl font-bold mb-4 font-amiko" style={{ color: 'var(--primary-color)' }}>
            Projects
          </h1>
          <div className="p-8 border-2 border-dashed border-gray-200 rounded-2xl">
            <p className="text-lg text-gray-500 italic">
              Building some cool stuff... coming soon!
            </p>
          </div>
        </div>
      </motion.div >
    </div>
  );
}