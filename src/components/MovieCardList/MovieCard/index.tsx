import React, { MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './MovieCard.module.css';
import { Theme } from '@/components/types';
import { Movie } from '@/query/types';

export interface MovieCardProps {
  movie: Movie;
  cardNumber: number;
  theme: Theme;
  ticketingPagePath: string;
  movieDetailPagePath: string;
}

const MovieCard = ({
  movie,
  cardNumber,
  theme,
  ticketingPagePath,
  movieDetailPagePath,
}: MovieCardProps) => {
  return (
    <div className={`${classes.card} ${theme === 'light' ? classes.light : ''}`}>
      <div className={classes.imgContainer}>
        <Image src={movie.posterUrl} alt="poster" fill sizes="184px" />
        <em className={classes.index}>{cardNumber}</em>
        <div className={classes.hoverLayer}>
          <Link href={ticketingPagePath}>예매하기</Link>
          <Link href={movieDetailPagePath}>상세정보</Link>
        </div>
      </div>
      <div className={classes.info}>
        <p className={classes.title}>{movie.movieName}</p>
        <div className={classes.subInfo}>
          <span className={classes.rate}>예매율 {movie.bookingRate.toFixed(1)}%</span>
          {Number(movie.dday) > 0 ? (
            <span className={classes.dday}>{`D-${movie.dday}`}</span>
          ) : (
            <span className={classes.star}>
              <span className={classes.icon}>
                <i className="fas fa-star"></i>
              </span>{' '}
              <span>{movie.viewEvaluation}</span>
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
