import { client } from '.';
import {
  CarouselItem,
  CarouselQuery,
  Movie,
  MoviesPageData,
  MoviesQuery,
  MovieReviewQuery,
  MovieReviewData,
} from './types';

export const queryMovieReviewData = async (query: MovieReviewQuery) => {
  const [{ data }] = await Promise.all([
    client.get<MovieReviewData>(`/review`, {
      params: query,
    }),
  ]);

  return data;
};
