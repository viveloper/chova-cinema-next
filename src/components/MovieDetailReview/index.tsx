import ReviewBox, { ReviewBoxProps } from './ReviewBox';
import ScoreBox from './ScoreBox';
import ReviewList, { ReviewListProps } from './ReviewList';
import { useQuery } from '@tanstack/react-query';
import { createQueryKey } from '@/query';
import { queryMovieReviewData } from '@/query/movieReviewData';
import { useEffect, useState } from 'react';
import { Review, ReviewSortType } from '@/query/types';
import styled from '@emotion/styled';
import { Grid as GridLoading } from 'react-loader-spinner';

export interface MovieDetailReviewProps {
  movieCode: string;
}

export default function MovieDetailReview({ movieCode }: MovieDetailReviewProps) {
  const [reviewBoxMode, setReviewBoxMode] = useState<ReviewBoxProps['mode']>('add');
  const [reviewBoxScore, setReviewBoxScore] = useState(10);
  const [reviewBoxText, setReviewBoxText] = useState('');
  // const [reviewCount, setReviewCount] = useState(10);
  const [reviewPage, setReviewPage] = useState(1);
  const [sortType, setSortType] = useState<ReviewSortType>('recent');
  const [reviewList, setReivewList] = useState<Review[]>([]);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: createQueryKey({
      queryType: 'MOVIE_REVIEW_DATA',
      params: {
        movieCode,
        reviewPage,
        reviewCount: 10,
        reviewSortType: sortType,
      },
    }),
    queryFn: () =>
      queryMovieReviewData({
        movieCode,
        page: reviewPage,
        count: 10,
        sortType,
      }),
    enabled: Boolean(movieCode),
    onSuccess: (data) => {
      setReivewList((v) => {
        // console.log('prev', v);
        // console.log('next', data.reviewList);
        // console.log('merge', [...v, ...data.reviewList]);
        return [...v, ...data.reviewList];
      });
    },
    keepPreviousData: true,
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
    const targetReview = reviewList.find((item) => item.ReviewID === reviewId);
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

  return (
    <div>
      {isLoading && (
        <GridLoading
          height="48"
          width="48"
          color="#9c9c9c"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '96px 0',
          }}
          visible={true}
        />
      )}
      {data && (
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
              list={reviewList}
              sortType={sortType}
              isFetching={isFetching}
              onDelete={handleReviewDelete}
              onEdit={handleReviewEdit}
              onLike={handleReviewLike}
              onSortTypeChange={(sortType) => {
                setReivewList([]);
                setReviewPage(1);
                setSortType(sortType);
              }}
              onMoreShow={() => setReviewPage((v) => v + 1)}
            />
          </section>
        </>
      )}
    </div>
  );
}

const LoadingWrapper = styled.div`
  position: absolute;
  min-height: 200px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
