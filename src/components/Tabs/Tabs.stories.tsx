import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tabs from '.';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  tabs: [
    {
      name: '영화정보',
      value: 'info',
    },
    {
      name: '평점 및 관람평 (1,405)',
      value: 'review',
    },
  ],
  activeTab: 'info',
};
