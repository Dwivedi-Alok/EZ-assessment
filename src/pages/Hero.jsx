import React from 'react';
import LeftColumn from '../components/Leftcolumn';
import RightColumn from '../components/RIghtcolumn';
import Background from '../components/BAckground';
function Hero() {

  return (
    <Background>
       <main className="flex flex-col md:flex-row w-full min-h-screen">
      <LeftColumn />
      <RightColumn />
    </main>
    </Background>
   
  );
}

export default Hero;