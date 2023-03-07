import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MovieDetailStatistics from '.';

export default {
  title: 'Components/MovieDetailStatistics',
  component: MovieDetailStatistics,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MovieDetailStatistics>;

const Template: ComponentStory<typeof MovieDetailStatistics> = (args) => (
  <MovieDetailStatistics {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  viewEvaludation: 7.4,
  bookingRate: 78.04,
  cumulativeAudience: 1764,
};
