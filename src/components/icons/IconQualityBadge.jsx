import React from "react";

export default function IconQualityBadge({ className = "w-20 h-20" }) {
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
      <path d="M32 48l-12 7 2-14-10-9 14-2 6-13 6 13 14 2-10 9 2 14-12-7z" />
      <path d="M48 24a16 16 0 10-32 0 16 16 0 0032 0zM24 24h4M36 24h-4M30 20v4" />
    </svg>
  );
}
