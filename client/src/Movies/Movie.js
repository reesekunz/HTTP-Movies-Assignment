import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

import { Route, NavLink} from "react-router-dom";
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
        <Route
          exact
          path="/update-movie/:id"
          render={props => <UpdateMovieForm {...props} movie={this.state.movie} />}
        />
        <NavLink exact to={`/update-movie/${this.state.movie.id}`}>
          
        </NavLink>
        <button
          onClick={() =>
            this.props.history.push(`/update-movie${this.state.movie.id}`)
          }
          className="update-button"
        />
      </div>
    );
  }
}
