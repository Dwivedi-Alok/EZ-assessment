import React from "react";

export default function CardFront({ title, imageUrl }) {
  return (
    <div className="w-64 md:w-72 bg-white shadow-2xl p-4 pb-6 rounded-sm cursor-pointer">
      
      {/* Image Wrapper (Taller like original polaroid) */}
      <div className="w-full h-80 md:h-96 bg-gray-200 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-center mt-4 font-serif text-xl md:text-2xl text-gray-800">
        {title}
      </h3>

    </div>
  );
}
