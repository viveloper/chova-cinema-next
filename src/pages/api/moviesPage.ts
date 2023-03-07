// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { CarouselItem, CarouselQuery, Movie, MoviesPageRes, MoviesQuery } from '@/query/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<MoviesPageRes>) {
  const carouselQuery: CarouselQuery = { use: 'movie' };
  const currentMoviesQuery: MoviesQuery = { playing: 'Y', limit: 5 };
  const preMoviesQuery: MoviesQuery = { playing: 'N', limit: 5 };
  const arteMoviesQuery: MoviesQuery = { type: 'arte' };
  const operaMoviesQuery: MoviesQuery = { type: 'opera' };

  const [
    { data: carouselItems },
    { data: currentMovies },
    { data: preMovies },
    { data: arteMovies },
    { data: operaMovies },
  ] = await Promise.all([
    axios.get<CarouselItem[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/carousel`, {
      params: carouselQuery,
    }),
    axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/movies`, {
      params: currentMoviesQuery,
    }),
    axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/movies`, {
      params: preMoviesQuery,
    }),
    axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/movies`, {
      params: arteMoviesQuery,
    }),
    axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/movies`, {
      params: operaMoviesQuery,
    }),
  ]);

  res.status(200).json({ carouselItems, currentMovies, preMovies, arteMovies, operaMovies });
}
