// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { MoviesPageData } from '@/query/types';
import { queryMoviesPageData } from '@/query/moviesPageData';

export default async function handler(req: NextApiRequest, res: NextApiResponse<MoviesPageData>) {
  const data = await queryMoviesPageData();
  res.status(200).json(data);
}
