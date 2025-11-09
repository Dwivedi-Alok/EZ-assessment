import React from "react";

export default function IconDocuments({ className = "w-16 h-16" }) {
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
      <path d="M40 56H20a4 4 0 01-4-4V12a4 4 0 014-4h24a4 4 0 014 4v8" />
      <path d="M44 56V24a4 4 0 00-4-4H24a4 4 0 00-4 4v32a4 4 0 004 4h20a4 4 0 004-4z" />
      <path d="M28 32h8m-8 8h8m-8 8h4M40 12V8H24v4" />
    </svg>
  );
}
