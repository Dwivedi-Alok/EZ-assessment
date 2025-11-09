import React from "react";

export default function IconPeople({ className = "w-16 h-16" }) {
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
      <path d="M24 28a8 8 0 100-16 8 8 0 000 16zM32 44v-8a4 4 0 00-4-4h-8a4 4 0 00-4 4v8" />
      <path d="M40 28a8 8 0 100-16 8 8 0 000 16zM48 44v-8a4 4 0 00-4-4h-8a4 4 0 00-4 4v8" />
    </svg>
  );
}
