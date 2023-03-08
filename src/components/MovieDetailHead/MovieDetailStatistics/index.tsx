import React from 'react';
import numberWithCommas from '@/utils/numberWithCommas';
import classes from './MovieDetailStatistics.module.css';

interface MovieDetailStatisticsProps {
  viewEvaludation: number;
  bookingRate: number;
  cumulativeAudience: number;
}

const MovieDetailStatistics = ({
  viewEvaludation,
  bookingRate,
  cumulativeAudience,
}: MovieDetailStatisticsProps) => {
  return (
    <ul className={classes['statistics']}>
      <li>
        <span className={classes['statistics-type']}>관람객 평점</span>
        <span className={classes['statistics-value']}>
          <span className={classes['icon-star']}>
            <i className="fas fa-star"></i>
          </span>{' '}
          {viewEvaludation}
        </span>
      </li>
      <li>
        <span className={classes['statistics-type']}>예매율</span>
        <span className={classes['statistics-value']}>{bookingRate}%</span>
      </li>
      <li>
        <span className={classes['statistics-type']}>누적 관객수</span>
        <span className={classes['statistics-value']}>
          {numberWithCommas(cumulativeAudience)} 명
        </span>
      </li>
    </ul>
  );
};

export default MovieDetailStatistics;
