import React, { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList";
import { Prealoder } from "../components/Prealoder";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.Search), setLoading(false))
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search), setLoading(false))
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="content container">
      <Search searchMovies={searchMovies} />

      {loading ? <Prealoder /> : <MoviesList movies={movies} />}
    </main>
  );
};

export { Main };
