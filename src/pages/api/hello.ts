// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { HomePageData } from '@/query/types';
import { queryHomePageData } from '@/query/homePageData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>,
) {
  res.status(200).json({ message: 'hello' });
}
