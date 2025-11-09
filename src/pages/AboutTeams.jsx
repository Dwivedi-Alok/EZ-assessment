import React from 'react';

import indiaGate from '../assets/indiaGate.png';
import humanFigures from '../assets/humanFigures.png';

// ✅ import parallax hook
import { useHorizontalParallax } from '../lib/useHorizontalParallax';

const CurvedArrow = ({ className, direction = 'right' }) => (
  <svg
    className={`absolute ${className} pointer-events-none`}
    width="150"
    height="100"
    viewBox="0 0 150 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {direction === 'right' ? (
      <path
        d="M5 60 C 40 10, 110 10, 145 60"
        stroke="#888"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd="url(#arrowhead)"
      />
    ) : (
      <path
        d="M145 60 C 110 10, 40 10, 5 60"
        stroke="#888"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd="url(#arrowhead)"
      />
    )}
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="9"
        refY="3.5"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#888" />
      </marker>
    </defs>
  </svg>
);

function AboutTeam() {

  // ✅ apply parallax only to the image stack
  const offsetY = useHorizontalParallax(0.25);

  return (
    <div className="bg-[#fef6f3] min-h-screen w-full relative overflow-hidden flex flex-col items-center pt-32 pb-20 font-sans px-4">

      {/* Background India Gate */}
      <img
        src={indiaGate}
        alt="India Gate sketch"
        className="absolute bottom-0 left-0 w-64 md:w-96 opacity-60 z-0 pointer-events-none"
      />

      <main className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 items-start z-10 relative">

        {/* LEFT - Sticky Note */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start pt-1/8">
          <div className="relative w-full max-w-md lg:max-w-none lg:w-[360px] p-8 bg-[#fffacd] shadow-lg rotate-[-3deg] sticky-note-effect z-20">

            {/* Paper Clip */}
            <div className="absolute -top-6 right-3 w-10 h-10 flex items-center justify-center rotate-[15deg]">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#606060" strokeWidth="2">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.2a2 2 0 0 1-2.83-2.83l8.49-8.49"></path>
              </svg>
            </div>

            <p className="text-base md:text-lg text-gray-800 leading-relaxed font-cursive">
              Some craft films. Some build brands. Some curate art.
              We bring it all together — a collective of storytellers
              driven by one belief: every project should become a masterpiece.
              <br /><br />
              From first spark to final frame, from raw ideas to timeless
              visuals — we shape stories that stay with you.
            </p>
          </div>
        </div>

        {/* RIGHT - Parallax Image Stack */}
        <div className="w-full lg:w-2/3 flex flex-col items-center">

          {/* ✅ Parallax applied HERE */}
          <div
            className="relative w-full max-w-2xl pb-24"
            style={{ transform: `translateY(${offsetY}px)` }}
          >
            {/* Human Figures */}
            <img
              src={humanFigures}
              alt="Team silhouettes"
              className="w-full h-auto relative z-10"
            />

            {/* Film Makers */}
            <p className="absolute top-[12%] left-[58%] text-lg md:text-xl font-serif italic text-gray-700 -rotate-6 z-20">
              Film Makers
            </p>
            <CurvedArrow
              className="top-[5%] left-[42%] sm:block hidden w-[130px] h-[90px] rotate-[12deg] z-20"
              direction="right"
            />

            {/* Art Curators */}
            <p className="absolute top-[20%] right-[3%] text-lg md:text-xl font-serif italic text-gray-700 rotate-12 z-20">
              Art Curators
            </p>
            <CurvedArrow
              className="top-[17%] right-[12%] sm:block hidden w-[130px] h-[90px] rotate-[200deg] z-20"
              direction="left"
            />

            {/* Branding Experts */}
            <p className="absolute bottom-[25%] left-[13%] text-lg md:text-xl font-serif italic text-gray-700 rotate-6 z-20">
              Branding Experts
            </p>
            <CurvedArrow
              className="bottom-[30%] left-[20%] sm:block hidden w-[130px] h-[90px] rotate-[-10deg] z-20"
              direction="right"
            />
          </div>

          {/* CTA */}
          <p className="mt-8 text-xl md:text-2xl text-gray-800 font-serif text-center">
            Take a closer look at the stories we bring to life.
          </p>

          <button className="mt-6 py-3 px-8 bg-[#e85d04] text-white font-semibold rounded-full shadow-md hover:bg-[#f48c06] transition-colors duration-300">
            View Portfolio
          </button>
        </div>
      </main>

      {/* Sticky Note Bottom Torn Effect */}
      <style jsx>{`
        
      `}</style>
    </div>
  );
}

export default AboutTeam;
