import axios from 'axios';
import { CarouselItem } from '@/types/carousel';

export type CarouselQuery = {
  use?: 'home' | 'movie';
};

export const queryCarousel = async ({ use }: CarouselQuery) => {
  const res = await axios.get<CarouselItem[]>(`${process.env.NEXT_PUBLIC_HOST}/api/carousel`, {
    params: { use },
  });
  return res.data;
};
