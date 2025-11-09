import React from 'react';
import './Scrollbar.css';

const Scrollbar = ({ scrollPercentage }) => {
  return (
    <div className="scrollbar-container">
      <div
        className="scrollbar-thumb"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default Scrollbar;
