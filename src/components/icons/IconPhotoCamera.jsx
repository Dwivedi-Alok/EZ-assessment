import React from "react";

export default function IconPhotoCamera({ className = "w-16 h-16" }) {
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
      <path d="M52 52H12a4 4 0 01-4-4V24a4 4 0 014-4h8l4-8h16l4 8h8a4 4 0 014 4v24a4 4 0 01-4 4z" />
      <path d="M32 44a12 12 0 100-24 12 12 0 000 24z" />
      <path d="M16 28h4" />
    </svg>
  );
}
