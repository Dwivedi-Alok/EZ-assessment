import React from "react";
import rMove from "../../assets/rightmove.png";
import lMove from "../../assets/LeftMove.png";
import film from "../../assets/Subtract.png";

// Arrow Icons
const IconChevronLeft = () => (
  <img src={rMove} alt="Previous" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-10" />
);

const IconChevronRight = () => (
  <img src={lMove} alt="Next" className="w-4 h-4 sm:w-5 sm:h-6 md:w-8 md:h-10" />
);

// Play Button
const IconPlayButton = () => (
  <div className="w-14 h-10 md:w-16 md:h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-red-700">
    <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-transparent border-l-white ml-1" />
  </div>
);

export default function Tape({ children, onPrev, onNext, onPlay, showPlayButton }) {
  return (
    <div className="w-full max-w-2xl mx-auto p-3 sm:p-4 md:p-6 lg:p-8 pb-2 mt-2">

      {/* Film Frame */}
      <div className="relative w-[80%] flex justify-center">

        <img src={film} alt="film frame" className="w-full h-auto pointer-events-none" />

        {/* Center Video */}
        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[80%] xs:w-[78%] sm:w-[76%] md:w-[73%] 
            aspect-video bg-black rounded-md overflow-hidden z-10
          "
        >
          {children}
        </div>

        {/* Play Button */}
        {showPlayButton && (
          <button
            onClick={onPlay}
            className="absolute inset-0 flex items-center justify-center group z-30"
          >
            <IconPlayButton />
          </button>
        )}

        {/* LEFT ARROW */}
        <button
          onClick={onPrev}
          className="
            absolute flex justify-center items-center bg-white cursor-pointer z-20 rounded-md 
            transition-transform duration-200 hover:scale-95

            /* Mobile */
            h-[80px] w-[26px] left-[2%] top-1/2 -translate-y-1/2

            /* XS screens */
            xs:h-[104px] xs:w-[29px]

            /* SM screens */
            sm:h-[128px] sm:w-[35px]

            /* MD screens */
            md:h-[176px] md:w-[44px] md:left-[1.8%]

            /* LG screens */
            lg:h-[210px] lg:w-[48px]

            /* XL screens */
            xl:h-[220px] xl:w-[56px]
          "
          aria-label="Previous item"
        >
          <IconChevronLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={onNext}
          className="
            absolute flex justify-center items-center bg-white cursor-pointer z-20 rounded-md 
            transition-transform duration-200 hover:scale-95

            /* Mobile */
            h-[80px] w-[26px] right-[2%] top-1/2 -translate-y-1/2

            /* XS screens */
            xs:h-[104px] xs:w-[29px]

            /* SM screens */
            sm:h-[128px] sm:w-[35px]

            /* MD screens */
            md:h-[168px] md:w-[44px] md:right-[1.8%]

            /* LG screens */
            lg:h-[210px] lg:w-[48px]

            /* XL screens */
            xl:h-[240px] xl:w-[56px]
          "
          aria-label="Next item"
        >
          <IconChevronRight />
        </button>

      </div>
    </div>
  );
}
