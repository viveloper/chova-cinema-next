import { client } from '.';
import {
  MovieReviewQuery,
  MovieReviewData,
  MovieReviewPostData,
  Review,
  MovieReviewPutData,
  MovieReviewDeleteData,
} from './types';

export const queryMovieReviewData = async (query: MovieReviewQuery) => {
  const [{ data }] = await Promise.all([
    client.get<MovieReviewData>(`/review`, {
      params: query,
    }),
  ]);

  return data;
};

export const addMovieReviewData = async (data: MovieReviewPostData) => {
  const { data: review } = await client.post<Review>('/review', data);
  return review;
};

export const editMovieReviewData = async ({
  reviewId,
  data,
}: {
  reviewId: number;
  data: MovieReviewPutData;
}) => {
  const { data: review } = await client.put<Review>(`/review/${reviewId}`, data);
  return review;
};

export const deleteMovieReviewData = async (reviewId: number) => {
  const { data: review } = await client.delete<Review>(`/review/${reviewId}`);
  return review;
};
