import axios from 'axios';
import { CarouselItem } from '@/types/carousel';

const getCarousel = async () => {
  const res = await axios.get<CarouselItem[]>(`${process.env.NEXT_PUBLIC_HOST}/api/carousel`, {
    params: { use: 'home' },
  });
  return res.data;
};

export default getCarousel;
