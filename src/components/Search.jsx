import React, { useState } from "react";

const Search = (props) => {
  const { searchMovies } = props;

  const [search, setSearch] = useState("");

  const [type, setType] = useState("all");

  // state = {
  //   search: "",
  //   type: "all",
  // };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search);
    }
  };
  const handleBtn = (event) => {
    if (event) {
      searchMovies(search, type);
    }
  };

  const handlefilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          id="email"
          type="search"
          placeholder="search"
          className="validate"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          onClick={(value) => handleBtn(value, type)}
          className="btn waves-effect waves-light blue darken-3 btn-right"
          type="submit"
          name="action"
        >
          Search <i className=" material-icons right">search</i>
        </button>
      </div>
      <div className="radio_btn">
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type={"all"}
            onChange={handlefilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type={"movie"}
            onChange={handlefilter}
            checked={type === "movie"}
          />
          <span>Only Movies</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type={"series"}
            onChange={handlefilter}
            checked={type === "series"}
          />
          <span>Only Series</span>
        </label>
      </div>
    </div>
  );
};

export { Search };
