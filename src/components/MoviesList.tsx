import React from 'react';

import Movie from './Movie';
import './MoviesList.scss';

const MovieList = (props) => {
  return (
    <ul className="movies-list">
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
