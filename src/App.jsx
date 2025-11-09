import React from 'react';
import Header from './components/Header';
import Background from './components/BAckground';
import HorizontalScroll from './pages/HorizontalScroll';
import Hero from './pages/Hero';
import AboutUs from './pages/AboutUs';
import AboutTeam from './pages/AboutTeams';
import StoryboardShowcase from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
function App() {
  return (
    <div className='h-[800px]'>

      <Header />
      <div className="horizontal-scroll-container h-4">
      <Hero/>
      <AboutTeam/>
      <AboutUs/>
      <StoryboardShowcase/>
      <Portfolio/>
      <Contact/>
    </div>
    </div>
  
  );
}

export default App;