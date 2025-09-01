"use client"; // This is a client component

import { useState } from "react";
import UpdateMovie from "@/app/updateMovie/page";
import Link from "next/link";

export default function MovieSection({ favMovie, fact }) {
  const [changeMovie, setChangeMovie] = useState(false);

  if (!favMovie || changeMovie) {
    return <UpdateMovie />;
  }

  return (
    <>
      <div className="w-full max-w-2xl bg-gray-700 p-6 rounded-2xl shadow-md text-center">
        <h2 className="text-xl font-semibold text-gray-150 mb-2">Movie Fact 🎬</h2>
        <p className="text-gray-200">{fact}</p>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setChangeMovie(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-colors duration-200"
        >
          Update Movie
        </button>
      </div>
    </>
  );
}
