import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieDetails() {
  const params = useParams();
  const id = params.id;
  const [movieSelectedData, setSelectedMovieData] = useState([]);
  useEffect(() => {
    const getSelectedMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }`
      );
      setSelectedMovieData(response.data);
    };
    getSelectedMovie();
  }, []);
  return (
    movieSelectedData && (
      <>
        <div className="container">
          <div className="card m-3 ">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original" +
                    movieSelectedData.poster_path
                  }
                  className="img-fluid rounded-start"
                  alt={"Poster " + movieSelectedData.original_title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title mb-5 text-danger fw-bold text-decoration-underline">
                    {movieSelectedData.original_title}
                  </h5>
                  <div>
                    <h6 className="card-text fw-bold text-danger">
                      Description:
                    </h6>
                    <p className="card-text text-black">
                      {movieSelectedData.overview}
                    </p>
                  </div>
                  <div className="mt-5">
                    <h6 className="card-text fw-bold text-danger">
                      Additional information:
                    </h6>
                    <ul>
                      <li className="card-text">
                        <span className="fw-medium ">Original Language: </span>
                        <span className="text-uppercase">
                          {movieSelectedData.original_language}
                        </span>
                      </li>
                      <li className="card-text">
                        <span className="fw-medium">Release Year:</span>{" "}
                        {movieSelectedData.release_date ? (
                          <span>
                            {movieSelectedData.release_date.substring(0, 4)}
                          </span>
                        ) : (
                          <span>{movieSelectedData.release_date}</span>
                        )}
                      </li>
                      <li className="card-text">
                        <span className="fw-medium">Rating:</span>{" "}
                        <span>{movieSelectedData.vote_average}</span>
                      </li>
                    </ul>
                  </div>
                  <h5 className=" mt-5">
                    <Link to="/" className="home-link ">
                      <i
                        className="fa-solid fa-house "
                        style={{ color: "#0ab607" }}
                      >
                        <span className="ms-1">Home</span>
                      </i>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default MovieDetails;
