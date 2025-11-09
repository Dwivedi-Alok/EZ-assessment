import React from "react";

export default function CardBack({ title, description }) {
  return (
    <div className="w-64 md:w-72 bg-white shadow-2xl p-6 rounded-sm text-center cursor-pointer">
      <h3 className="font-serif text-2xl text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}
