import axios from 'axios';
import { Casting, MovieDetail, MovieDetailPageData, SpecialScreen, Trailer } from './types';

export const queryMovieDetailPageData = async (movieCode: string) => {
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

  const data: MovieDetailPageData = {
    carouselItems,
    movieDetail,
    casting,
    specialScreen,
  };

  return data;
};
