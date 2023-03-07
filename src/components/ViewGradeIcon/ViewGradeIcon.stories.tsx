import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ViewGradeIcon from '.';

export default {
  title: 'Components/ViewGradeIcon',
  component: ViewGradeIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ViewGradeIcon>;

const Template: ComponentStory<typeof ViewGradeIcon> = (args) => <ViewGradeIcon {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  size: 'small',
  grade: 15,
};
