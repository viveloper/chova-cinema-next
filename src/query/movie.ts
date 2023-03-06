import axios from 'axios';
import { Movie } from '@/types/movie';

export type MovieType = 'current' | 'pre';
export type SpecialMovieType = 'arte' | 'opera';

export type MoviesQuery = {
  limit?: number;
  type?: MovieType;
};

export type SpecialMoviesQuery = {
  limit?: number;
  type: SpecialMovieType;
};

export const queryMovies = async ({ limit, type }: MoviesQuery) => {
  const res = await axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_HOST}/api/movies`, {
    params: { limit, type },
  });
  return res.data;
};

export const querySpecialMovies = async ({ limit, type }: SpecialMoviesQuery) => {
  const res = await axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_HOST}/api/movies/${type}`, {
    params: { limit },
  });
  return res.data;
};
