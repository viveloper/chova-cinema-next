import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AgePrefer from '.';

export default {
  title: 'Components/AgePrefer',
  component: AgePrefer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AgePrefer>;

const Template: ComponentStory<typeof AgePrefer> = (args) => <AgePrefer {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  agePrefer10: 6.3,
  agePrefer20: 40.1,
  agePrefer30: 27.4,
  agePrefer40: 26.2,
};
