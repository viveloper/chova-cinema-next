import React from 'react';
import Image from 'next/image';
import MovieDetailTitle from './MovieDetailTitle';
import MovieDetailStatistics from './MovieDetailStatistics';
import MovieDetailSummary, { MovieSummary } from './MovieDetailSummary';
import MovieDetailSpecialScreen from './MovieDetailSpecialScreen';
import MovieDetailAsideButtons from './MovieDetailAsideButtons';
import { Casting, SpecialScreen, ViewGradeCode } from '@/query/types';

export type MovieDetail = {
  movieName: string;
  posterUrl: string;
  viewGradeCode: ViewGradeCode;
  viewEvaluation: number;
  bookingRate: number;
  cumulativeAudience: number;
  likeCount: number;
} & MovieSummary;

export interface MovieDetailHeadProps {
  movieDetail: MovieDetail;
  casting: Casting[];
  specialScreen: SpecialScreen[];
  ticketingPagePath: string;
}

const MovieDetailHead = ({
  movieDetail,
  casting,
  specialScreen,
  ticketingPagePath,
}: MovieDetailHeadProps) => {
  return (
    <div style={{ position: 'relative', minHeight: '240px', paddingLeft: '245px', width: '980px' }}>
      <Image
        src={movieDetail.posterUrl}
        alt="poster"
        width={205}
        height={293}
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          borderRadius: '4px',
        }}
      />
      <MovieDetailTitle viewGradeCode={movieDetail.viewGradeCode} title={movieDetail.movieName} />
      <MovieDetailStatistics
        viewEvaludation={movieDetail.viewEvaluation}
        bookingRate={movieDetail.bookingRate}
        cumulativeAudience={movieDetail.cumulativeAudience}
      />
      <MovieDetailSummary movieSummary={movieDetail} casting={casting} />
      <MovieDetailSpecialScreen items={specialScreen} />
      <div style={{ position: 'absolute', right: 0, bottom: '10px' }}>
        <MovieDetailAsideButtons
          likeCount={movieDetail.likeCount}
          ticketingPagePath={ticketingPagePath}
        />
      </div>
    </div>
  );
};

export default MovieDetailHead;
