import Profile from "../components/profile";
import Experiences from "../components/experiences";
import Projects from "../components/projects";
import StickyComponent from "../components/stickyComponent";

export default function Home() {
  return (
    <main className="bg-white pointer-events-none">
      <StickyComponent className="z-10">
        <Profile />
      </StickyComponent>
      <StickyComponent className="z-10">
        <Experiences />
      </StickyComponent>
      <StickyComponent className="z-10">
         <Projects />
      </StickyComponent>
    </main>
  );
}
