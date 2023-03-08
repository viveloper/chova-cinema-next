import { TrailerProps } from '@/components/MovieDetailInfo/Trailer';
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

  const movieTrailer = trailer
    .filter((item) => item.ImageDivisionCode === '2' && Boolean(item.MediaURL))
    .map((item) => ({
      videoUrl: item.MediaURL,
      imageUrl: item.ImageURL,
      title: item.MediaTitle,
    }));

  const poster = trailer
    .filter((item) => item.ImageDivisionCode === '1' && Boolean(item.ImageURL))
    .map((item) => item.ImageURL);

  const data: MovieDetailPageData = {
    movieDetail,
    casting,
    trailer: movieTrailer,
    poster,
    specialScreen,
  };

  return data;
};
