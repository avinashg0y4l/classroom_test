export default function ProjectCard({ title, description, tech, link, github }) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-800 hover:border-cyan-500 hover:shadow-cyan-500/30 transition flex flex-col justify-between h-full">
      <div>
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-gray-800 text-cyan-400 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Links - always at bottom */}
      <div className="flex justify-between items-center mt-6">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-cyan-400 hover:underline"
        >
          Live Demo
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-purple-400 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
