import axios from 'axios';
import { MovieDetailPageRes } from './types';

export const queryMovieDetailPageData = async (movieCode: string) => {
  const res = await axios.get<MovieDetailPageRes>(
    `${process.env.NEXT_PUBLIC_HOST}/api/pages/movies/${movieCode}`,
  );
  return res.data;
};
