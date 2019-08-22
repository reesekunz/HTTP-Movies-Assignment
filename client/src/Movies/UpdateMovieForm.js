import React from "react";

class UpdateMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialMovieState: {
        title: "",
        director: "",
        metascore: "",
        stars: []
      }
    };
  }

  handleChange = event => {
    this.setState({
      initialMovieState: {
        ...this.state.initialMovieState,
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
            value={this.state.initialMovieState.title}
          />
          <input
            type="text"
            name="director"
            placeholder="director"
            onChange={this.handleChange}
            value={this.state.initialMovieState.director}
          />
          <input
            type="text"
            name="metascore"
            placeholder="metascore"
            onChange={this.handleChange}
            value={this.state.initialMovieState.metascore}
          />
          <input
            type="text"
            name="stars"
            placeholder="stars"
            onChange={this.handleChange}
            value={this.state.initialMovieState.star}
          />
          {/* <button className="update-button" type="submit"> */}
              <button>
            Submit Update
          </button>
        </form>
      </div>
    );
  }
}
export default UpdateMovieForm;
