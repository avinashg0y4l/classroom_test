import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/ProjectsData";

export default function ProjectsPage() {
  return (
    <section className="relative bg-black py-20 sm:py-28 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
