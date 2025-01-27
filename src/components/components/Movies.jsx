import React, { useState } from "react";

import Movie from "./Movie";
import axios from "axios";
import { useEffect } from "react";

function Movies({ rating }) {
  const [movies, setMovies] = useState([]);
  const minVoteAvg = (rating - 1) * 2;
  useEffect(() => {
    const getMovies = async () => {
      const response = axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&page1&votes_average.gte=${minVoteAvg}&${
          import.meta.env.VITE_TMDB_API_KEY
        }`
      );
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-3">
            <Movie movie={movie} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
