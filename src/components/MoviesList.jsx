import { MovieListCard } from "./MovieListCard";

const MoviesList = (props) => {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <MovieListCard key={movie.imdbID} {...movie} />)
      ) : (
        <h5>Not Found</h5>
      )}
    </div>
  );
};

export { MoviesList };
