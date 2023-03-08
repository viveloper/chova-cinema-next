import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Poster from '.';

export default {
  title: 'Components/Poster',
  component: Poster,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Poster>;

const Template: ComponentStory<typeof Poster> = (args) => <Poster {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  imageUrls: [
    '/Media/MovieFile/MovieImg/202007/16010_105_1.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_2.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_3.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_4.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_5.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_6.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_7.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_8.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_9.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_10.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_11.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_12.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_13.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_14.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_15.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_16.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_17.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_18.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_19.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_20.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_21.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_22.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_23.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_24.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_105_25.jpg',
    '/Media/MovieFile/MovieImg/202007/16010_201_1.jpg',
  ].map((item) => process.env.NEXT_PUBLIC_S3_BASE_URL + item),
};
