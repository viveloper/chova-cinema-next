// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Movie } from '@/types/movie';
import { MoviesQuery } from '@/query/movie';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movie[]>) {
  const query: MoviesQuery = {
    limit: isNaN(Number(req.query.limit)) ? undefined : Number(req.query.limit),
    type: req.query.type as MoviesQuery['type'],
    playing: req.query.playing as MoviesQuery['playing'],
  };

  const { data: movies } = await axios.get<Movie[]>(
    `${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/movies`,
    { params: query },
  );

  res.status(200).json(movies);
}
