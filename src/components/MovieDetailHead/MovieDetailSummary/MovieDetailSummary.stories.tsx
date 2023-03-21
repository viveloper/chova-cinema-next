import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MovieDetailSummary from '.';

export default {
  title: 'Components/MovieDetailSummary',
  component: MovieDetailSummary,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MovieDetailSummary>;

const Template: ComponentStory<typeof MovieDetailSummary> = (args) => (
  <MovieDetailSummary {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  movieSummary: {
    genreName: '액션',
    genreName2: '드라마',
    makingNationName: '한국',
    releaseDate: '2020-07-15 오전 12:00:00',
    playTime: 115,
  },
  casting: [
    {
      RepresentationMovieCode: '16010',
      StaffName: '연상호',
      StaffImage: '/Media/MovieFile/PersonImg/53000/52363_107_1.jpg',
      Role: '감독',
    },
    {
      RepresentationMovieCode: '16010',
      StaffName: '강동원',
      StaffImage: '/Media/MovieFile/PersonImg/29000/28419_107_3.png',
      Role: '배우',
    },
    {
      RepresentationMovieCode: '16010',
      StaffName: '이정현',
      StaffImage: '/Media/MovieFile/PersonImg/2000/1401_107_3.jpg',
      Role: '배우',
    },
    {
      RepresentationMovieCode: '16010',
      StaffName: '권해효',
      StaffImage: '/Media/MovieFile/PersonImg/5000/4917_107_2.jpg',
      Role: '배우',
    },
    {
      RepresentationMovieCode: '16010',
      StaffName: '김민재',
      StaffImage: '/Media/MovieFile/PersonImg/85000/84891_107_5.jpg',
      Role: '배우',
    },
  ],
};
