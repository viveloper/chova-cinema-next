import { PosterProps } from '@/components/MovieDetailInfo/Poster';
import { TrailerProps } from '@/components/MovieDetailInfo/Trailer';

export type ErrorResponse = {
  message: string;
};

export type QueryType =
  | 'HOME_PAGE_DATA'
  | 'MOVIES_PAGE_DATA'
  | 'MOVIES_DETAIL_PAGE_DATA'
  | 'MOVIE_REVIEW_DATA'
  | 'MOVIE_REVIEW_INFINITE_DATA'
  | 'USER_DATA';

export type CarouselItem = {
  img: string;
  video?: string;
  use?: 'home' | 'movie';
};

export type Movie = {
  movieCode: string;
  movieName: string;
  posterUrl: string;
  bookingRate: number;
  viewEvaluation: number;
  dday: number;
  moviePlayYN: string;
};

export type ViewGradeCode = 0 | 12 | 15 | 18;

export type MovieDetail = Movie & {
  viewGradeCode: ViewGradeCode;
  cumulativeAudience: number;
  likeCount: number;
  playTime: number;
  genreName: string;
  genreName2: string;
  makingNationName: string;
  releaseDate: string;
  synopsis: string;
  manPrefer: number;
  womanPrefer: number;
  agePrefer10: number;
  agePrefer20: number;
  agePrefer30: number;
  agePrefer40: number;
  casting: Casting[];
  trailer: Trailer[];
};

export type Casting = {
  RepresentationMovieCode: string;
  StaffName: string;
  StaffImage: string;
  Role: string;
};

export type SpecialScreen = {
  SpecialScreenDivisionCode: string;
  SpecialScreenDivisionName: string;
  IconImageFileName: string;
  IconImageAlt: string;
  BigImageFileName: string;
  BigImageAlt: string;
  FilePath: string;
  Url: string;
  BadgeImgALT: string;
  BadgeFileNm: string;
  MobileUrl: string;
};

export type Trailer = {
  ImageDivisionCode: string;
  ImageDivisionName: string;
  ImageURL: string;
  ImageAlter: string;
  MediaURL: string;
  SortSequence: number;
  ImageTypeCd: string;
  MediaTitle: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  reviewList: number[];
  reviewLikeList: number[];
  ticketingList: number[];
};

export type Review = {
  ReviewID: number;
  MemberNo: number;
  MemberID: string;
  MemberName: string;
  ReviewText: string;
  MoviePlayYN: string;
  Evaluation: number;
  RecommandCount: number;
  MovieViewYN: string;
  RepresentationMovieCode: string;
  MemberRecommandYN: string;
  RegistDate: string;
  ProfilePhoto: string;
  MemberNickName: string;
};

export type HomePageData = {
  carouselItems: CarouselItem[];
  movies: Movie[];
};

export type MoviesPageData = {
  carouselItems: CarouselItem[];
  currentMovies: Movie[];
  preMovies: Movie[];
  arteMovies: Movie[];
  operaMovies: Movie[];
};

export type MovieDetailPageData = {
  movie: Omit<MovieDetail, 'casting' | 'trailer'>;
  casting: Casting[];
  trailer: TrailerProps['items'];
  poster: PosterProps['imageUrls'];
  specialScreen: SpecialScreen[];
};

export type MovieReviewData = {
  page: number;
  reviews: Review[];
  pageCount: number;
  totalCount: number;
  scoreAvg: number;
};

export type CarouselQuery = {
  use?: 'home' | 'movie';
};

export type MovieType = 'arte' | 'opera' | undefined;

export type MoviesQuery = {
  limit?: number;
  type?: MovieType;
  playing?: 'Y' | 'N';
};

export type ReviewSortType = 'recent' | 'like';
export type MovieReviewQuery = {
  movieCode: string;
  page: number;
  count: number;
  sortType: ReviewSortType;
};
export type ReviewPostMode = 'add' | 'edit';
export type MovieReviewPostData = {
  movieCode: string;
  score: number;
  text: string;
};
export type MovieReviewPutData = {
  movieCode: string;
  score: number;
  text: string;
  toggleLike: boolean;
};
export type MovieReviewDeleteData = {
  movieCode: string;
};

export type LoginRequestBody = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};
