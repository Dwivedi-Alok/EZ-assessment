import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import AboutTeams from './AboutTeams';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import './HorizontalScroll.css';

const HorizontalScroll = () => {
  return (
    <div className="horizontal-scroll-container">
      <Hero />
      <AboutUs />
      <AboutTeams />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default HorizontalScroll;
