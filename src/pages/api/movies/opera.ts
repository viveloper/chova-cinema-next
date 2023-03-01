// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Movie, SpecialMovies } from '@/types/movie';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movie[]>) {
  const { data } = await axios.get<SpecialMovies>(
    `${process.env.NEXT_PUBLIC_S3_BASE_URL}/data/movies/operaMovieList.json`,
  );
  const movies = data.Movies.Items.filter((item) => item.RepresentationMovieCode !== 'AD');
  const limit = isNaN(Number(req.query.limit)) ? movies.length : Number(req.query.limit);

  res.status(200).json(movies.slice(0, limit));
}
