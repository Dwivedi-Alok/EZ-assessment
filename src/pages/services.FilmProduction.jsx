import React, { useState } from "react";
import BackButton from "../components/BackButton";
import BrushStroke from "../components/BrushStroke";
import CardFront from "../components/skeletons/CardFront";
import CardBack from "../components/skeletons/CardBack";

import IconHandDrawnArrow from "../components/icons/IconHandDrawnArrow";
import IconFilmCamera from "../components/icons/IconFilmCamera";
import IconCamcorder from "../components/icons/IconCamcorder";
import IconTripod from "../components/icons/IconTripod";
import IconPhotoCamera from "../components/icons/IconPhotoCamera";
import Background from "../components/BAckground";

export default function FilmProductionPage() {
  const [flipped, setFlipped] = useState(false);

  return (
    <Background>
    <main className="container mx-auto px-6 pt-28 pb-24 relative z-10">
      {/* --- Quote Section --- */}
      <div className="flex flex-col items-center mb-16 px-4">
        <h2 className="font-serif italic text-2xl md:text-3xl text-gray-800 text-center max-w-2xl">
          "Filmmaking is a chance to live many lifetimes." – Robert Altman
        </h2>
        <BrushStroke className="mt-2 w-full max-w-lg h-3" />
      </div>

      {/* Back Button */}
      <div className="absolute top-12 left-6 md:top-16 md:left-10">
        <BackButton />
      </div>

      {/* Floating Icons */}
      <div className="absolute top-48 right-12 hidden lg:block opacity-60">
        <IconFilmCamera />
      </div>
      <div className="absolute top-96 right-32 hidden lg:block opacity-60">
        <IconCamcorder />
      </div>
      <div className="absolute bottom-24 right-48 hidden lg:block opacity-60">
        <IconTripod />
      </div>
      <div className="absolute bottom-16 left-12 hidden lg:block opacity-60">
        <IconPhotoCamera />
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 max-w-6xl mx-auto mt-12">
        
        {/* Left Column — CardFront/CardBack toggle */}
        <div
          className="w-full lg:w-2/5 flex-shrink-0"
          onClick={() => setFlipped(!flipped)}
        >
          {flipped ? (
            <CardBack
              title="Film Production"
              description="We craft documentaries, corporate videos, and animations that tell powerful stories."
            />
          ) : (
            <CardFront
              title="Film Production"
              imageUrl="https://placehold.co/400x400/166534/e0e7ff?text=Studio+Setup"
            />
          )}
        </div>

        {/* Right Column — Description */}
        <div className="w-full lg:w-3/5">
          <div className="text-gray-700 text-xl lg:text-2xl leading-relaxed space-y-6">
            <p>
              Who says films are just an escape? We see them as a way to live many
              lives – to feel, to explore, and to tell stories that stay.
            </p>
            <p className="font-semibold text-gray-800">V crafts:</p>
          </div>

          <ul className="list-disc list-inside text-gray-700 text-xl lg:text-2xl leading-relaxed space-y-2 mt-6">
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
          </ul>

          <div className="mt-12">
            <p className="text-xl font-semibold text-gray-800">Explore Now</p>
            <button className="mt-2 group">
              <IconHandDrawnArrow className="w-24 text-orange-500 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </main>
    </Background>
  );
}
