import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Logo from "./components/Logo";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import MovieList from "./components/MovieList";
import Summary from "./components/Summary";
import WatchedList from "./components/WatchedList";
import Box from "./components/Box";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";

const apiKey = process.env.REACT_APP_API_KEY;

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
        );

        if (!res.ok)
          throw new Error(
            "Something went wrong while retrieving the movie list"
          );

        const data = await res.json();

        if (data.Response === "False")
          throw new Error(
            `Movies matching the search term "${query}" not found`
          );

        setMovies(data.Search);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    const timer = setTimeout(fetchMovies, 500);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSetQuery = (query) => {
    setQuery(query);
  };

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatchedMovie = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatchedMovie = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <Fragment>
      <NavBar movies={movies} watched={watched}>
        <Logo />
        <Search query={query} handleSetQuery={handleSetQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main movies={movies} watched={watched}>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !query.length && (
            <ErrorMessage
              message={"Type a term in the search bar above to begin!"}
            />
          )}
          {!isLoading && !error && (
            <MovieList handleSelectMovie={handleSelectMovie} movies={movies} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              handleCloseMovie={handleCloseMovie}
              apiKey={apiKey}
              handleAddWatchedMovie={handleAddWatchedMovie}
              watched={watched}
            />
          ) : (
            <Fragment>
              <Summary
                watched={watched}
                avgImdbRating={avgImdbRating}
                avgUserRating={avgUserRating}
                avgRuntime={avgRuntime}
              />
              <WatchedList watched={watched} handleDeleteWatchedMovie={handleDeleteWatchedMovie} />
            </Fragment>
          )}
        </Box>
      </Main>
    </Fragment>
  );
}
