// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CarouselItem } from '@/types/carousel';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<CarouselItem[]>) {
  const { data } = await axios.get<CarouselItem[]>(
    `${process.env.NEXT_PUBLIC_S3_BASE_URL}/data/home/carouseItems.json`,
  );

  switch (req.query.use) {
    case 'home':
      res.status(200).json(data.filter((item) => item.use === 'home'));
      break;
    case 'movie':
      res.status(200).json(data.filter((item) => item.use === 'movie'));
      break;
    default:
      res.status(200).json(data);
      break;
  }
}
