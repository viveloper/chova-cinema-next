import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Synopsis from '.';

export default {
  title: 'Components/Synopsis',
  component: Synopsis,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Synopsis>;

const Template: ComponentStory<typeof Synopsis> = (args) => <Synopsis {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  synopsisHtml: `<b> 전대미문의 재난 그 후 4년<br>폐허의 땅으로 다시 들어간다! </b><br><br>4년 전, 나라 전체를 휩쓸어버린 전대미문의 재난에서<br>가까스로 탈출했던 ‘정석’(강동원).<br>바깥세상으로부터 철저히 고립된 반도에<br>다시 들어가야 하는 피할 수 없는 제안을 받는다.<br><br>제한 시간 내에 지정된 트럭을 확보해<br>반도를 빠져 나와야 하는 미션을 수행하던 중<br>인간성을 상실한 631부대와 4년 전보다 더욱 거세진<br>대규모 좀비 무리가 정석 일행을 습격한다.<br><br>절체절명의 순간,<br>폐허가 된 땅에서 살아남은 ‘민정’(이정현) 가족의 도움으로<br>위기를 가까스로 모면하고<br>이들과 함께 반도를 탈출할 수 있는 마지막 기회를 잡기로 한다.<br><br><b> 되돌아온 자, 살아남은 자 그리고 미쳐버린 자<br>필사의 사투가 시작된다! </b>`,
};
