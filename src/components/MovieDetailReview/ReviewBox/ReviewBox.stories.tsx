import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReviewBox from '.';

export default {
  title: 'Components/ReviewBox',
  component: ReviewBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ReviewBox>;

const Template: ComponentStory<typeof ReviewBox> = (args) => <ReviewBox {...args} />;

export const AddReview = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AddReview.args = {
  mode: 'add',
  maxLength: 220,
  initialValue: {
    text: '',
    score: 10,
  },
};

export const EditReview = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EditReview.args = {
  mode: 'edit',
  maxLength: 220,
  initialValue: {
    id: 17,
    text: 'hello',
    score: 8,
  },
};
