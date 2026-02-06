"use client";

import { useEffect } from "react";

export default function Themer() {
  useEffect(() => {

    const primary_colors = ["#3b83f6", "#ec4899", "#10b981", "#f59e0b", "#8b5cf6"];
    const secondary_colors = ["#22c55e'", "#fbcfe8", "#6ee7b7", "#fcd34d", "#c4b5fd"];
    const tertiary_colors = ["#00ccff", "#831843", "#065f46", "#92400e", "#5b21b6"];
    const random_index = Math.floor(Math.random() * primary_colors.length);

    document.documentElement.style.setProperty('--primary-color', primary_colors[random_index]);
    document.documentElement.style.setProperty('--secondary-color', secondary_colors[random_index]);
    document.documentElement.style.setProperty('--tertiary-color', tertiary_colors[random_index]);
    
  }, []);

  return null;
}