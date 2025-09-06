export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Side - Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://avinashg0y4l.github.io/portfolio/ " className="text-white font-semibold">avinashg0y4l</a>. All rights reserved.
        </p>

        {/* Right Side - Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/avinashg0y4l"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:avinashg0y4l@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
