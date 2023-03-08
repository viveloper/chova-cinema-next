import { client } from '.';
import { Casting, MovieDetail, MovieDetailPageData, SpecialScreen, Trailer } from './types';

export const queryMovieDetailPageData = async (movieCode: string) => {
  const [
    {
      data: { movieDetail, casting, trailer },
    },
    { data: specialScreen },
  ] = await Promise.all([
    client.get<{ movieDetail: MovieDetail; casting: Casting[]; trailer: Trailer[] }>(
      `/movies/${movieCode}`,
    ),
    client.get<SpecialScreen[]>(`/specials`),
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
