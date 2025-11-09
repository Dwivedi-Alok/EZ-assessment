import React from "react";

// ✅ Reusable components you already created
import BackButton from "../components/BackButton";
import BrushStroke from "../components/BrushStroke";
import CardFront from "../components/skeletons/CardFront";

// ✅ Icons you already created
import {
  IconHandDrawnArrow,
  IconQualityBadge,
  IconDocuments,
  IconStarInHand,
  IconPeople,
} from "../components/icons";
import Background from "../components/BAckground";

export default function BrandingPage() {
  return (
    <Background>
    <main className="container mx-auto px-6 pt-28 pb-24 relative z-10">

      {/* --- Quote Section --- */}
      <div className="flex flex-col items-center mb-16 px-4">
        <h2 className="font-serif italic text-2xl md:text-3xl text-gray-800 text-center max-w-3xl">
          "A brand is a voice, and a product is a souvenir." – Lisa Gansky
        </h2>
        <BrushStroke className="mt-2 w-full max-w-xl h-3" />
      </div>

      {/* --- Back Button --- */}
      <div className="absolute top-12 left-6 md:top-16 md:left-10">
        <BackButton />
      </div>

      {/* --- Decorative Icons --- */}
      <div className="absolute top-48 right-12 hidden lg:block opacity-60">
        <IconQualityBadge />
      </div>
      <div className="absolute top-96 right-32 hidden lg:block opacity-60">
        <IconDocuments />
      </div>
      <div className="absolute bottom-24 right-48 hidden lg:block opacity-60">
        <IconStarInHand />
      </div>
      <div className="absolute bottom-16 left-12 hidden lg:block opacity-60">
        <IconPeople />
      </div>

      {/* --- Main Layout --- */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 max-w-6xl mx-auto mt-12">

        {/* ✅ Left Side Card */}
        <div className="w-full lg:w-2/5 flex-shrink-0">
          <CardFront
            title="Branding"
            imageUrl="https://placehold.co/400x500/a5b4fc/1e1b4b?text=Branding"
          />
        </div>

        {/* ✅ Right Content */}
        <div className="w-full lg:w-3/5">
          <div className="text-gray-700 text-xl lg:text-2xl leading-relaxed space-y-6">
            <p>A brand isn't just what you see – it's what you remember.</p>
            <p>We shape brands people fall in love with.</p>
            <p className="font-semibold text-gray-800">V creates:</p>
          </div>

          <ul className="list-disc list-inside text-gray-700 text-xl lg:text-2xl leading-relaxed space-y-2 mt-6">
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
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
