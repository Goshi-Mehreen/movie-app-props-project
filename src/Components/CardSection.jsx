import React from "react";
import Buttons from "./Buttons";
import MovieList from "./MovieList";
import { useState } from "react";

function CardSection({searchQuery}) {
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  return (
    <div className="bg-zinc-950 pb-10">
      <Buttons page={page} setPage={setPage} totalMovies={totalMovies} />
      <br />
      <MovieList page={page} setTotalMovies={setTotalMovies} searchQuery={searchQuery} />

      <div></div>
    </div>
  );
}

export default CardSection;
