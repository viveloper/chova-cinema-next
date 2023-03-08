import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Preference from '.';

export default {
  title: 'Components/Preference',
  component: Preference,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Preference>;

const Template: ComponentStory<typeof Preference> = (args) => <Preference {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  genderPrefer: {
    manPrefer: 45.6,
    womanPrefer: 55.6,
  },
  agePrefer: {
    agePrefer10: 6.3,
    agePrefer20: 40.1,
    agePrefer30: 27.4,
    agePrefer40: 26.2,
  },
};
