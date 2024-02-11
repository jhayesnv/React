import React, { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

export default function Main({ movies, watched }) {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <main className="main">
      <ListBox setIsOpen1={setIsOpen1} isOpen1={isOpen1} movies={movies} />
      <WatchedBox
        setIsOpen2={setIsOpen2}
        isOpen2={isOpen2}
        watched={watched}
        avgImdbRating={avgImdbRating}
        avgUserRating={avgUserRating}
        avgRuntime={avgRuntime}
      />
    </main>
  );
}
