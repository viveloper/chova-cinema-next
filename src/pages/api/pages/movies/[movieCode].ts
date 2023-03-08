// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Casting, MovieDetail, MovieDetailPageData, SpecialScreen, Trailer } from '@/query/types';
import { queryMovieDetailPageData } from '@/query/movieDetailPageData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieDetailPageData>,
) {
  const { movieCode } = req.query;
  const data = await queryMovieDetailPageData(movieCode as string);
  res.status(200).json(data);
}
