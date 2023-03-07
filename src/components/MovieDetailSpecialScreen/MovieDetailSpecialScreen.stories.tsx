import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MovieDetailSpecialScreen from '.';

const S3_BASE_URL = process.env.NEXT_PUBLIC_S3_BASE_URL;

export default {
  title: 'Components/MovieDetailSpecialScreen',
  component: MovieDetailSpecialScreen,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MovieDetailSpecialScreen>;

const Template: ComponentStory<typeof MovieDetailSpecialScreen> = (args) => (
  <MovieDetailSpecialScreen {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  items: [
    {
      SpecialScreenDivisionCode: '300',
      SpecialScreenDivisionName: '샤롯데',
      IconImageFileName: '17566144a32247dfa8a3f5e0472f96a8.png',
      IconImageAlt: '샤롯데바로가기',
      BigImageFileName: '5102e105fd5a4756a7a3ed52a9acdb55.png',
      BigImageAlt: '샤롯데바로가기',
      FilePath: '/img/webAdmin/',
      Url: '/NLCHS/Cinema/SpecialCinema?divisionCode=2&screendivcd=300',
      BadgeImgALT: '샤롯데바로가기',
      BadgeFileNm: '7ef01683982e43deb27d8d0ecf661414.png',
      MobileUrl: '/NLCMW/Cinema/SpecialDetail?detailDivisionCode=0300',
    },
    {
      SpecialScreenDivisionCode: '941',
      SpecialScreenDivisionName: '수퍼플렉스 G',
      IconImageFileName: '12aaf8355476401ea940ae5404c56167.png',
      IconImageAlt: '수퍼플렉스 G 바로가기',
      BigImageFileName: '1e3bfe4310b3433c93b62b77a5713914.png',
      BigImageAlt: '수퍼플렉스 G 바로가기',
      FilePath: '/img/webAdmin/',
      Url: '/NLCHS/Cinema/SpecialCinema?divisionCode=2&screendivcd=941',
      BadgeImgALT: '',
      BadgeFileNm: '1379c5e0f7f54948895f1b32f9fa7f59.png',
      MobileUrl: '/NLCMW/Cinema/SpecialDetail?detailDivisionCode=0941',
    },
    {
      SpecialScreenDivisionCode: '980',
      SpecialScreenDivisionName: '수퍼 S',
      IconImageFileName: '7e75cbd47d514bb18f2c7059003095c0.png',
      IconImageAlt: '수퍼S 바로가기',
      BigImageFileName: '1aad4173450d4bde800adb85824db7fb.png',
      BigImageAlt: '-',
      FilePath: '/img/webAdmin/',
      Url: '/NLCHS/Cinema/SpecialCinema?divisionCode=2&screendivcd=980',
      BadgeImgALT: '',
      BadgeFileNm: 'b722009613854f6fb114e222832a879d.png',
      MobileUrl: '/NLCMW/Cinema/SpecialDetail?detailDivisionCode=0980',
    },
    {
      SpecialScreenDivisionCode: '940',
      SpecialScreenDivisionName: '수퍼플렉스',
      IconImageFileName: '703381caab9e4ca7871c191e180f42f4.png',
      IconImageAlt: '수퍼플렉스 바로가기',
      BigImageFileName: '58c4360c5d904603b08f32d808511065.png',
      BigImageAlt: '수퍼플렉스 바로가기',
      FilePath: '/img/webAdmin/',
      Url: '/NLCHS/Cinema/SpecialCinema?divisionCode=2&screendivcd=940',
      BadgeImgALT: '',
      BadgeFileNm: '3da146e8e79441b7a4145f0ea635fb0f.png',
      MobileUrl: '/NLCMW/Cinema/SpecialDetail?detailDivisionCode=0940',
    },
    {
      SpecialScreenDivisionCode: '930',
      SpecialScreenDivisionName: '수퍼 4D',
      IconImageFileName: '714c1dd8f6f142d1876417b4fe0c4608.png',
      IconImageAlt: '수퍼4D 바로가기',
      BigImageFileName: 'e711995eb1904dd0933993236e4650f1.png',
      BigImageAlt: '수퍼4D 바로가기',
      FilePath: '/img/webAdmin/',
      Url: '/NLCHS/Cinema/SpecialCinema?divisionCode=2&screendivcd=930',
      BadgeImgALT: '',
      BadgeFileNm: '533b0af3b6fc4596b41ca6c9e9f02fb7.png',
      MobileUrl: '/NLCMW/Cinema/SpecialDetail?detailDivisionCode=0930',
    },
    {
      SpecialScreenDivisionCode: '960',
      SpecialScreenDivisionName: '씨네패밀리',
      IconImageFileName: 'aa6d2801e13b4b93acdb78377d849dc8.png',
      IconImageAlt: '씨네패밀리 바로가기',
      BigImageFileName: 'c3b59f912a104953badafb454f54c30b.png',
      BigImageAlt: '씨네패밀리 바로가기',
      FilePath: '/img/webAdmin/',
      Url: '/NLCHS/Cinema/SpecialCinema?divisionCode=2&screendivcd=960',
      BadgeImgALT: '',
      BadgeFileNm: 'fd27df8a266b4bc39ea87477b0ab0412.png',
      MobileUrl: '/NLCMW/Cinema/SpecialDetail?detailDivisionCode=0960',
    },
    {
      SpecialScreenDivisionCode: '200',
      SpecialScreenDivisionName: '씨네커플',
      IconImageFileName: '6fd575d546604590b87288cc1a98d5e1.png',
      IconImageAlt: '씨네커플 바로가기',
      BigImageFileName: '501e0f8e6d914d5d90a594dbf67eef33.png',
      BigImageAlt: '씨네커플 바로가기',
      FilePath: '/img/webAdmin/',
      Url: '/NLCHS/Cinema/SpecialCinema?divisionCode=2&screendivcd=200',
      BadgeImgALT: '',
      BadgeFileNm: 'c34fe18d583e473cb336accd811e8c36.png',
      MobileUrl: '/NLCMW/Cinema/SpecialDetail?detailDivisionCode=0200',
    },
    {
      SpecialScreenDivisionCode: '986',
      SpecialScreenDivisionName: '씨네컴포트(리클라이너)',
      IconImageFileName: 'cb5b27c7578743a19c908b1e56bddd4b.png',
      IconImageAlt: '씨네컴포트',
      BigImageFileName: 'ba0bb994a04a456daf9f497250a62ffd.png',
      BigImageAlt: '씨네컴포트',
      FilePath: '/img/webAdmin/',
      Url: '/NLCHS/Cinema/SpecialCinema?divisionCode=2&screendivcd=986',
      BadgeImgALT: '씨네컴포트',
      BadgeFileNm: 'f1df2d0bcc054d24a75dee03c41d4c26.png',
      MobileUrl: '/NLCMW/Cinema/SpecialDetail?detailDivisionCode=0986',
    },
  ].map((item) => ({ ...item, FilePath: `${S3_BASE_URL}${item.FilePath}` })),
};
