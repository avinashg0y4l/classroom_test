"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Add Web3Forms access key
    formData.append("access_key", "2d47e15b-b36e-48db-9163-4f65a29a6e4a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        event.target.reset();
      } else {
        setStatus({ type: "error", message: "Failed to send message." });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Something went wrong." });
    }
  }

  return (
    <section id="Contact" className="relative bg-black py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          Contact <span className="text-cyan-400">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Let’s work together! Feel free to reach out 🚀
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:avinashg0y4l@gmail.com" className="text-cyan-400 hover:underline">
                avinashg0y4l@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                linkedin.com/in/yourlinkedin
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <a
                href="https://github.com/avinashg0y4l"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                github.com/avinashg0y4l
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 mb-5 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 mb-5 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-3 mb-5 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none"
              required
            />
            <button type="submit" className="w-full py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition">
              Send Message
            </button>
            {status && (
              <p className={`mt-4 ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
