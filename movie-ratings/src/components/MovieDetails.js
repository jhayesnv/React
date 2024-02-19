import React, { Fragment, useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";

function MovieDetails({ selectedId, handleCloseMovie, apiKey, handleAddWatchedMovie, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userRating, setUserRating] = useState('');

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    try {
      async function fetchMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?i=${selectedId}&apikey=${apiKey}`
        );
        const data = await res.json();
        setMovie(data);
      }
      fetchMovieDetails();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      setError("");
    }
  }, [selectedId]);


  const isWatched = watched.map(movie => movie.imdbID).includes(selectedId);

  const handleAdd = () => {

    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ').at(0)),
      userRating
    }

    handleAddWatchedMovie(newWatchedMovie);
    handleCloseMovie();
  };

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <header>
            <button className="btn-back" onClick={handleCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>{imdbRating} IMDB rating</p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? <Fragment><StarRating maxRating={10} size={24} setRating={setUserRating} userRating={userRating} />
              {userRating > 0 && <button className='btn-add' onClick={handleAdd}>+ Add to list</button>} </Fragment>: <p>You have already rated this movie</p>}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </Fragment>
      )}
    </div>
  );
}

export default MovieDetails;
