import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LayerMovieTrailer from '.';

const S3_BASE_URL = process.env.NEXT_PUBLIC_S3_BASE_URL;

export default {
  title: 'Components/LayerMovieTrailer',
  component: LayerMovieTrailer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClose: { action: 'closed' },
  },
} as ComponentMeta<typeof LayerMovieTrailer>;

const Template: ComponentStory<typeof LayerMovieTrailer> = (args) => (
  <LayerMovieTrailer {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  src: `${S3_BASE_URL}/CarouselMedia/OneDay_1280720.mp4`,
  isActive: true,
};
