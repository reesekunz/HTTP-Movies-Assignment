import React from 'react';

class UpdateMovieForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: []
      };
    }
  
    handleChange = event => {
        this.setState({
          movies: {
            ...this.state.movies,
            [event.target.name]: event.target.value
          }
        });
      };

      handleSubmit = event => {
        event.preventDefault();
        this.props.handleSubmit(this.state.movies);
      };

      render () {
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


)
</form>
      </div>

      }
    }

    export default UpdateMovieForm;