// src/components/RightColumn.js
import React from 'react';

function RightColumn() {
  return (
    <section className="
      flex-1 flex flex-col justify-center  items-center
      min-h-[50vh] p-8 pb-20 
      md:p-0 md:pl-[5%] md:pr-[10%]
    ">
      <h1 className="font-[IslandMoments] text-4xl text-primary text-center  md:text-[4rem]  text-brand-blue leading-[1.3]">
        Varnan is where stories find <br />
        their voice and form
      </h1>

      <h2 className="text-lg md:text-3xl text-brand-orange text-orange-500 font-serif tracking-[2px] mt-8 mb-8">
        Films . Brands . Art
      </h2>

      <p className="text-sm my-4  text-center leading-relaxed max-w-lg">
        Since 2009, we've been telling stories - stories of people, their journeys, and
        the places that shape them. Some begin in polished boardrooms, others in
        humble village squares. But every story starts the same way - by listening with
        intention. We believe it takes trust, patience, and an eye for the unseen to
        capture what truly matters.
        V don't just tell stories - V honor them.
      </p>
    

    </section>
  );
}

export default RightColumn;