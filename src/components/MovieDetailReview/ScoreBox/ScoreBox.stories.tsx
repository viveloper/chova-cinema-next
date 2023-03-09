import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ScoreBox from '.';

export default {
  title: 'Components/ScoreBox',
  component: ScoreBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ScoreBox>;

const Template: ComponentStory<typeof ScoreBox> = (args) => <ScoreBox {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  score: 8,
  totalScore: 10,
  description: (
    <>
      영화 관람 후 관람평을 작성하시면 <br />
      L.POINT 50P를 적립해 드립니다.
    </>
  ),
};
