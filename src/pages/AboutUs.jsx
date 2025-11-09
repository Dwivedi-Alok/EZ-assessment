import React from 'react'
import Background from '../components/BAckground'
import img from '../assets/image.png'
import obj from '../assets/OBJECTS.png'
import f9 from '../assets/Frame9.png'
import f22 from '../assets/Frame22.png'
import f23 from '../assets/Frame23.png'
import { useVerticalParallax } from '../lib/useVerticalParallax'

function AboutUs() {
  return (
    <Background>
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 pt-14 pb-10 overflow-visible">
        
        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-[1600px] mx-auto">

          {/* LEFT SIDE */}
          <div className="space-y-5 flex flex-col items-center lg:items-start">

            <h1 
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 text-center lg:text-left"
              style={{ fontFamily: 'Halant, serif', maxWidth: '520px', lineHeight: '1.1' }}
            >
              A montage of familiar faces and names.
            </h1>

            <p 
              className="text-[15px] sm:text-base text-gray-700 text-center lg:text-left leading-relaxed"
              style={{ fontFamily: 'Instrument Sans, sans-serif', maxWidth: '520px' }}
            >
              Some stories come from the biggest names. Others begin with bold, rising voices.
              We've been fortunate to walk alongside both – listening, creating, 
              and building stories that matter.
            </p>

            {/* STACKED CARDS */}
            <div className="relative w-full max-w-[420px] h-[210px] sm:h-[230px] mt-4">

              <img
                ref={useVerticalParallax(0.1)}
                src={f9}
                alt=""
                className="absolute w-[140px] sm:w-[150px] drop-shadow-lg"
                style={{ left: "0px", top: "0px", transform: "rotate(8deg)" }}
              />

              <img
                ref={useVerticalParallax(0.1)}
                src={f22}
                alt=""
                className="absolute w-[150px] sm:w-[160px] drop-shadow-lg z-10"
                style={{ left: "110px", top: "10px", transform: "rotate(7deg)" }}
              />

              <img
                ref={useVerticalParallax(0.1)}
                src={f23}
                alt=""
                className="absolute w-[160px] sm:w-[170px] drop-shadow-lg z-20"
                style={{ left: "220px", top: "20px", transform: "rotate(8deg)" }}
              />

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex flex-col items-center lg:items-end space-y-30 overflow-visible">

            <h2 
              className="font-[IslandMoments] text-2xl sm:text-3xl lg:text-4xl text-primary text-center lg:text-right"
              style={{ maxWidth: '800px', lineHeight: '1.3' }}
            >
              Every project is more than just a brief – it's a new chapter waiting to be written.
              Together, we've crafted tales that inspire, connect, and endure.
            </h2>

            {/* ✅ Rotating Circle that goes BELOW the bottom */}
            <div className="relative w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] overflow-visible">

              {/* The element that hangs below */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-170px] sm:bottom-[-190px] lg:bottom-[-210px] w-full">

                <div className="relative w-full aspect-square">

                  {/* rotating circle */}
                  <img 
                    src={img} 
                    alt="circle"
                    className="w-full h-full object-contain motion-safe:animate-[spin_60s_linear_infinite]"
                  />

                  {/* mountain artwork */}
                  <img 
                    src={obj} 
                    alt="mountain"
                    className="absolute top-[37%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[62%] object-contain"
                  />

                </div>
              </div>

              {/* spacer to prevent cutting the overflow */}
              <div className="h-[220px] sm:h-[250px] lg:h-[280px] w-full"></div>

            </div>

          </div>

        </div>

      </div>
    </Background>
  )
}

export default AboutUs
