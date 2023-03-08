import React, { useState } from 'react';
import { Theme } from '../types';
import MovieCard from './MovieCard';
import classes from './MovieCardList.module.css';
import { Props as MovieCardProps } from './MovieCard';
import { Movie } from '@/query/types';

export interface Props {
  theme: Theme;
  movies: Movie[];
  showNum: number;
  ticketingPath: string;
  movieDetailBasePath: string;
}

const MovieCardList = ({ theme, movies, showNum, ticketingPath, movieDetailBasePath }: Props) => {
  const [startActiveIndex, setStartActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setStartActiveIndex(startActiveIndex - 1);
  };
  const handleNextClick = () => {
    setStartActiveIndex(startActiveIndex + 1);
  };

  const cardWidth = 184;
  const cardMargin = 15;

  return (
    <div
      className={classes.movieList}
      style={{
        width: `${cardWidth * showNum + cardMargin * (showNum - 1)}px`,
      }}
    >
      <div className={classes.nav}>
        <button onClick={handlePrevClick} className={startActiveIndex <= 0 ? classes.hide : ''}>
          <span className={classes.prev}>
            <i className="fas fa-angle-left fa-2x"></i>
          </span>
        </button>
        <button
          onClick={handleNextClick}
          className={startActiveIndex + showNum >= movies.length ? classes.hide : ''}
        >
          <span className={classes.next}>
            <i className="fas fa-angle-right fa-2x"></i>
          </span>
        </button>
      </div>
      <div className={classes.listContianer}>
        <ul
          className={classes.movies}
          style={{ transform: `translateX(${startActiveIndex * -199}px)` }}
        >
          {movies.map((movie, index) => (
            <li key={movie.RepresentationMovieCode} className={classes.movie}>
              <MovieCard
                movie={movie}
                number={index + 1}
                theme={theme}
                ticketingPath={ticketingPath}
                movieDetailPath={`${movieDetailBasePath}/${movie.RepresentationMovieCode}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieCardList;
