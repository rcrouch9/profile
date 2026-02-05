"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StickyComponent({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  //const rotate = useTransform(scrollYProgress, [0, 0.3], [0, 10]);
  //const blur = useTransform(scrollYProgress, [0, 0.3], ["blur(0px)", "blur(4px)"]);

  return (
    <div ref={containerRef} className={`relative h-[100vh] pointer-events-none ${className}`}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <motion.div 
          style={{ opacity, scale, y, /*rotate , filter: blur*/ }} 
          className="w-full h-full flex flex-col items-center justify-center"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}