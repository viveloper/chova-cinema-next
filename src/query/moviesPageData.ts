import { client } from '.';
import { CarouselItem, CarouselQuery, Movie, MoviesPageData, MoviesQuery } from './types';

export const queryMoviesPageData = async () => {
  const carouselQuery: CarouselQuery = { use: 'movie' };
  const currentMoviesQuery: MoviesQuery = { playing: 'Y', limit: 5 };
  const preMoviesQuery: MoviesQuery = { playing: 'N', limit: 5 };
  const arteMoviesQuery: MoviesQuery = { type: 'arte' };
  const operaMoviesQuery: MoviesQuery = { type: 'opera' };

  const [
    { data: carouselItems },
    { data: currentMovies },
    { data: preMovies },
    { data: arteMovies },
    { data: operaMovies },
  ] = await Promise.all([
    client.get<CarouselItem[]>(`/carousel`, {
      params: carouselQuery,
    }),
    client.get<Movie[]>(`/movies`, {
      params: currentMoviesQuery,
    }),
    client.get<Movie[]>(`/movies`, {
      params: preMoviesQuery,
    }),
    client.get<Movie[]>(`/movies`, {
      params: arteMoviesQuery,
    }),
    client.get<Movie[]>(`/movies`, {
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
