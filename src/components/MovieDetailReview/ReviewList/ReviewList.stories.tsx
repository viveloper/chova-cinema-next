import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReviewList from '.';

export default {
  title: 'Components/ReviewList',
  component: ReviewList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ReviewList>;

const Template: ComponentStory<typeof ReviewList> = (args) => (
  <div className="center">
    <ReviewList {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  totalCount: 705,
  sortType: 'recent',
  isFetchingNextPage: false,
  ownReviewId: 829644938,
  list: [
    {
      ReviewID: 829644938,
      MemberID: '104800109',
      MemberName: '홍길동',
      ReviewText: '굿굿!!',
      Evaluation: 8,
      RecommandCount: 16,
      RepresentationMovieCode: '16010',
      MemberRecommandYN: '',
      RegistDate: '2020.07.26',
      MemberNickName: '',
    },
    {
      ReviewID: 2305255,
      MemberID: '59678440',
      MemberName: '김경화',
      ReviewText: '요즘 좀비물많이나오네요. 잼나요',
      Evaluation: 7,
      RecommandCount: 3,
      RepresentationMovieCode: '16010',
      MemberRecommandYN: 'Y',
      RegistDate: '2020.07.16',
      MemberNickName: '',
    },
    {
      ReviewID: 2305254,
      MemberID: '56942432',
      MemberName: '구성훈',
      ReviewText: '한국영화  후퇴의 시발점',
      Evaluation: 1,
      RecommandCount: 1,
      RepresentationMovieCode: '16010',
      MemberRecommandYN: 'N',
      RegistDate: '2020.07.16',
      MemberNickName: '',
    },
    {
      ReviewID: 2305253,
      MemberID: '51763297',
      MemberName: '이영호',
      ReviewText:
        '그닥 기대한것에 못미치네요 안타깝네 부산행은내용이 뚜렷하고 이야기나 감동을 주는 포인트가 확실한영화였다. 반도는 억지로 끼어맞춘듯한장면도있었고 뭔가가부족했던 영화',
      Evaluation: 4,
      RecommandCount: 0,
      RepresentationMovieCode: '16010',
      MemberRecommandYN: 'N',
      RegistDate: '2020.07.16',
      MemberNickName: '',
    },
    {
      ReviewID: 2305252,
      MemberID: '51187349',
      MemberName: '김도연',
      ReviewText: '힘든 지금에 우리사회에 .. 비슷한 느낌.. 힘들어도 희망은 진짜 온다..',
      Evaluation: 10,
      RecommandCount: 2,
      RepresentationMovieCode: '16010',
      MemberRecommandYN: 'N',
      RegistDate: '2020.07.16',
      MemberNickName: '',
    },
    {
      ReviewID: 2305247,
      MemberID: '50955212',
      MemberName: '강명구',
      ReviewText: '글쎄올시다....',
      Evaluation: 3,
      RecommandCount: 0,
      RepresentationMovieCode: '16010',
      MemberRecommandYN: 'N',
      RegistDate: '2020.07.16',
      MemberNickName: '',
    },
    {
      ReviewID: 2305246,
      MemberID: '57249872',
      MemberName: '김진호',
      ReviewText: '115분이 길었다ㅠㅜ',
      Evaluation: 5,
      RecommandCount: 0,
      RepresentationMovieCode: '16010',
      MemberRecommandYN: 'N',
      RegistDate: '2020.07.16',
      MemberNickName: 'Cinema',
    },
    {
      ReviewID: 2305245,
      MemberID: '54928855',
      MemberName: '오성준',
      ReviewText: '이거뭐야.. 와 한국영화 쓰레기되었네 최악..',
      Evaluation: 2,
      RecommandCount: 0,
      RepresentationMovieCode: '16010',
      MemberRecommandYN: 'N',
      RegistDate: '2020.07.16',
      MemberNickName: '',
    },
    {
      ReviewID: 2305243,
      MemberID: '57262859',
      MemberName: '김민규',
      ReviewText: '시작은 좋았으나 후반부가 매우 아쉽...',
      Evaluation: 5,
      RecommandCount: 0,
      RepresentationMovieCode: '16010',
      MemberRecommandYN: 'N',
      RegistDate: '2020.07.16',
      MemberNickName: '',
    },
    {
      ReviewID: 2305242,
      MemberID: '56694963',
      MemberName: '윤현아',
      ReviewText:
        '기다리고 기대했던 영화라 이 시국에 그것도 22시에 퇴근하고 보러갔는데 진짜 저 왠만한 재미없다는 영화도 재밌게 보는편이거든요. 근데 반도는 진짜 심해요.. 정말 너무 재미없고 저급느낌 팍팍이라 어이가 없네요ㅋ',
      Evaluation: 1,
      RecommandCount: 2,
      RepresentationMovieCode: '16010',
      MemberRecommandYN: 'N',
      RegistDate: '2020.07.16',
      MemberNickName: '에밀리윤',
    },
  ],
};
