import axios from 'axios';
import { CarouselItem, CarouselQuery, HomePageData, Movie, MoviesQuery } from './types';

export const queryHomePageData = async () => {
  const carouselQuery: CarouselQuery = { use: 'home' };
  const moviesQuery: MoviesQuery = { type: 'general', limit: 10 };

  const [{ data: carouselItems }, { data: movies }] = await Promise.all([
    axios.get<CarouselItem[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/carousel`, {
      params: carouselQuery,
    }),
    axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/movies`, {
      params: moviesQuery,
    }),
  ]);

  const data: HomePageData = {
    carouselItems,
    movies,
  };

  return data;
};
