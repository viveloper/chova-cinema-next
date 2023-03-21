import { client } from '.';
import { CarouselItem, CarouselQuery, HomePageData, Movie, MoviesQuery } from './types';

export const queryHomePageData = async () => {
  const carouselQuery: CarouselQuery = { use: 'home' };
  const moviesQuery: MoviesQuery = { limit: 10 };

  const [{ data: carouselItems }, { data: movies }] = await Promise.all([
    client.get<CarouselItem[]>(`/carousel`, {
      params: carouselQuery,
    }),
    client.get<Movie[]>(`/movies`, {
      params: moviesQuery,
    }),
  ]);

  const data: HomePageData = {
    carouselItems,
    movies,
  };

  return data;
};
