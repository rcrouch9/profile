"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "Geospatial Analyst", 
  "QA Automation Engineer",
  "Remote Sensing Specialist",
  "Enjoyer of Food"
];

export default function Skills() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-gray-500"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}