import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import NavbarFilm from "./Navbar";

/* import { Link } from "react-router-dom"; */

function Search() {
  const [filmName, setFilmName] = useState("");
  const [movieSelectedSearch, setMovieSelectedSearch] = useState([]);

  useEffect(() => {
    const getSelectedMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${filmName}&api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }`
      );
      setMovieSelectedSearch(response.data);
    };
    getSelectedMovie();
  }, [filmName]);

  return (
    movieSelectedSearch && (
      <>
        <div className="container mt-5">
          <NavbarFilm />

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              name="filmName"
              id="filmName"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={filmName}
              onChange={(event) => setFilmName(event.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          {movieSelectedSearch.length > 0 ? (
            <div className="mt-3">
              {movieSelectedSearch.map((movie, id) => (
                <p key={id}>{movie.title}</p>
              ))}
            </div>
          ) : (
            <div className="mt-3">
              <p>No se encontraron resultados en la busqueda!</p>
            </div>
          )}
        </div>
      </>
    )
  );
}
export default Search;
