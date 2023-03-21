import { TrailerProps } from '@/components/MovieDetailInfo/Trailer';
import { client } from '.';
import { Casting, MovieDetail, MovieDetailPageData, SpecialScreen, Trailer } from './types';

export const queryMovieDetailPageData = async (movieCode: string) => {
  const [{ data: movieDetail }, { data: specialScreen }] = await Promise.all([
    client.get<MovieDetail>(`/movies/${movieCode}`),
    client.get<SpecialScreen[]>(`/specials`),
  ]);

  const trailer = movieDetail.trailer
    .filter((item) => item.ImageDivisionCode === '2' && Boolean(item.MediaURL))
    .map((item) => ({
      videoUrl: item.MediaURL,
      imageUrl: item.ImageURL,
      title: item.MediaTitle,
    }));

  const poster = movieDetail.trailer
    .filter((item) => item.ImageDivisionCode === '1' && Boolean(item.ImageURL))
    .map((item) => item.ImageURL);

  const { casting: _, trailer: __, ...movie } = movieDetail;
  const data: MovieDetailPageData = {
    movie,
    casting: movieDetail.casting,
    trailer,
    poster,
    specialScreen,
  };

  return data;
};
