"use client";
import { motion } from "framer-motion";

export default function Orb() {
    return (
        <motion.div
            animate={{
                scale: [1, 1.2, 1],  
                x: [0, 100, -100, 0], 
                y: [0, -50, 50, 0],  
                rotate: [0, 45, -45, 0],
            }}
            transition={{
                duration: 20, 
                repeat: Infinity, 
                ease: "easeInOut"
            }} className="
        absolute 
        top-1/2 
        left-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        w-[1000px] 
        h-[700px]
        bg-gradient-to-tr
        from-[var(--primary-color)]
        via-[var(--tertiary-color)]
        to-[var(--secondary-color)]
        rounded-full 
        blur-3xl 
        opacity-50 
        animate-blob 
        mix-blend-multiply
        animation-delay-2000 
        -z-10"
        />
    )
}