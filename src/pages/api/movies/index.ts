// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Movie, Movies } from '@/types/movie';
import { MoviesQuery } from '@/query/movie';

type ErrorResponse = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie[] | ErrorResponse>,
) {
  const query: MoviesQuery = {
    limit: isNaN(Number(req.query.limit)) ? undefined : Number(req.query.limit),
    type: req.query.type as MoviesQuery['type'],
  };

  const { data } = await axios.get<Movies>(
    `${process.env.NEXT_PUBLIC_S3_BASE_URL}/data/home/movies.json`,
  );
  const movies = data.Movies.Items[0].Items.filter((item) => item.RepresentationMovieCode !== 'AD');
  const limit = query.limit ?? movies.length;

  switch (query.type) {
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
