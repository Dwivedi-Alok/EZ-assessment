import React from "react";

export default function IconTripod({ className = "w-16 h-16" }) {
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
      <path d="M32 24l-12 36M32 24l12 36M40 44H24" />
      <path d="M32 24a6 6 0 100-12 6 6 0 000 12zM32 12V4" />
    </svg>
  );
}
