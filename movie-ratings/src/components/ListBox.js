import React from "react";
import MovieList from "./MovieList";

export default function ListBox({setIsOpen1, isOpen1, movies}) {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <MovieList movies={movies} />
      )}
    </div>
  );
}
