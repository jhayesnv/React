import React from "react";
import WatchedMovie from "./WatchedMovie";

function WatchedList({ watched, handleDeleteWatchedMovie }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} handleDeleteWatchedMovie={handleDeleteWatchedMovie} />
      ))}
    </ul>
  );
}
export default WatchedList;
