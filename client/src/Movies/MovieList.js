import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => {
        return <MovieDetails key={movie.id} movie={movie} />
      })}
    </div>
  );
};

const Button= styled.button`
  padding: 5px 40px;
  border-radius: 2px;
  margin-top: 20px;
  background-color: white;
  text-decoration: none;
  color: black;
  font-size: 16px;
`

function MovieDetails({ movie }) {
  const { title, director, metascore, stars, id } = movie;
  return (
    <div className="movie-card">
      {/* <Link to= {`/movies/${id}`}>Link</Link> */}
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map((star) => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <Button>
      <Link to= {`/movies/${id}`}>Link</Link>
      </Button>
    </div>
  );
}

export default MovieList;
