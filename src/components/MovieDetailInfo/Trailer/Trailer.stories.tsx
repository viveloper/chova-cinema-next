import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Trailer from '.';

export default {
  title: 'Components/Trailer',
  component: Trailer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Trailer>;

const Template: ComponentStory<typeof Trailer> = (args) => <Trailer {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  items: [
    {
      imageUrl: '/Media/MovieFile/MovieImg/202007/16010_109_1.jpg',
      videoUrl: '/Media/MovieFile/MovieMedia/202007/16010_301_1.mp4',
      title: '1차 예고편',
    },
    {
      imageUrl: '/Media/MovieFile/MovieImg/202007/16010_109_2.jpg',
      videoUrl: '/Media/MovieFile/MovieMedia/202007/16010_301_2.mp4',
      title: '메인 예고편',
    },
    {
      imageUrl: '/Media/MovieFile/MovieImg/202007/16010_109_3.jpg',
      videoUrl: '/Media/MovieFile/MovieMedia/202007/16010_301_3.mp4',
      title: "'반도가 온다' 영상",
    },
    {
      imageUrl: '/Media/MovieFile/MovieImg/202007/16010_109_4.jpg',
      videoUrl: '/Media/MovieFile/MovieMedia/202007/16010_301_4.mp4',
      title: '메이킹 예고편',
    },
    {
      imageUrl: '/Media/MovieFile/MovieImg/202007/16010_109_5.jpg',
      videoUrl: '/Media/MovieFile/MovieMedia/202007/16010_301_5.mp4',
      title: '리뷰 30초 예고편',
    },
  ].map((item) => ({
    ...item,
    imageUrl: process.env.NEXT_PUBLIC_S3_BASE_URL + item.imageUrl,
    videoUrl: process.env.NEXT_PUBLIC_S3_BASE_URL + item.videoUrl,
  })),
};
