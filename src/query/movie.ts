import axios from 'axios';
import { Movie } from '@/types/movie';

type MovieQuery = {
  limit: number;
};

const getMovies = async ({ limit }: MovieQuery) => {
  const res = await axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_HOST}/api/movies`, {
    params: { limit },
  });
  return res.data;
};

export default getMovies;
