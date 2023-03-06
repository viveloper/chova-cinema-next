// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { CarouselItem } from '@/types/carousel';
import { CarouselQuery } from '@/query/carousel';

export default async function handler(req: NextApiRequest, res: NextApiResponse<CarouselItem[]>) {
  const query = req.query as CarouselQuery;

  const { data } = await axios.get<CarouselItem[]>(
    `${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/carousel`,
    { params: query },
  );

  res.status(200).json(data);
}
