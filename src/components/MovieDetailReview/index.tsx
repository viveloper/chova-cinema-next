import ReviewBox, { ReviewBoxProps } from './ReviewBox';
import ScoreBox, { ScoreBoxProps } from './ScoreBox';
import classes from './MovieDetailReview.module.css';
import ReviewList, { ReviewListProps } from './ReviewList';
import { useQuery } from '@tanstack/react-query';
import { createQueryKey } from '@/query';
import { queryMovieReviewData } from '@/query/movieReviewData';
import { useMemo, useState } from 'react';
import { ReviewSortType } from '@/query/types';

export interface MovieDetailReviewProps {
  movieCode: string;
}

export default function MovieDetailReview({ movieCode }: MovieDetailReviewProps) {
  const [reviewBoxMode, setReviewBoxMode] = useState<ReviewBoxProps['mode']>('add');
  const [reviewBoxScore, setReviewBoxScore] = useState(10);
  const [reviewBoxText, setReviewBoxText] = useState('');
  const [currentReviewCount, setCurrentReviewCount] = useState(10);
  const [sortType, setSortType] = useState<ReviewSortType>('recent');

  const { data, isLoading } = useQuery({
    queryKey: createQueryKey({
      queryType: 'MOVIE_REVIEW_DATA',
      params: {
        movieCode,
        reviewPage: 1,
        reviewCount: currentReviewCount,
        reviewSortType: sortType,
      },
    }),
    queryFn: () =>
      queryMovieReviewData({
        movieCode,
        page: 1,
        count: currentReviewCount,
        sortType,
      }),
    enabled: Boolean(movieCode),
  });

  const handleReviewSubmit: ReviewBoxProps['onSubmit'] = ({ mode, score, text }) => {
    // TODO: require login
    let isLogin = false;
    if (!isLogin) {
      if (window.confirm('로그인이 필요한 기능입니다. 로그인 하시겠습니까?')) {
        // TODO: 로그인 페이지로 이동
        console.log('move login page');
      }
      return;
    }
    if (!text) return;

    if (mode === 'add') {
      // TODO: add api call
      console.log('add review', { mode, score, text });
    } else {
      // TODO: edit api call
      console.log('edit review', { mode, score, text });
    }

    // clear ReviewBox
    setReviewBoxMode('add');
    setReviewBoxScore(10);
    setReviewBoxText('');
  };

  const handleReviewDelete: ReviewListProps['onDelete'] = (reviewId) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      // TODO: delete api call
      console.log('delete review', reviewId);
    }
  };
  const handleReviewEdit: ReviewListProps['onEdit'] = (reviewId) => {
    const targetReview = data?.reviewList.find((item) => item.ReviewID === reviewId);
    if (!targetReview) return;
    setReviewBoxMode('edit');
    setReviewBoxScore(targetReview.Evaluation);
    setReviewBoxText(targetReview.ReviewText);
  };
  const handleReviewLike: ReviewListProps['onLike'] = (reviewId) => {
    // TODO: require login
    let isLogin = false;
    if (!isLogin) {
      if (window.confirm('로그인이 필요한 기능입니다. 로그인 하시겠습니까?')) {
        // TODO: 로그인 페이지로 이동
        console.log('move login page');
      }
      return;
    }

    // TODO: like api call
    console.log('like review', reviewId);
  };

  if (!data) return <></>;

  return (
    <>
      <section style={{ margin: '32px 0' }}>
        <ScoreBox
          score={data.avgScore}
          totalScore={10}
          description={
            <>
              영화 관람 후 관람평을 작성하시면 <br />
              L.POINT 50P를 적립해 드립니다.
            </>
          }
        />
      </section>
      <section style={{ margin: '32px 0' }}>
        <ReviewBox
          mode={reviewBoxMode}
          score={reviewBoxScore}
          text={reviewBoxText}
          maxLength={220}
          onScoreChange={(score) => setReviewBoxScore(score)}
          onTextChange={(text) => setReviewBoxText(text)}
          onSubmit={handleReviewSubmit}
        />
      </section>
      <section style={{ margin: '55px 0 32px 0' }}>
        <ReviewList
          totalCount={data.totalCount}
          list={data.reviewList}
          sortType={sortType}
          onDelete={handleReviewDelete}
          onEdit={handleReviewEdit}
          onLike={handleReviewLike}
          onSortTypeChange={(sortType) => setSortType(sortType)}
          onMoreShow={() => setCurrentReviewCount((v) => v + 10)}
        />
      </section>
    </>
  );
}
