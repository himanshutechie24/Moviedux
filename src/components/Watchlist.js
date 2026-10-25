import { React, useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ watchList, movies, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {movies
          .filter((movie) => watchList.includes(movie.id))
          .map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isWatchListed={true}
              toggleWatchlist={toggleWatchlist}
            />
          ))}
      </div>
    </div>
  );
}
