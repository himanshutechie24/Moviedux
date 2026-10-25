import { React, useState, useEffect } from "react";
import "../styles.css";

export default function MovieCard({ movie, isWatchListed, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };
  const getRatingColor = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating >= 6) {
      return "rating-average";
    } else {
      return "rating-poor";
    }
  };

  return (
    <div className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingColor(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchListed}
            onChange={() => toggleWatchlist(movie.id)}
          />
          <span className="slider">
            <span className="slider-label">
              {isWatchListed ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
