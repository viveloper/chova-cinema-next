import React from 'react';
import Image from 'next/image';
import MovieDetailTitle from '../MovieDetailTitle';
import MovieDetailStatistics from '../MovieDetailStatistics';
import MovieDetailSummary from '../MovieDetailSummary';
import MovieDetailSpecialScreen from '../MovieDetailSpecialScreen';
import MovieDetailAsideButtons from '../MovieDetailAsideButtons';
import { Casting, MovieDetail, SpecialScreen } from '@/query/types';

interface MovieDetailHeadProps {
  movieDetail: MovieDetail;
  casting: Casting[];
  specialScreen: SpecialScreen[];
  onTicketingClick: () => void;
}

const MovieDetailHead = ({
  movieDetail,
  casting,
  specialScreen,
  onTicketingClick,
}: MovieDetailHeadProps) => {
  return (
    <div style={{ position: 'relative', minHeight: '240px', paddingLeft: '245px' }}>
      <Image
        src={movieDetail.PosterURL}
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
      <MovieDetailTitle viewGradeCode={movieDetail.ViewGradeCode} title={movieDetail.MovieNameKR} />
      <MovieDetailStatistics
        viewEvaludation={movieDetail.ViewEvaluation}
        bookingRate={movieDetail.BookingRate}
        cumulativeAudience={movieDetail.KOFCustCnt}
      />
      <MovieDetailSummary movieDetail={movieDetail} casting={casting} />
      <MovieDetailSpecialScreen items={specialScreen} />
      <div style={{ position: 'absolute', right: 0, bottom: '10px' }}>
        <MovieDetailAsideButtons
          likeCount={movieDetail.LikeCount}
          onTicketingClick={onTicketingClick}
        />
      </div>
    </div>
  );
};

export default MovieDetailHead;
