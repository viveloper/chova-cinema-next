import axios from 'axios';
import { CarouselItem, CarouselQuery, Movie, MoviesPageData, MoviesQuery } from './types';

export const queryMoviesPageData = async () => {
  const carouselQuery: CarouselQuery = { use: 'movie' };
  const currentMoviesQuery: MoviesQuery = { type: 'general', playing: 'Y', limit: 5 };
  const preMoviesQuery: MoviesQuery = { type: 'general', playing: 'N', limit: 5 };
  const arteMoviesQuery: MoviesQuery = { type: 'arte' };
  const operaMoviesQuery: MoviesQuery = { type: 'opera' };

  const [
    { data: carouselItems },
    { data: currentMovies },
    { data: preMovies },
    { data: arteMovies },
    { data: operaMovies },
  ] = await Promise.all([
    axios.get<CarouselItem[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/carousel`, {
      params: carouselQuery,
    }),
    axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/movies`, {
      params: currentMoviesQuery,
    }),
    axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/movies`, {
      params: preMoviesQuery,
    }),
    axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/movies`, {
      params: arteMoviesQuery,
    }),
    axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/movies`, {
      params: operaMoviesQuery,
    }),
  ]);

  const data: MoviesPageData = {
    carouselItems,
    currentMovies,
    preMovies,
    arteMovies,
    operaMovies,
  };

  return data;
};
