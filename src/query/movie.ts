import axios from 'axios';
import { Movie } from '@/types/movie';

export type MovieType = 'general' | 'arte' | 'opera';

export type MoviesQuery = {
  limit?: number;
  type?: MovieType;
  playing?: 'Y' | 'N';
};

export const queryMovies = async ({ limit, type, playing }: MoviesQuery) => {
  const res = await axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_HOST}/api/movies`, {
    params: { limit, type, playing },
  });
  return res.data;
};
