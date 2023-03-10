import React, { MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './MovieCard.module.css';
import { Theme } from '@/components/types';
import { Movie } from '@/query/types';

export interface Props {
  movie: Movie;
  number: number;
  theme: Theme;
  ticketingPath: string;
  movieDetailPath: string;
}

const MovieCard = ({ movie, number, theme, ticketingPath, movieDetailPath }: Props) => {
  return (
    <div className={`${classes.card} ${theme === 'light' ? classes.light : ''}`}>
      <div className={classes.imgContainer}>
        <Image src={movie.PosterURL} alt="poster" fill sizes="184px" />
        <em className={classes.index}>{number}</em>
        <div className={classes.hoverLayer}>
          <Link href={ticketingPath}>예매하기</Link>
          <Link href={movieDetailPath}>상세정보</Link>
        </div>
      </div>
      <div className={classes.info}>
        <p className={classes.title}>{movie.MovieNameKR}</p>
        <div className={classes.subInfo}>
          <span className={classes.rate}>예매율 {movie.BookingRate.toFixed(1)}%</span>
          {Number(movie.DDay) > 0 ? (
            <span className={classes.dday}>{`D-${movie.DDay}`}</span>
          ) : (
            <span className={classes.star}>
              <span className={classes.icon}>
                <i className="fas fa-star"></i>
              </span>{' '}
              <span>{movie.ViewEvaluation}</span>
            </span>
          )}
          <span className={classes.heart}>
            <i className="fab fa-gratipay"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
