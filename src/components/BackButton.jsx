import React from "react";
import { useNavigate } from "react-router-dom";
import IconChevronLeft from "./icons/IconChevronLeft";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center space-x-1 px-4 py-2 border border-orange-400 text-orange-600 rounded-full hover:bg-orange-50 transition shadow-sm"
    >
      <IconChevronLeft className="w-4 h-4" />
      <span className="font-medium">Back</span>
    </button>
  );
}
