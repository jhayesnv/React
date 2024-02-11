import React from "react";
import Movie from "./Movie";

function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
