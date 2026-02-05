"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Profile() {
  const primaryColor = "var(--primary-color)";

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      filter: "blur(10px)" 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { 
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.8,
        delayChildren: 0.5
      }
    }
    };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      transition: { type: "spring" as const, stiffness: 100, damping: 10 } 
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pointer-events-s w-150 relative z-10 text-center p-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl"
    >
      <motion.div variants={itemVariants} className="relative inline-block w-40 h-40 mb-6">
        <div className="pointer-events-auto cursor-pointer relative w-full h-full rounded-full border-2 shadow-xl overflow-hidden"
        style={{ borderColor: primaryColor }}>
          <Image
            src="/profile-photo.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-6xl font-bold text-gray-900 mb-2">
        Hi, I'm <span style={{ color: primaryColor }}>Russ!</span>
      </motion.h1>
      <motion.p variants={itemVariants} className="text-2xl text-gray-500">
        Full Stack Developer
      </motion.p>
    </motion.div>
  );
}