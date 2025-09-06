"use client";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with Next.js, Tailwind CSS, and deployed on Vercel.",
      tech: ["Next.js", "Tailwind", "Vercel"],
      link: "https://yourportfolio.com",
      github: "https://github.com/avinashg0y4l/portfolio",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-stack MERN e-commerce app with authentication, product management, and payments integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
      github: "#",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat app using Socket.io and Node.js with authentication and private messaging.",
      tech: ["React", "Node.js", "Socket.io"],
      link: "#",
      github: "#",
    },
  ];

return (
    <section id="Projects" className="relative bg-black py-20 sm:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
                My <span className="text-cyan-400">Projects</span>
            </h2>

            {/* Grid of Project Cards */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <div className="flex justify-center" onClick={() => window.location.href = '/Project'}>
                <button className="mt-12 px-6 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition">
                    View All Projects
                </button>
            </div>
        </div>
    </section>
);
}
