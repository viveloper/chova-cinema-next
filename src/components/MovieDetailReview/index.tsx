import ReviewBox, { ReviewBoxProps } from './ReviewBox';
import ScoreBox from './ScoreBox';
import ReviewList, { ReviewListProps } from './ReviewList';
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createQueryKey } from '@/query';
import {
  addMovieReviewData,
  deleteMovieReviewData,
  editMovieReviewData,
  queryMovieReviewData,
} from '@/query/movieReviewData';
import { useMemo, useState } from 'react';
import { Review, ReviewSortType } from '@/query/types';
import { Grid as GridLoading } from 'react-loader-spinner';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/auth';
import getErrorMessage from '@/utils/getErrorMessage';

export interface MovieDetailReviewProps {
  movieCode: string;
}

// TODO: 에러 핸들링 모듈화 및 고도화

export default function MovieDetailReview({ movieCode }: MovieDetailReviewProps) {
  const [reviewBoxMode, setReviewBoxMode] = useState<ReviewBoxProps['mode']>('add');
  const [reviewBoxScore, setReviewBoxScore] = useState(10);
  const [reviewBoxText, setReviewBoxText] = useState('');
  const [sortType, setSortType] = useState<ReviewSortType>('recent');
  const [edittingReviewId, setEdittingReviewId] = useState<number | null>(null);

  const user = useRecoilValue(userState);

  const queryClient = useQueryClient();
  const { isLogin } = useAuth();
  const router = useRouter();

  const invalidateReviewQuery = () => {
    queryClient.invalidateQueries({
      queryKey: createQueryKey({
        queryType: 'MOVIE_REVIEW_INFINITE_DATA',
      }),
    });
  };

  const invalidateUserQuery = () => {
    queryClient.invalidateQueries({
      queryKey: createQueryKey({
        queryType: 'USER_DATA',
      }),
    });
  };

  const clearReviewBox = () => {
    setReviewBoxMode('add');
    setReviewBoxScore(10);
    setReviewBoxText('');
    setEdittingReviewId(null);
  };

  const { data, fetchNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery({
    queryKey: createQueryKey({
      queryType: 'MOVIE_REVIEW_INFINITE_DATA',
      options: {
        movieCode,
        reviewSortType: sortType,
      },
    }),
    queryFn: ({ pageParam = 1 }) =>
      queryMovieReviewData({
        movieCode,
        page: pageParam,
        count: 10,
        sortType,
      }),
    getNextPageParam: (lastPage, pages) => Number(lastPage.page) + 1,
    enabled: Boolean(movieCode),
  });

  const reviewList = useMemo(() => {
    if (!data) return [];
    let reviewList: Review[] = [];
    data.pages.forEach((page) => {
      page.reviews.forEach((review) => {
        reviewList.push(review);
      });
    });
    return !user
      ? reviewList
      : reviewList.map((item) =>
          user.reviewLikeList.includes(item.ReviewID) ? { ...item, MemberRecommandYN: 'Y' } : item,
        );
  }, [data, user]);

  const { mutate: addReview, isLoading: isAddReviewLoading } = useMutation({
    mutationFn: addMovieReviewData,
    onSuccess: () => {
      invalidateReviewQuery();
      invalidateUserQuery();
      clearReviewBox();
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(error);
      if (errorMessage) {
        alert(errorMessage);
      }
    },
  });

  const { mutate: editReview, isLoading: isEditReviewLoading } = useMutation({
    mutationFn: editMovieReviewData,
    onSuccess: () => {
      invalidateReviewQuery();
      invalidateUserQuery();
      clearReviewBox();
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(error);
      if (errorMessage) {
        alert(errorMessage);
      }
    },
  });

  const { mutate: deleteReview } = useMutation({
    mutationFn: deleteMovieReviewData,
    onError: (error) => {
      const errorMessage = getErrorMessage(error);
      if (errorMessage) {
        alert(errorMessage);
      }
    },
    onSuccess: () => {
      invalidateReviewQuery();
      invalidateUserQuery();
      clearReviewBox();
    },
  });

  const handleReviewSubmit: ReviewBoxProps['onSubmit'] = ({ mode, score, text }) => {
    // require login
    if (!isLogin) {
      if (window.confirm('로그인이 필요한 기능입니다. 로그인 하시겠습니까?')) {
        router.push('/login');
      }
      return;
    }
    if (!text) {
      window.alert('내용을 입력하세요.');
      return;
    }

    if (mode === 'add') {
      addReview({ movieCode, score, text });
    } else {
      if (!edittingReviewId) return;
      editReview({
        reviewId: edittingReviewId,
        data: { score, text, toggleLike: false },
      });
    }
  };

  const handleReviewDelete: ReviewListProps['onDelete'] = (reviewId) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteReview(reviewId);
    }
  };

  const handleReviewEdit: ReviewListProps['onEdit'] = (reviewId) => {
    const targetReview = reviewList.find((item) => item.ReviewID === reviewId);
    if (!targetReview) return;
    setReviewBoxMode('edit');
    setReviewBoxScore(targetReview.Evaluation);
    setReviewBoxText(targetReview.ReviewText);
    setEdittingReviewId(reviewId);
  };

  const handleReviewLike: ReviewListProps['onLike'] = (reviewId) => {
    if (isEditReviewLoading) {
      return;
    }

    if (!isLogin) {
      if (window.confirm('로그인이 필요한 기능입니다. 로그인 하시겠습니까?')) {
        router.push('/login');
      }
      return;
    }

    const targetReview = reviewList.find((item) => item.ReviewID === reviewId);
    if (!targetReview) return;
    editReview({
      reviewId,
      data: {
        score: targetReview.Evaluation,
        text: targetReview.ReviewText,
        toggleLike: true,
      },
    });
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
              score={data.pages[0].scoreAvg}
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
              isLoading={isAddReviewLoading || isEditReviewLoading}
              onScoreChange={(score) => setReviewBoxScore(score)}
              onTextChange={(text) => setReviewBoxText(text)}
              onSubmit={handleReviewSubmit}
            />
          </section>
          <section style={{ margin: '55px 0 32px 0' }}>
            <ReviewList
              totalCount={data.pages[0].totalCount}
              list={reviewList}
              ownReviewId={reviewList.find((review) => review.MemberID === user?.id)?.ReviewID}
              sortType={sortType}
              isFetchingNextPage={isFetchingNextPage}
              onDelete={handleReviewDelete}
              onEdit={handleReviewEdit}
              onLike={handleReviewLike}
              onSortTypeChange={(sortType) => setSortType(sortType)}
              onMoreShow={() => fetchNextPage()}
            />
          </section>
        </>
      )}
    </div>
  );
}
