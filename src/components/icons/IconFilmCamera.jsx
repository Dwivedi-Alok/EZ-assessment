import React from "react";

export default function IconFilmCamera({ className = "w-20 h-20" }) {
  return (
    <svg
      className={className + " text-blue-900/50"}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 100-16 8 8 0 000 16zM28 20a8 8 0 100-16 8 8 0 000 16z" />
      <path d="M12 12h-4M28 12h4M48 24H8a4 4 0 00-4 4v28a4 4 0 004 4h40a4 4 0 004-4V28a4 4 0 00-4-4zM60 32l-8 4v-8l8-4v16z" />
      <path d="M10 32h4M10 40h4M10 48h4M46 32h-4M46 40h-4M46 48h-4" />
    </svg>
  );
}
