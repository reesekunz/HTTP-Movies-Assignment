import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
    title: "",
    director: "",
    metascore: "",
    stars: [],
};

const UpdateMovieForm = props => {
    const [updateMovie, setUpdateMovie] = useState(initialMovie);
  
    useEffect(() => {
        setUpdateMovie(props.location.state)
    }, [props.location.state])


    const handleChange = event => {
        event.persist();
        let value = event.target.value;
        if (event.target.name === 'stars') {
            value = value.split(',')
        }

        setUpdateMovie({
            ...updateMovie,
            [event.target.name]: value
          });
        };

  
        const handleSubmit = event => {
            event.preventDefault();
            axios
            .put(`http://localhost:5000/api/movies${updateMovie.id}`, updateMovie)
              .then(response => {
                console.log(response);
                setUpdateMovie(initialMovie);
                props.updateMovies(response.data);
                props.history.push('/');
              })
              .catch(error => console.log(error.response));
          };
        


    return (
      <div className="update-movie-form">
        <h2>Update Movie</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            value={updateMovie.title}

          />
          <input
            type="text"
            name="director"
            placeholder="director"
            onChange={handleChange}
            value={updateMovie.director}
          />
          <input
            type="text"
            name="metascore"
            placeholder="metascore"
            onChange={handleChange}
            value={updateMovie.metascore}
          />
          <input
            type="text"
            name="stars"
            placeholder="stars"
            onChange={handleChange}
            value={updateMovie.stars.toString()}
          />
          <button className="update-button" type="submit">
            Submit Update
          </button>
        </form>
      </div>
    );
  }

export default UpdateMovieForm;
