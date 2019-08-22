import React from "react";
import axios from "axios";

class UpdateMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialMovie: {
        title: "",
        director: "",
        metascore: "",
        stars: [],
      }
    };
  }

  handleChange = event => {
    this.setState({
      initialMovie: {
        ...this.state.movies,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.movies);
  };

  render() {
    return (
      <div className="update-movie-form">
        <h2>Update Movie</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={this.handleChange}
            value={this.state.movies.title}
          />
          <input
            type="text"
            name="director"
            placeholder="director"
            onChange={this.handleChange}
            value={this.state.movies.director}
          />
          <input
            type="text"
            name="metascore"
            placeholder="metascore"
            onChange={this.handleChange}
            value={this.state.movies.metascore}
          />
          <input
            type="text"
            name="stars"
            placeholder="stars"
            onChange={this.handleChange}
            value={this.state.movies.star}
          />
          <button className="update-button" type="submit">
            Submit Update
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateMovieForm;
