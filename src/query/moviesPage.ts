import axios from 'axios';
import { MoviesPageRes } from './types';

export const queryMoviesPageData = async () => {
  const res = await axios.get<MoviesPageRes>(`${process.env.NEXT_PUBLIC_HOST}/api/moviesPage`);
  return res.data;
};
