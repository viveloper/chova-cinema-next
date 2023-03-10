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
  RepresentationMovieCode: string;
  MoviePlayYN: string | null;
  MoviePlayEndYN: number;
  MovieNameKR: string | null;
  MovieNameUS: string | null;
  MovieName: any;
  PosterURL: string;
  ViewGradeCode: number;
  ViewGradeNameKR: string | null;
  ViewGradeNameUS: string | null;
  ViewGradeName: any;
  BookingRate: number;
  ReleaseDate: string | null;
  DDay: string | null;
  ExpectEvaluation: number;
  ViewEvaluation: number;
  Evaluation: number;
  BookingYN: string | null;
  ViewRate: number;
  SpecialScreenDivisionCode: string[] | null;
  SoloOpenYN: any;
  OpenORClosing: number;
  BookingRank: any;
  ViewSortSequence: any;
  BookingSortSequence: any;
  FilmCode: any;
  FilmName: any;
  MovieFestivalID: number;
  DirectorName: any;
  ActorName: any;
  MovieGenreNameKR: any;
  MovieGenreNameUS: any;
  MovieGenreName: any;
  ProductionCompanyName: any;
  MovieDivisionCode: string | null;
  MovieFestivalName: string | null;
  MovieFestivalFilmCount: string | null;
  MovieFestivalOpenDate: string | null;
  MovieFestivalFinalDate: string | null;
  MovieFestivalOpenMovieCode: any;
  MovieFestivalOpenMovieName: any;
  MovieFestivalFinalMovieCode: any;
  MovieFestivalFinalMovieName: any;
  ImagePath: string | null;
  ImageALT: string | null;
  LinkDivisionCode: string | null;
  ParameterEventID: string | null;
  ParameterRepMovieCode: string | null;
  URL: string | null;
  PopupTitle: string | null;
  KOFMovieCd: string | null;
  KOFCustCnt: number;
  PlanedRelsYN: number;
  PlanedRelsMnth: any;
  KeywordID: string | null;
  KeywordNm: string | null;
  MoreLookCD: string | null;
  MoreLookUrl: string | null;
  MoreLookImgUrl: string | null;
  MoreLookImgAlt: string | null;
  UpdateYn: string | null;
  ArrayStandardCd: string | null;
  UpdateDt: string | null;
  LikeYN: string | null;
  PlayTime: number;
  ViewCount: number;
  LikeCount: number;
  TargetMovieListCode: number;
  ViewCountSortSequence: number;
};

export type ViewGradeCode = 0 | 12 | 15 | 18;

export type MovieDetail = {
  MakingNationNameKR: string;
  MakingNationNameUS: string;
  MakingNationName: any;
  MovieGenreCode: string;
  PlayTime: number;
  SoundTypeCode: string;
  SoundTypeNameKR: string;
  SoundTypeNameUS: string;
  FourDTypeCode: string;
  FourDTypeNameKR: string;
  FourDTypeNameUS: string;
  TranslationDivisionCode: string;
  TranslationDivisionNameKR: string;
  TranslationDivisionNameUS: string;
  HomepageURL: string;
  SynopsisKR: string;
  SynopsisUS: string;
  Synopsis: any;
  TotalViewCount: number;
  AgePrefer10: string;
  AgePrefer20: string;
  AgePrefer30: string;
  AgePrefer40: string;
  ManPrefer: string;
  WomanPrefer: string;
  KOFCustCnt: number;
  AggrDt: string;
  MakingNationNameKR2: string;
  MakingNationNameKR3: string;
  MovieGenreNameKR2: string;
  MovieGenreNameKR3: string;
  RepresentationMovieCode: string;
  MoviePlayYN: string;
  MoviePlayEndYN: number;
  MovieNameKR: string;
  MovieNameUS: string;
  MovieName: any;
  PosterURL: string;
  ViewGradeCode: ViewGradeCode;
  ViewGradeNameKR: string;
  ViewGradeNameUS: string;
  ViewGradeName: any;
  BookingRate: number;
  ReleaseDate: string;
  DDay: any;
  ExpectEvaluation: number;
  ViewEvaluation: number;
  Evaluation: number;
  BookingYN: string;
  ViewRate: number;
  SpecialScreenDivisionCode: string[];
  SoloOpenYN: any;
  OpenORClosing: number;
  BookingRank: string;
  ViewSortSequence: any;
  BookingSortSequence: any;
  FilmCode: string;
  FilmName: string;
  MovieFestivalID: number;
  DirectorName: any;
  ActorName: any;
  MovieGenreNameKR: string;
  MovieGenreNameUS: string;
  MovieGenreName: any;
  ProductionCompanyName: string;
  MovieDivisionCode: any;
  MovieFestivalName: any;
  MovieFestivalFilmCount: any;
  MovieFestivalOpenDate: any;
  MovieFestivalFinalDate: any;
  MovieFestivalOpenMovieCode: any;
  MovieFestivalOpenMovieName: any;
  MovieFestivalFinalMovieCode: any;
  MovieFestivalFinalMovieName: any;
  ImagePath: any;
  ImageALT: any;
  LinkDivisionCode: any;
  ParameterEventID: any;
  ParameterRepMovieCode: any;
  URL: any;
  PopupTitle: any;
  KOFMovieCd: any;
  PlanedRelsYN: number;
  PlanedRelsMnth: string;
  KeywordID: any;
  KeywordNm: any;
  MoreLookCD: any;
  MoreLookUrl: any;
  MoreLookImgUrl: any;
  MoreLookImgAlt: any;
  UpdateYn: any;
  ArrayStandardCd: any;
  UpdateDt: any;
  LikeYN: string;
  ViewCount: number;
  LikeCount: number;
  TargetMovieListCode: number;
  ViewCountSortSequence: number;
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
  movieDetail: MovieDetail;
  casting: Casting[];
  trailer: TrailerProps['items'];
  poster: PosterProps['imageUrls'];
  specialScreen: SpecialScreen[];
};

export type MovieReviewData = {
  page: number;
  reviewList: Review[];
  pageCount: number;
  totalCount: number;
  avgScore: number;
};

export type CarouselQuery = {
  use?: 'home' | 'movie';
};

export type MovieType = 'general' | 'arte' | 'opera';

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
