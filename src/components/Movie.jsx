/* import { useState } from "react"; */
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-5">
        <Link to={"/movie/" + movie.id}>
          <img
            src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
            alt={"Poster " + movie.original_title}
            className="img-fluid rounded shadow movie-img"
          />
        </Link>
      </div>
    </>
  );
}

export default Movie;
