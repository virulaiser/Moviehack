import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import MovieList from "./MovieList";
import Header from "./Header";
import Rating from "react-rating-stars-component";
import InfiniteScroll from "react-infinite-scroll-component";
import NavbarFilm from "./Navbar";
import BackToTop from "./BackToTop";

function Home() {
  const [selectedRate, setSelectedRate] = useState(0);
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=${page}`
      );
      setMovieData([...movieData, ...response.data.results]);
    };
    getMovie();
  }, [page]);

  return (
    movieData && (
      <>
        <NavbarFilm />
        <Header />

        <div className="container text-center mt-2">
          <div className="d-flex justify-content-center">
            <Rating onChange={(rate) => setSelectedRate(rate)} size={25} />
          </div>
        </div>
        <InfiniteScroll
          dataLength={movieData.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="container">
            <div className="row mt-1">
              <MovieList
                selectedRate={selectedRate}
                movieData={movieData}
                page={page}
                setPage={setPage}
              />
            </div>
          </div>
        </InfiniteScroll>
        <BackToTop />
      </>
    )
  );
}

export default Home;
