// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Casting, MovieDetail, MovieDetailPageRes, SpecialScreen, Trailer } from '@/query/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieDetailPageRes>,
) {
  const { movieCode } = req.query;

  const [
    {
      data: { movieDetail, casting, trailer },
    },
    { data: specialScreen },
  ] = await Promise.all([
    axios.get<{ movieDetail: MovieDetail; casting: Casting[]; trailer: Trailer[] }>(
      `${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/movies/${movieCode}`,
    ),
    axios.get<SpecialScreen[]>(`${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/specials`),
  ]);

  const carouselItems = trailer
    .filter((item) => item.ImageDivisionCode === '1')
    .map((item) => ({
      img: item.ImageURL,
    }));

  res.status(200).json({
    carouselItems,
    movieDetail,
    casting,
    specialScreen,
  });
}
