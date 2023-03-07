// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { CarouselItem, CarouselQuery, HomePageRes, Movie, MoviesQuery } from '@/query/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<HomePageRes>) {
  const carouselQuery: CarouselQuery = { use: 'home' };
  const moviesQuery: MoviesQuery = { limit: 10 };

  const [{ data: carouselItems }, { data: movies }] = await Promise.all([
    axios.get<CarouselItem[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/carousel`, {
      params: carouselQuery,
    }),
    axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/movies`, {
      params: moviesQuery,
    }),
  ]);

  res.status(200).json({ carouselItems, movies });
}
