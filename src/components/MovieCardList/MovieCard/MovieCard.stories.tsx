import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MovieCard from '.';

const S3_BASE_URL = process.env.NEXT_PUBLIC_S3_BASE_URL;

export default {
  title: 'Components/MovieCard',
  component: MovieCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => <MovieCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: 'light',
  cardNumber: 1,
  ticketingPagePath: '/ticketing',
  movieDetailPagePath: '/movies/16119',
  movie: {
    movieCode: '16119',
    movieName: '원 데이',
    posterUrl: `${S3_BASE_URL}/Media/MovieFile/MovieImg/202007/16119_101_1.jpg`,
    bookingRate: 1.15,
    viewEvaluation: 8.3,
    dday: 0,
    moviePlayYN: 'Y',
  },
};
