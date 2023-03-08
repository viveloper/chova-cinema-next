import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GenderPrefer from '.';

export default {
  title: 'Components/GenderPrefer',
  component: GenderPrefer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof GenderPrefer>;

const Template: ComponentStory<typeof GenderPrefer> = (args) => <GenderPrefer {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  manPrefer: 45.6,
  womanPrefer: 55.6,
};
