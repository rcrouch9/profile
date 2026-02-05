"use client";

import { useRef, useEffect } from "react";
import Profile from "../components/profile";
import Experiences from "../components/experiences";
import Projects from "../components/projects";
import StickyComponent from "../components/stickyComponent";

export default function Home() {

  const colors = [
      '#3b83f6c0',
      '#ef4444c0',
      '#22c55ec0',
      '#a855f7c0',
      '#f97316c0',
    ];
    const random_hex = colors[Math.floor(Math.random() * colors.length)];
    useEffect(() => {
      document.documentElement.style.setProperty('--primary-color', random_hex);
    }, []);

  const scrollContainerRef = useRef(null);

  return (
    <main ref={scrollContainerRef} className="relative h-screen w-full overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <StickyComponent className="z-10" scrollContainer={scrollContainerRef}>
        <Profile />
      </StickyComponent>
      <StickyComponent className="z-10" scrollContainer={scrollContainerRef}>
        <Experiences />
      </StickyComponent>
      <StickyComponent className="z-10" scrollContainer={scrollContainerRef}>
         <Projects />
      </StickyComponent>
    </main>
  );
}
