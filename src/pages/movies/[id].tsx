import Carousel from '@/components/Carousel';
import ComingSoon from '@/components/ComingSoon';
import Layout from '@/components/Layout';
import MovieDetailHead from '@/components/MovieDetailHead';
import { CarouselItem, Casting, MovieDetail, SpecialScreen } from '@/query/types';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

// TODO: step1 SSR, step2 SSG
export default function MovieDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const carouselItems: CarouselItem[] = [
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_1.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_2.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_3.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_4.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_5.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_6.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_7.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_8.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_9.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_10.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_11.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_12.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_13.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_14.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_15.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_16.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_17.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_18.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_19.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_20.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_21.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_22.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_23.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_24.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_105_25.jpg',
    },
    {
      img: 'https://chova-cinema.s3.ap-northeast-2.amazonaws.com/Media/MovieFile/MovieImg/202007/16010_201_1.jpg',
    },
  ];

  const movieDetail: MovieDetail = {
    MakingNationNameKR: '한국',
    MakingNationNameUS: '한국',
    MakingNationName: null,
    MovieGenreCode: '20',
    PlayTime: 115,
    SoundTypeCode: '100,300',
    SoundTypeNameKR: '일반사운드,Atmos',
    SoundTypeNameUS: '일반사운드,Atmos',
    FourDTypeCode: '100,200',
    FourDTypeNameKR: '일반,Super 4D',
    FourDTypeNameUS: '일반,Super 4D',
    TranslationDivisionCode: '',
    TranslationDivisionNameKR: '',
    TranslationDivisionNameUS: '',
    HomepageURL: 'http://www.bando2020.kr',
    SynopsisKR:
      '<b> 전대미문의 재난 그 후 4년<br>폐허의 땅으로 다시 들어간다! </b><br><br>4년 전, 나라 전체를 휩쓸어버린 전대미문의 재난에서<br>가까스로 탈출했던 ‘정석’(강동원).<br>바깥세상으로부터 철저히 고립된 반도에<br>다시 들어가야 하는 피할 수 없는 제안을 받는다.<br><br>제한 시간 내에 지정된 트럭을 확보해<br>반도를 빠져 나와야 하는 미션을 수행하던 중<br>인간성을 상실한 631부대와 4년 전보다 더욱 거세진<br>대규모 좀비 무리가 정석 일행을 습격한다.<br><br>절체절명의 순간,<br>폐허가 된 땅에서 살아남은 ‘민정’(이정현) 가족의 도움으로<br>위기를 가까스로 모면하고<br>이들과 함께 반도를 탈출할 수 있는 마지막 기회를 잡기로 한다.<br><br><b> 되돌아온 자, 살아남은 자 그리고 미쳐버린 자<br>필사의 사투가 시작된다! </b>',
    SynopsisUS:
      '<b> 전대미문의 재난 그 후 4년<br>폐허의 땅으로 다시 들어간다! </b><br><br>4년 전, 나라 전체를 휩쓸어버린 전대미문의 재난에서<br>가까스로 탈출했던 ‘정석’(강동원).<br>바깥세상으로부터 철저히 고립된 반도에<br>다시 들어가야 하는 피할 수 없는 제안을 받는다.<br><br>제한 시간 내에 지정된 트럭을 확보해<br>반도를 빠져 나와야 하는 미션을 수행하던 중<br>인간성을 상실한 631부대와 4년 전보다 더욱 거세진<br>대규모 좀비 무리가 정석 일행을 습격한다.<br><br>절체절명의 순간,<br>폐허가 된 땅에서 살아남은 ‘민정’(이정현) 가족의 도움으로<br>위기를 가까스로 모면하고<br>이들과 함께 반도를 탈출할 수 있는 마지막 기회를 잡기로 한다.<br><br><b> 되돌아온 자, 살아남은 자 그리고 미쳐버린 자<br>필사의 사투가 시작된다! </b>',
    Synopsis: null,
    TotalViewCount: 44335,
    AgePrefer10: '6.3',
    AgePrefer20: '40.1',
    AgePrefer30: '27.4',
    AgePrefer40: '26.2',
    ManPrefer: '44.4',
    WomanPrefer: '55.6',
    KOFCustCnt: 1764,
    AggrDt: '2020-07-10 오전 12:00:00',
    MakingNationNameKR2: '',
    MakingNationNameKR3: '',
    MovieGenreNameKR2: '드라마',
    MovieGenreNameKR3: '',
    RepresentationMovieCode: '16010',
    MoviePlayYN: 'Y',
    MoviePlayEndYN: 0,
    MovieNameKR: '반도',
    MovieNameUS: '반도',
    MovieName: null,
    PosterURL: `/Media/MovieFile/MovieImg/202007/16010_103_1.jpg`,
    ViewGradeCode: 15,
    ViewGradeNameKR: '15세이상관람가',
    ViewGradeNameUS: '15세이상관람가',
    ViewGradeName: null,
    BookingRate: 78.04,
    ReleaseDate: '2020-07-15 오전 12:00:00',
    DDay: null,
    ExpectEvaluation: 0,
    ViewEvaluation: 7.4,
    Evaluation: 0,
    BookingYN: 'Y',
    ViewRate: 78.04,
    SpecialScreenDivisionCode: [
      '200',
      '300',
      '301',
      '930',
      '941',
      '950',
      '960',
      '980',
      '986',
      '987',
    ],
    SoloOpenYN: null,
    OpenORClosing: 0,
    BookingRank: '1',
    ViewSortSequence: null,
    BookingSortSequence: null,
    FilmCode: '200',
    FilmName: '2D',
    MovieFestivalID: 0,
    DirectorName: null,
    ActorName: null,
    MovieGenreNameKR: '액션',
    MovieGenreNameUS: '액션',
    MovieGenreName: null,
    ProductionCompanyName: '(주)영화사 레드피터',
    MovieDivisionCode: null,
    MovieFestivalName: null,
    MovieFestivalFilmCount: null,
    MovieFestivalOpenDate: null,
    MovieFestivalFinalDate: null,
    MovieFestivalOpenMovieCode: null,
    MovieFestivalOpenMovieName: null,
    MovieFestivalFinalMovieCode: null,
    MovieFestivalFinalMovieName: null,
    ImagePath: null,
    ImageALT: null,
    LinkDivisionCode: null,
    ParameterEventID: null,
    ParameterRepMovieCode: null,
    URL: null,
    PopupTitle: null,
    KOFMovieCd: null,
    PlanedRelsYN: 1,
    PlanedRelsMnth: '2020-07',
    KeywordID: null,
    KeywordNm: null,
    MoreLookCD: null,
    MoreLookUrl: null,
    MoreLookImgUrl: null,
    MoreLookImgAlt: null,
    UpdateYn: null,
    ArrayStandardCd: null,
    UpdateDt: null,
    LikeYN: 'N',
    ViewCount: 0,
    LikeCount: 1040,
    TargetMovieListCode: 0,
    ViewCountSortSequence: 0,
  };

  const casting: Casting[] = [
    {
      RepresentationMovieCode: '16010',
      StaffName: '연상호',
      StaffImage: '/Media/MovieFile/PersonImg/53000/52363_107_1.jpg',
      Role: '감독',
    },
    {
      RepresentationMovieCode: '16010',
      StaffName: '강동원',
      StaffImage: '/Media/MovieFile/PersonImg/29000/28419_107_3.png',
      Role: '배우',
    },
    {
      RepresentationMovieCode: '16010',
      StaffName: '이정현',
      StaffImage: '/Media/MovieFile/PersonImg/2000/1401_107_3.jpg',
      Role: '배우',
    },
    {
      RepresentationMovieCode: '16010',
      StaffName: '권해효',
      StaffImage: '/Media/MovieFile/PersonImg/5000/4917_107_2.jpg',
      Role: '배우',
    },
    {
      RepresentationMovieCode: '16010',
      StaffName: '김민재',
      StaffImage: '/Media/MovieFile/PersonImg/85000/84891_107_5.jpg',
      Role: '배우',
    },
  ];

  const specialScreen: SpecialScreen[] = [
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
  ];

  const handleTicketingClick = () => {};

  return (
    <>
      <Head>
        <title>Movie Detail - Chova Cinema</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Carousel height={560} width={840} items={carouselItems} />
        <section style={{ marginTop: '28px' }}>
          <div className="center">
            <MovieDetailHead
              movieDetail={movieDetail}
              casting={casting}
              specialScreen={specialScreen}
              onTicketingClick={handleTicketingClick}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
