import React from "react";
import { MoviesList } from "../components/MoviesList";
import { Prealoder } from "../components/Prealoder";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };
  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Captain`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  searchMovies = (str, type = "all") => {
    this.setState({ loading: false });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="content container">
        <Search searchMovies={this.searchMovies} />

        {loading ? <Prealoder /> : <MoviesList movies={movies} />}
      </main>
    );
  }
}

export { Main };
