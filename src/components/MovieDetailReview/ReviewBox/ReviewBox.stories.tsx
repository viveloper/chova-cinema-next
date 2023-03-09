import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReviewBox from '.';

export default {
  title: 'Components/ReviewBox',
  component: ReviewBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ReviewBox>;

const Template: ComponentStory<typeof ReviewBox> = (args) => <ReviewBox {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  mode: 'add',
  score: 10,
  text: '',
  maxLength: 220,
};
