import React from 'react';
import HeroMandala from '../assets/HeroMandala.png';

function LeftColumn() {
  return (
    <section
      className="
        flex-1 flex justify-center items-center relative 
        min-h-[50vh] p-8 md:p-0
      "
    >
      {/* Spinning Mandala */}
      <div
        className="
          absolute inset-0
          flex justify-center items-center
          motion-safe:animate-[spin_60s_linear_infinite]
          pointer-events-none
        "
      >
        <img
          src={HeroMandala}
          alt="Mandala"
          className="w-[80%] h-[80%] object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="text-5xl   text-gray-800 relative z-10">
        <span className="font-[IslandMoments]  font-bold text-brand-red text-[5rem] mr-1">
          V
        </span>
        Films
      </div>
    </section>
  );
}

export default LeftColumn;
