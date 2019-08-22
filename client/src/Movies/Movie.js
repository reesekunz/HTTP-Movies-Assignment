import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

import { Route, NavLink } from "react-router-dom";
import UpdateMovieForm from "./UpdateMovieForm";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.res));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  deleteMovie = movie => {
    axios
      .delete(`http://localhost:5000/api/movies/${movie.id}`)
      .then(response => this.props.history.push("/"))
      .catch(error => console.log(error.response));
  };

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        {/* Update with movie id routing  */}
        <button className="update-button">
          <NavLink
            to={{
              pathname: `/update-movie/${this.state.movie.id}`,
              state: this.state.movie
            }}
          >
            Update
          </NavLink>
        </button>
        {/* Delete button  */}
        <button onClick={() => this.deleteMovie(this.state.movie)}>
          Delete
        </button>
      </div>
    );
  }
}
