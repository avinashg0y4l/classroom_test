import { Code, Layers, Globe } from "lucide-react"; // icons

export default function Services() {
  const services = [
    {
      title: "Full-Stack Development",
      description:
        "Building scalable web applications using the MERN stack (MongoDB, Express, React, Node.js). From frontend to backend, I deliver complete solutions.",
      icon: <Layers className="w-10 h-10 text-cyan-400" />,
    },
    {
      title: "Frontend Development",
      description:
        "Crafting responsive, interactive, and modern UIs with React, Next.js, and Tailwind CSS for seamless user experiences.",
      icon: <Code className="w-10 h-10 text-purple-400" />,
    },
    {
      title: "Backend & APIs",
      description:
        "Designing secure and efficient REST APIs, handling authentication, databases, and server-side logic with Node.js & Express.",
      icon: <Globe className="w-10 h-10 text-cyan-400" />,
    },
  ];

  return (
    <section id="Services" className="relative bg-black py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          My <span className="text-cyan-400">Services</span>
        </h2>

        {/* Service Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800 hover:border-purple-500 hover:shadow-purple-500/30 transition flex flex-col items-start"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
