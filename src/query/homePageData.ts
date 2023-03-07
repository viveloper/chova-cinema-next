import axios from 'axios';
import { HomePageRes } from './types';

export const queryHomePageData = async () => {
  const res = await axios.get<HomePageRes>(`${process.env.NEXT_PUBLIC_HOST}/api/pages/home`);
  return res.data;
};
