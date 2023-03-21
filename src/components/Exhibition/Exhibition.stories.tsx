import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Exhibition from '.';

const S3_BASE_URL = process.env.NEXT_PUBLIC_S3_BASE_URL;

export default {
  title: 'Components/Exhibition',
  component: Exhibition,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Exhibition>;

const Template: ComponentStory<typeof Exhibition> = (args) => <Exhibition {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: '아트&컬쳐',
  subTitle: '감성을 적시는',
  link: {
    name: '아르떼 바로가기',
  },
  backgroundImage: `${S3_BASE_URL}/img/exhibition/bg_exhib_01.png`,
  fontColor: '#000',
  movies: [
    {
      movieCode: '16079',
      movieName: '블루 아워',
      posterUrl: '/Media/MovieFile/MovieImg/202007/16079_103_1.jpg',
      bookingRate: 0.34,
      viewEvaluation: 0,
      dday: 6,
      moviePlayYN: 'N',
    },
    {
      movieCode: '16076',
      movieName: '비바리움',
      posterUrl: '/Media/MovieFile/MovieImg/202007/16076_103_1.jpg',
      bookingRate: 0.15,
      viewEvaluation: 9,
      dday: 0,
      moviePlayYN: 'Y',
    },
    {
      movieCode: '15964',
      movieName: '야구소녀',
      posterUrl: '/Media/MovieFile/MovieImg/202006/15964_103_1.jpg',
      bookingRate: 0.04,
      viewEvaluation: 9.1,
      dday: 0,
      moviePlayYN: 'Y',
    },
    {
      movieCode: '15600',
      movieName: '패왕별희 디 오리지널',
      posterUrl: '/Media/MovieFile/MovieImg/202003/15600_103_1.jpg',
      bookingRate: 0.02,
      viewEvaluation: 9.3,
      dday: 0,
      moviePlayYN: 'Y',
    },
    {
      movieCode: '16176',
      movieName: '시티 오브 갓',
      posterUrl: '/Media/MovieFile/MovieImg/202007/16176_103_1.jpg',
      bookingRate: 0.02,
      viewEvaluation: 8.4,
      dday: 0,
      moviePlayYN: 'Y',
    },
    {
      movieCode: '16232',
      movieName: '광주비디오: 사라진 4시간',
      posterUrl: '/Media/MovieFile/MovieImg/202007/16232_103_1.jpg',
      bookingRate: 0.02,
      viewEvaluation: 0,
      dday: 0,
      moviePlayYN: 'Y',
    },
    {
      movieCode: '16056',
      movieName: '트랜짓',
      posterUrl: '/Media/MovieFile/MovieImg/202007/16056_103_1.jpg',
      bookingRate: 0.01,
      viewEvaluation: 7.9,
      dday: 0,
      moviePlayYN: 'Y',
    },
    {
      movieCode: '16106',
      movieName: '팡파레',
      posterUrl: '/Media/MovieFile/MovieImg/202007/16106_103_1.jpg',
      bookingRate: 0.01,
      viewEvaluation: 7.2,
      dday: 0,
      moviePlayYN: 'Y',
    },
    {
      movieCode: '12869',
      movieName: '바르다가 사랑한 얼굴들',
      posterUrl: '/Media/MovieFile/MovieImg/201806/12869_103_1.jpg',
      bookingRate: 0,
      viewEvaluation: 8.7,
      dday: 0,
      moviePlayYN: 'Y',
    },
    {
      movieCode: '15558',
      movieName: '밥정',
      posterUrl: '/Media/MovieFile/MovieImg/202003/15558_103_1.jpg',
      bookingRate: 0,
      viewEvaluation: 0,
      dday: 76,
      moviePlayYN: 'N',
    },
    {
      movieCode: '16097',
      movieName: '하워즈 엔드',
      posterUrl: '/Media/MovieFile/MovieImg/202009/16097_103_1.jpg',
      bookingRate: 0,
      viewEvaluation: 10,
      dday: 76,
      moviePlayYN: 'N',
    },
    {
      movieCode: '16132',
      movieName: '마티아스와 막심',
      posterUrl: '/Media/MovieFile/MovieImg/202007/16132_103_1.jpg',
      bookingRate: 0,
      viewEvaluation: 0,
      dday: 7,
      moviePlayYN: 'N',
    },
    {
      movieCode: '16233',
      movieName: '쓰루 더 파이어',
      posterUrl: '/Media/MovieFile/MovieImg/202007/16233_103_1.jpg',
      bookingRate: 0,
      viewEvaluation: 0,
      dday: 7,
      moviePlayYN: 'N',
    },
  ].map((item) => ({ ...item, posterUrl: `${S3_BASE_URL}${item.posterUrl}` })),
};
