import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Carousel from '.';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: 'light',
  height: 774,
  items: [
    {
      img: '/CarouselMedia/OneDay_1920774.jpg',
      video: '/CarouselMedia/OneDay_1280720.mp4',
      use: 'home',
    },
    {
      img: '/CarouselMedia/SteelRain_1920774.jpg',
      video: '/CarouselMedia/SteelRain_1280720.mp4',
      use: 'home',
    },
    {
      img: '/CarouselMedia/Peninsula_1920774.jpg',
      video: '/CarouselMedia/Peninsula_1280720.mp4',
      use: 'home',
    },
  ],
};
