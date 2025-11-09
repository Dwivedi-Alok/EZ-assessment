import React from "react";
import BG from "../assets/BG.png";
import BG2 from "../assets/BG(2).png";

function Background({ children }) {
  return (
    <div className="relative w-full min-h-screen">

      {/* Background 1 */}
      <img
        src={BG}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      {/* Background 2 (Overlapping BG1) */}
      <img
        src={BG2}
        alt="bg2"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default Background;
