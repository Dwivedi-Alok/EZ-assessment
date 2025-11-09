import React, { useState } from "react";
import cA1 from "../assets/curleyArrow1.png"
import Tape from "../components/skeletons/Tape"; // Your Tape component
import cg from "../assets/camGroup.png"; // Your camera image
import mandala from "../assets/Footervector.png";
import Background from "../components/BAckground";

const youtubeVideos = [
  "https://www.youtube.com/embed/j20koh6IzEk?si=QF1BYq0zTNpuDtCk",
  "https://www.youtube.com/embed/hFk6zEVK2W8?si=gTj0EAxHNkk3ASwY",
  "https://www.youtube.com/embed/zRojK81iEt4?si=kSQKbw92oDM2YSit",
];

// --- Placeholder Header (to match the screenshot) ---


function Portfolio() {
  const [index, setIndex] = useState(0);

  const nextVideo = () => {
    setIndex((prev) => (prev + 1) % youtubeVideos.length);
  };

  const prevVideo = () => {
    setIndex((prev) => (prev - 1 + youtubeVideos.length) % youtubeVideos.length);
  };

  return (
    <Background>
    <div className=" min-h-screen w-full flex flex-col justify-center items-center text-gray-800 pt-10 pb-100 px-4">
   

      <main className="w-full max-w-7xl flex flex-col items-center">
        {/* Title */}
        
        <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-center animate-fade-in-up">
          The Highlight Reel
        </h1>
        {/* Subtitle */}
        <p className="text-lg md:text-lg text-gray-600 mt-2 mb-8 md:mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Watch the magic we've captured.
        </p>

        {/* Responsive layout for video section */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          
          {/* Camera Image (Left Side) */}
          {/* Hidden on small screens, visible on large */}
          <div className="hidden lg:block animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
            <img 
              src={cg} 
              alt="Vintage camera sketch" 
              className="w-56 h-auto"
              style={{
                width: '150px',
                height: '300px',
                top: '220px',
                left: '120px',
              }}
            />
          </div>

          {/* Tape Component (Right Side) */}
          {/* We wrap the Tape in a div to control its responsive max-width */}
          <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl">
            <Tape
              onNext={nextVideo}
              onPrev={prevVideo}
              showPlayButton={false} // Correct for YouTube embeds
            >
              <iframe
                src={youtubeVideos[index]}
                title="YouTube video player"
                className="w-full h-full rounded-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              />
            </Tape>
          </div>
          
        </div>
      </main>
    </div>
    </Background>
  );
}

export default Portfolio;