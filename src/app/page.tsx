"use client";

import { useRef } from "react";
import Profile from "../components/profile";
import Experiences from "../components/experiences";
import Projects from "../components/projects";
import StickyComponent from "../components/stickyComponent";

export default function Home() {

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
