import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MovieCardList from '.';

const S3_BASE_URL = process.env.NEXT_PUBLIC_S3_BASE_URL;

export default {
  title: 'Components/MovieCardList',
  component: MovieCardList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MovieCardList>;

const Template: ComponentStory<typeof MovieCardList> = (args) => <MovieCardList {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: 'light',
  showNum: 5,
  ticketingPath: '/ticketing',
  movieDetailBasePath: '/movies',
  movies: [
    {
      RepresentationMovieCode: '16010',
      MoviePlayYN: 'Y',
      MoviePlayEndYN: 0,
      MovieNameKR: '반도',
      MovieNameUS: '반도',
      MovieName: null,
      PosterURL: '/Media/MovieFile/MovieImg/202007/16010_101_1.jpg',
      ViewGradeCode: 15,
      ViewGradeNameKR: '15',
      ViewGradeNameUS: '15세이상관람가',
      ViewGradeName: null,
      BookingRate: 78.04,
      ReleaseDate: '2020-07-15 오전 12:00:00',
      DDay: '0',
      ExpectEvaluation: 0,
      ViewEvaluation: 7.4,
      Evaluation: 0,
      BookingYN: 'Y',
      ViewRate: 78.04,
      SpecialScreenDivisionCode: [
        '200',
        '300',
        '301',
        '930',
        '941',
        '950',
        '960',
        '980',
        '986',
        '987',
      ],
      SoloOpenYN: null,
      OpenORClosing: 0,
      BookingRank: null,
      ViewSortSequence: null,
      BookingSortSequence: null,
      FilmCode: null,
      FilmName: null,
      MovieFestivalID: 0,
      DirectorName: null,
      ActorName: null,
      MovieGenreNameKR: null,
      MovieGenreNameUS: null,
      MovieGenreName: null,
      ProductionCompanyName: null,
      MovieDivisionCode: 'M',
      MovieFestivalName: '',
      MovieFestivalFilmCount: '0',
      MovieFestivalOpenDate: '1900-01-01 오전 12:00:00',
      MovieFestivalFinalDate: '1900-01-01 오전 12:00:00',
      MovieFestivalOpenMovieCode: null,
      MovieFestivalOpenMovieName: null,
      MovieFestivalFinalMovieCode: null,
      MovieFestivalFinalMovieName: null,
      ImagePath: '',
      ImageALT: '',
      LinkDivisionCode: '0',
      ParameterEventID: '',
      ParameterRepMovieCode: '',
      URL: '/NLCHS/Movie/MovieDetailView?movie=16010',
      PopupTitle: '',
      KOFMovieCd: '20193450',
      KOFCustCnt: 1764,
      PlanedRelsYN: 0,
      PlanedRelsMnth: null,
      KeywordID: '0',
      KeywordNm: '',
      MoreLookCD: '',
      MoreLookUrl: '',
      MoreLookImgUrl: '',
      MoreLookImgAlt: '',
      UpdateYn: '',
      ArrayStandardCd: '',
      UpdateDt: '2020-07-16 오전 7:15:00',
      LikeYN: 'N',
      PlayTime: 0,
      ViewCount: 0,
      LikeCount: 0,
      TargetMovieListCode: 0,
      ViewCountSortSequence: 0,
    },
    {
      RepresentationMovieCode: '15965',
      MoviePlayYN: 'Y',
      MoviePlayEndYN: 0,
      MovieNameKR: '＃살아있다',
      MovieNameUS: '＃살아있다',
      MovieName: null,
      PosterURL: '/Media/MovieFile/MovieImg/202006/15965_101_1.jpg',
      ViewGradeCode: 15,
      ViewGradeNameKR: '15',
      ViewGradeNameUS: '15세이상관람가',
      ViewGradeName: null,
      BookingRate: 9.95,
      ReleaseDate: '2020-06-24 오전 12:00:00',
      DDay: '0',
      ExpectEvaluation: 0,
      ViewEvaluation: 7.3,
      Evaluation: 0,
      BookingYN: 'Y',
      ViewRate: 9.95,
      SpecialScreenDivisionCode: ['200', '400', '950', '980', '986'],
      SoloOpenYN: null,
      OpenORClosing: 0,
      BookingRank: null,
      ViewSortSequence: null,
      BookingSortSequence: null,
      FilmCode: null,
      FilmName: null,
      MovieFestivalID: 0,
      DirectorName: null,
      ActorName: null,
      MovieGenreNameKR: null,
      MovieGenreNameUS: null,
      MovieGenreName: null,
      ProductionCompanyName: null,
      MovieDivisionCode: 'M',
      MovieFestivalName: '',
      MovieFestivalFilmCount: '0',
      MovieFestivalOpenDate: '1900-01-01 오전 12:00:00',
      MovieFestivalFinalDate: '1900-01-01 오전 12:00:00',
      MovieFestivalOpenMovieCode: null,
      MovieFestivalOpenMovieName: null,
      MovieFestivalFinalMovieCode: null,
      MovieFestivalFinalMovieName: null,
      ImagePath: '',
      ImageALT: '',
      LinkDivisionCode: '0',
      ParameterEventID: '',
      ParameterRepMovieCode: '',
      URL: '/NLCHS/Movie/MovieDetailView?movie=15965',
      PopupTitle: '',
      KOFMovieCd: '20193069',
      KOFCustCnt: 1802488,
      PlanedRelsYN: 0,
      PlanedRelsMnth: null,
      KeywordID: '0',
      KeywordNm: '',
      MoreLookCD: '',
      MoreLookUrl: '',
      MoreLookImgUrl: '',
      MoreLookImgAlt: '',
      UpdateYn: '',
      ArrayStandardCd: '',
      UpdateDt: '2020-07-16 오전 7:15:00',
      LikeYN: 'N',
      PlayTime: 0,
      ViewCount: 0,
      LikeCount: 0,
      TargetMovieListCode: 0,
      ViewCountSortSequence: 0,
    },
    {
      RepresentationMovieCode: '15906',
      MoviePlayYN: 'Y',
      MoviePlayEndYN: 0,
      MovieNameKR: '아이 캔 온리 이매진',
      MovieNameUS: '아이 캔 온리 이매진',
      MovieName: null,
      PosterURL: '/Media/MovieFile/MovieImg/202006/15906_101_1.jpg',
      ViewGradeCode: 12,
      ViewGradeNameKR: '12',
      ViewGradeNameUS: '12세이상관람가',
      ViewGradeName: null,
      BookingRate: 2.82,
      ReleaseDate: '2020-06-18 오전 12:00:00',
      DDay: '0',
      ExpectEvaluation: 0,
      ViewEvaluation: 8.2,
      Evaluation: 0,
      BookingYN: 'Y',
      ViewRate: 2.82,
      SpecialScreenDivisionCode: ['980'],
      SoloOpenYN: null,
      OpenORClosing: 0,
      BookingRank: null,
      ViewSortSequence: null,
      BookingSortSequence: null,
      FilmCode: null,
      FilmName: null,
      MovieFestivalID: 0,
      DirectorName: null,
      ActorName: null,
      MovieGenreNameKR: null,
      MovieGenreNameUS: null,
      MovieGenreName: null,
      ProductionCompanyName: null,
      MovieDivisionCode: 'M',
      MovieFestivalName: '',
      MovieFestivalFilmCount: '0',
      MovieFestivalOpenDate: '1900-01-01 오전 12:00:00',
      MovieFestivalFinalDate: '1900-01-01 오전 12:00:00',
      MovieFestivalOpenMovieCode: null,
      MovieFestivalOpenMovieName: null,
      MovieFestivalFinalMovieCode: null,
      MovieFestivalFinalMovieName: null,
      ImagePath: '',
      ImageALT: '',
      LinkDivisionCode: '0',
      ParameterEventID: '',
      ParameterRepMovieCode: '',
      URL: '/NLCHS/Movie/MovieDetailView?movie=15906',
      PopupTitle: '',
      KOFMovieCd: '20184842',
      KOFCustCnt: 33077,
      PlanedRelsYN: 0,
      PlanedRelsMnth: null,
      KeywordID: '0',
      KeywordNm: '',
      MoreLookCD: '',
      MoreLookUrl: '',
      MoreLookImgUrl: '',
      MoreLookImgAlt: '',
      UpdateYn: '',
      ArrayStandardCd: '',
      UpdateDt: '2020-07-16 오전 7:15:00',
      LikeYN: 'N',
      PlayTime: 0,
      ViewCount: 0,
      LikeCount: 0,
      TargetMovieListCode: 0,
      ViewCountSortSequence: 0,
    },
    {
      RepresentationMovieCode: '15630',
      MoviePlayYN: 'Y',
      MoviePlayEndYN: 0,
      MovieNameKR: '밤쉘: 세상을 바꾼 폭탄선언',
      MovieNameUS: '밤쉘: 세상을 바꾼 폭탄선언',
      MovieName: null,
      PosterURL: '/Media/MovieFile/MovieImg/202005/15630_101_1.jpg',
      ViewGradeCode: 15,
      ViewGradeNameKR: '15',
      ViewGradeNameUS: '15세이상관람가',
      ViewGradeName: null,
      BookingRate: 2,
      ReleaseDate: '2020-07-08 오전 12:00:00',
      DDay: '0',
      ExpectEvaluation: 0,
      ViewEvaluation: 8.4,
      Evaluation: 0,
      BookingYN: 'Y',
      ViewRate: 2,
      SpecialScreenDivisionCode: ['200', '300', '301', '950', '980', '986'],
      SoloOpenYN: null,
      OpenORClosing: 0,
      BookingRank: null,
      ViewSortSequence: null,
      BookingSortSequence: null,
      FilmCode: null,
      FilmName: null,
      MovieFestivalID: 0,
      DirectorName: null,
      ActorName: null,
      MovieGenreNameKR: null,
      MovieGenreNameUS: null,
      MovieGenreName: null,
      ProductionCompanyName: null,
      MovieDivisionCode: 'M',
      MovieFestivalName: '',
      MovieFestivalFilmCount: '0',
      MovieFestivalOpenDate: '1900-01-01 오전 12:00:00',
      MovieFestivalFinalDate: '1900-01-01 오전 12:00:00',
      MovieFestivalOpenMovieCode: null,
      MovieFestivalOpenMovieName: null,
      MovieFestivalFinalMovieCode: null,
      MovieFestivalFinalMovieName: null,
      ImagePath: '',
      ImageALT: '',
      LinkDivisionCode: '0',
      ParameterEventID: '',
      ParameterRepMovieCode: '',
      URL: '/NLCHS/Movie/MovieDetailView?movie=15630',
      PopupTitle: '',
      KOFMovieCd: '20204644',
      KOFCustCnt: 101402,
      PlanedRelsYN: 0,
      PlanedRelsMnth: null,
      KeywordID: '0',
      KeywordNm: '',
      MoreLookCD: '',
      MoreLookUrl: '',
      MoreLookImgUrl: '',
      MoreLookImgAlt: '',
      UpdateYn: '',
      ArrayStandardCd: '',
      UpdateDt: '2020-07-16 오전 7:15:00',
      LikeYN: 'N',
      PlayTime: 0,
      ViewCount: 0,
      LikeCount: 0,
      TargetMovieListCode: 0,
      ViewCountSortSequence: 0,
    },
    {
      RepresentationMovieCode: '16119',
      MoviePlayYN: 'Y',
      MoviePlayEndYN: 0,
      MovieNameKR: '원 데이',
      MovieNameUS: '원 데이',
      MovieName: null,
      PosterURL: '/Media/MovieFile/MovieImg/202007/16119_101_1.jpg',
      ViewGradeCode: 15,
      ViewGradeNameKR: '15',
      ViewGradeNameUS: '15세이상관람가',
      ViewGradeName: null,
      BookingRate: 1.15,
      ReleaseDate: '2020-07-08 오전 12:00:00',
      DDay: '0',
      ExpectEvaluation: 0,
      ViewEvaluation: 8.3,
      Evaluation: 0,
      BookingYN: 'Y',
      ViewRate: 1.15,
      SpecialScreenDivisionCode: ['200', '950', '986', '987'],
      SoloOpenYN: null,
      OpenORClosing: 0,
      BookingRank: null,
      ViewSortSequence: null,
      BookingSortSequence: null,
      FilmCode: null,
      FilmName: null,
      MovieFestivalID: 0,
      DirectorName: null,
      ActorName: null,
      MovieGenreNameKR: null,
      MovieGenreNameUS: null,
      MovieGenreName: null,
      ProductionCompanyName: null,
      MovieDivisionCode: 'M',
      MovieFestivalName: '',
      MovieFestivalFilmCount: '0',
      MovieFestivalOpenDate: '1900-01-01 오전 12:00:00',
      MovieFestivalFinalDate: '1900-01-01 오전 12:00:00',
      MovieFestivalOpenMovieCode: null,
      MovieFestivalOpenMovieName: null,
      MovieFestivalFinalMovieCode: null,
      MovieFestivalFinalMovieName: null,
      ImagePath: '',
      ImageALT: '',
      LinkDivisionCode: '0',
      ParameterEventID: '',
      ParameterRepMovieCode: '',
      URL: '/NLCHS/Movie/MovieDetailView?movie=16119',
      PopupTitle: '',
      KOFMovieCd: '20112561',
      KOFCustCnt: 217513,
      PlanedRelsYN: 0,
      PlanedRelsMnth: null,
      KeywordID: '0',
      KeywordNm: '',
      MoreLookCD: '',
      MoreLookUrl: '',
      MoreLookImgUrl: '',
      MoreLookImgAlt: '',
      UpdateYn: '',
      ArrayStandardCd: '',
      UpdateDt: '2020-07-16 오전 7:15:00',
      LikeYN: 'N',
      PlayTime: 0,
      ViewCount: 0,
      LikeCount: 0,
      TargetMovieListCode: 0,
      ViewCountSortSequence: 0,
    },
    {
      RepresentationMovieCode: '16124',
      MoviePlayYN: 'N',
      MoviePlayEndYN: 0,
      MovieNameKR: '강철비2: 정상회담',
      MovieNameUS: '강철비2: 정상회담',
      MovieName: null,
      PosterURL: '/Media/MovieFile/MovieImg/202008/16124_101_1.jpg',
      ViewGradeCode: 15,
      ViewGradeNameKR: '15',
      ViewGradeNameUS: '15세이상관람가',
      ViewGradeName: null,
      BookingRate: 0.9,
      ReleaseDate: '2020-07-29 오전 12:00:00',
      DDay: '13',
      ExpectEvaluation: 0,
      ViewEvaluation: 0,
      Evaluation: 0,
      BookingYN: 'Y',
      ViewRate: 0.9,
      SpecialScreenDivisionCode: ['200', '300', '930', '941', '950', '986', '987'],
      SoloOpenYN: null,
      OpenORClosing: 0,
      BookingRank: null,
      ViewSortSequence: null,
      BookingSortSequence: null,
      FilmCode: null,
      FilmName: null,
      MovieFestivalID: 0,
      DirectorName: null,
      ActorName: null,
      MovieGenreNameKR: null,
      MovieGenreNameUS: null,
      MovieGenreName: null,
      ProductionCompanyName: null,
      MovieDivisionCode: 'M',
      MovieFestivalName: '',
      MovieFestivalFilmCount: '0',
      MovieFestivalOpenDate: '1900-01-01 오전 12:00:00',
      MovieFestivalFinalDate: '1900-01-01 오전 12:00:00',
      MovieFestivalOpenMovieCode: null,
      MovieFestivalOpenMovieName: null,
      MovieFestivalFinalMovieCode: null,
      MovieFestivalFinalMovieName: null,
      ImagePath: '',
      ImageALT: '',
      LinkDivisionCode: '0',
      ParameterEventID: '',
      ParameterRepMovieCode: '',
      URL: '/NLCHS/Movie/MovieDetailView?movie=16124',
      PopupTitle: '',
      KOFMovieCd: '20196271',
      KOFCustCnt: 0,
      PlanedRelsYN: 0,
      PlanedRelsMnth: null,
      KeywordID: '0',
      KeywordNm: '',
      MoreLookCD: '',
      MoreLookUrl: '',
      MoreLookImgUrl: '',
      MoreLookImgAlt: '',
      UpdateYn: '',
      ArrayStandardCd: '',
      UpdateDt: '2020-07-16 오전 7:15:00',
      LikeYN: 'N',
      PlayTime: 0,
      ViewCount: 0,
      LikeCount: 0,
      TargetMovieListCode: 0,
      ViewCountSortSequence: 0,
    },
  ].map((item) => ({ ...item, PosterURL: `${S3_BASE_URL}${item.PosterURL}` })),
};
