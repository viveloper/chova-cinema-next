import { Casting, MovieDetail } from '@/query/types';
import React from 'react';
import classes from './MovieDetailSummary.module.css';

export type MovieSummary = {
  genreName: string;
  genreName2: string;
  makingNationName: string;
  releaseDate: string;
  playTime: number;
};

export interface MovieDetailSummaryProps {
  movieSummary: MovieSummary;
  casting: Casting[];
}

const MovieDetailSummary = ({ movieSummary, casting }: MovieDetailSummaryProps) => {
  return (
    <ul className={classes['detail-info']}>
      <li>
        <span className={classes['detail-info-type']}>장르</span>
        <span
          className={classes['detail-info-value']}
        >{`${movieSummary.genreName}, ${movieSummary.genreName2} / ${movieSummary.makingNationName}`}</span>
        <span className={`${classes['detail-info-value']} ${classes['separator']}`}>{`${
          movieSummary.releaseDate.split(' ')[0].split('-')[0]
        }.${movieSummary.releaseDate.split(' ')[0].split('-')[1]}.${
          movieSummary.releaseDate.split(' ')[0].split('-')[2]
        } 개봉`}</span>
        <span
          className={`${classes['detail-info-value']} ${classes['separator']}`}
        >{`${movieSummary.playTime}분`}</span>
      </li>
      <li>
        <span className={classes['detail-info-type']}>감독</span>
        <span className={classes['detail-info-value']}>
          {casting.length > 0 && casting.find((staff) => staff.Role === '감독')?.StaffName}
        </span>
      </li>
      <li>
        <span className={classes['detail-info-type']}>출연</span>
        <span className={classes['detail-info-value']}>
          {casting
            .filter((staff) => staff.Role === '배우')
            .map((staff) => staff.StaffName)
            .join(', ')}
        </span>
      </li>
    </ul>
  );
};

export default MovieDetailSummary;
