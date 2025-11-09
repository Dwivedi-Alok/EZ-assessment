import React from "react";

export default function IconStarInHand({ className = "w-16 h-16" }) {
  return (
    <svg
      className={`${className} text-blue-900/50`}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M28 28l-4 12-12-4 12-4 4-12 4 12 12 4-12 4-4-12z" />
      <path d="M48 40c0-4-4-8-8-8s-8 4-8 8v16h24V40H48z" />
      <path d="M56 40V32a4 4 0 00-4-4h-4" />
    </svg>
  );
}
