import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TopMovies from '.';

const S3_BASE_URL = process.env.NEXT_PUBLIC_S3_BASE_URL;

export default {
  title: 'Components/TopMovies',
  component: TopMovies,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TopMovies>;

const Template: ComponentStory<typeof TopMovies> = (args) => <TopMovies {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: '현재 상영작',
  showNum: 5,
  movies: [
    {
      movieCode: '16010',
      movieName: '반도',
      posterUrl: '/Media/MovieFile/MovieImg/202007/16010_101_1.jpg',
      bookingRate: 78.04,
      viewEvaluation: 7.4,
      dday: 0,
      moviePlayYN: 'Y',
    },
    {
      movieCode: '15965',
      movieName: '＃살아있다',
      posterUrl: '/Media/MovieFile/MovieImg/202006/15965_101_1.jpg',
      bookingRate: 9.95,
      viewEvaluation: 7.3,
      dday: 0,
      moviePlayYN: 'Y',
    },
    {
      movieCode: '15906',
      movieName: '아이 캔 온리 이매진',
      posterUrl: '/Media/MovieFile/MovieImg/202006/15906_101_1.jpg',
      bookingRate: 2.82,
      viewEvaluation: 8.2,
      dday: 0,
      moviePlayYN: 'Y',
    },
    {
      movieCode: '15630',
      movieName: '밤쉘: 세상을 바꾼 폭탄선언',
      posterUrl: '/Media/MovieFile/MovieImg/202005/15630_101_1.jpg',
      bookingRate: 2,
      viewEvaluation: 8.4,
      dday: 0,
      moviePlayYN: 'Y',
    },
    {
      movieCode: '16119',
      movieName: '원 데이',
      posterUrl: '/Media/MovieFile/MovieImg/202007/16119_101_1.jpg',
      bookingRate: 1.15,
      viewEvaluation: 8.3,
      dday: 0,
      moviePlayYN: 'Y',
    },
  ].map((item) => ({ ...item, posterUrl: `${S3_BASE_URL}${item.posterUrl}` })),
};
