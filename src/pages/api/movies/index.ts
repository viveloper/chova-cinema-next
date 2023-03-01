// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Movie, Movies } from '@/types/movie';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movie[]>) {
  const { data } = await axios.get<Movies>(
    `${process.env.NEXT_PUBLIC_S3_BASE_URL}/data/home/movies.json`,
  );
  const movies = data.Movies.Items[0].Items.filter((item) => item.RepresentationMovieCode !== 'AD');
  const limit = isNaN(Number(req.query.limit)) ? movies.length : Number(req.query.limit);
  switch (req.query.type) {
    case 'current':
      res.status(200).json(movies.filter((item) => item.MoviePlayYN === 'Y').slice(0, limit));
      break;
    case 'pre':
      res.status(200).json(movies.filter((item) => item.MoviePlayYN === 'N').slice(0, limit));
      break;
    default:
      res.status(200).json(movies.slice(0, limit));
      break;
  }
}
