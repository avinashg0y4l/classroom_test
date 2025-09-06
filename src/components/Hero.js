"use client"; // Needed in Next.js App Router
import React, { useState, useEffect } from "react";

const ComponentName = () => {
  const [expanded, setExpanded] = useState(false);
  const texts = ["Avinash Goyal", "MERN Developer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!reverse && subIndex === texts[index].length) {
        setReverse(true);
      } else if (reverse && subIndex === 0) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % texts.length);
      } else {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div>
            {/* Hero Section */}
      <section id="Hero" className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white">
                Hey,
                <br />
                I'm  {texts[index].substring(0, subIndex)}
              </h1>
              <p className="mt-4 text-lg text-gray-400 sm:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>

              <form className="relative mt-8 sm:mt-12">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Try Java Developer, React Dev etc."
                    className="block w-full py-4 pr-6 pl-14 text-white placeholder-gray-500 bg-black border rounded-full"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-semibold text-black bg-white rounded-full"
                  >
                    Find A Developer
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side Image */}
            <div className="relative">
              <img
                className="relative w-full max-w-md mx-auto"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png"
                alt="Hero illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentName;
