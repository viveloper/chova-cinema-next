export type CarouselItem = {
  img: string;
  video: string;
  use: 'home' | 'movie';
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

export type HomePageRes = {
  carouselItems: CarouselItem[];
  movies: Movie[];
};

export type MoviesPageRes = {
  carouselItems: CarouselItem[];
  currentMovies: Movie[];
  preMovies: Movie[];
  arteMovies: Movie[];
  operaMovies: Movie[];
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