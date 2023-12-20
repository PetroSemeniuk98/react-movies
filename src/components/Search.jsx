import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };
  handleBtn = (event) => {
    if (event) {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handlefilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            id="email"
            type="search"
            placeholder="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            onClick={(value) => this.handleBtn(value, this.state.type)}
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
              onChange={this.handlefilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type={"movie"}
              onChange={this.handlefilter}
              checked={this.state.type === "movie"}
            />
            <span>Only Movies</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type={"series"}
              onChange={this.handlefilter}
              checked={this.state.type === "series" }
            />
            <span>Only Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
