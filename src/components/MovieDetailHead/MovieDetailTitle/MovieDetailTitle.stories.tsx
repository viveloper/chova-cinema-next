import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MovieDetailTitle from '.';

export default {
  title: 'Components/MovieDetailTitle',
  component: MovieDetailTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MovieDetailTitle>;

const Template: ComponentStory<typeof MovieDetailTitle> = (args) => <MovieDetailTitle {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  viewGradeCode: 15,
  title: '반도',
};
