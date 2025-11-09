import React from "react";

export default function IconCamcorder({ className = "w-16 h-16" }) {
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
      <path d="M46 24L32 16v32l14-8z" />
      <path d="M34 22h-8a4 4 0 00-4 4v12a4 4 0 004 4h8a4 4 0 004-4v-4l12-8v-4L38 26v-4a4 4 0 00-4-4z" />
      <path d="M20 42h-8M20 34h-8" />
    </svg>
  );
}

