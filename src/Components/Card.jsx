import React from "react";
import { Star, Eye } from "lucide-react";
import { Link } from 'react-router-dom'

function Card({ movie }) {
  return (

    <Link to={`/movie/${movie.id}`}>
    <div className="group bg-[#1d1d1d] border border-zinc-800 rounded-lg p-3 hover:border-[#6ac045] transition-all duration-300">
      <div className="relative overflow-hidden rounded-md">
        <img
          src={movie.medium_cover_image}
          alt={movie.title}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
          <Star size={32} fill="#facc15" color="#facc15" />

          <h2 className="text-white text-xl font-bold">{movie.rating} / 10</h2>

          <p className="text-zinc-300 text-sm">{movie.genres?.join(" / ")}</p>

          <button className="flex items-center gap-2 bg-[#6ac045] text-white px-4 py-2 rounded">
            <Eye size={17} />
            View Details
          </button>
        </div>
      </div>

      <h2 className="text-white font-bold mt-3 truncate">{movie.title}</h2>

      <p className="text-zinc-400 text-sm mt-1">{movie.year}</p>
    </div>


    </Link>
  );
}

export default Card;
