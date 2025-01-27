import Movie from "./Movie";

function MovieList({ movieData, selectedRate }) {
  const rating = {
    0: [0, 10],
    1: [1, 3],
    2: [3, 5],
    3: [5, 7],
    4: [7, 9],
    5: [9, 10],
  };

  const ratingCompare = rating[selectedRate];

  const filteredMovies = movieData.filter(
    (movie) =>
      movie.vote_average >= ratingCompare[0] &&
      movie.vote_average < ratingCompare[1]
  );

  //**** por que el sort
  filteredMovies.sort(function (a, b) {
    return b.vote_average - a.vote_average;
  });

  return (
    <>
      {filteredMovies.length > 1 ? (
        filteredMovies.map((movie, id) => (
          <Movie key={id} movie={movie} filteredMovies={filteredMovies} />
        ))
      ) : (
        <div className="container mt-5 vh-100 d-flex justify-content-center">
          <h2 className="fst-italic text-white">
            Sorry, there are no movies for the entered score, please choose
            another one!
          </h2>
        </div>
      )}
    </>
  );
}

export default MovieList;
