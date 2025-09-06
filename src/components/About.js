export default function About() {
  return (
    <section id="About" className="relative bg-black py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image / Illustration */}
          <div className="relative">
            <div className="absolute inset-0">
              <svg
                className="blur-3xl filter opacity-70"
                style={{ filter: "blur(80px)" }}
                width="400"
                height="400"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="200" cy="200" r="200" fill="url(#gradient)" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#06b6d4" /> {/* cyan-500 */}
                    <stop offset="1" stopColor="#9333ea" /> {/* purple-600 */}
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <img
              src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" 
              alt="Avinash Goyal"
              className="relative w-60 h-60 rounded-2xl object-cover shadow-lg mx-auto"
            />
          </div>

          {/* Right Side - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Hi 👋 I’m <span className="text-cyan-400 font-semibold">Avinash Goyal</span>, a 
              passionate <span className="text-purple-400 font-semibold">MERN Stack Developer</span>. 
              I love building scalable web applications and solving real-world problems using 
              modern technologies like <span className="text-cyan-400">React</span>,{" "}
              <span className="text-cyan-400">Next.js</span>,{" "}
              <span className="text-cyan-400">Node.js</span>, and{" "}
              <span className="text-cyan-400">MongoDB</span>.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              With experience in full-stack development, I focus on creating clean, 
              user-friendly interfaces and efficient backend solutions. I enjoy learning 
              new tools and contributing to projects that make an impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
