// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Movie, SpecialMovies } from '@/types/movie';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movie[]>) {
  const { data } = await axios.get<SpecialMovies>(
    `${process.env.NEXT_PUBLIC_S3_BASE_URL}/data/movies/arteMovieList.json`,
  );
  const movies = data.Movies.Items.filter((item) => item.RepresentationMovieCode !== 'AD');
  const limit = isNaN(Number(req.query.limit)) ? movies.length : Number(req.query.limit);

  res.status(200).json(movies.slice(0, limit));
}
