import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MovieDetailAsideButtons from '.';

export default {
  title: 'Components/MovieDetailAsideButtons',
  component: MovieDetailAsideButtons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MovieDetailAsideButtons>;

const Template: ComponentStory<typeof MovieDetailAsideButtons> = (args) => (
  <MovieDetailAsideButtons {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  likeCount: 1040,
  ticketingPagePath: '/ticketing',
};
