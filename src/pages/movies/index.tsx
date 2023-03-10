import Carousel from '@/components/Carousel';
import Exhibition from '@/components/Exhibition';
import Layout from '@/components/Layout';
import TopMovies from '@/components/TopMovies';
import { createQueryKey } from '@/query';
import { queryMoviesPageData } from '@/query/moviesPageData';
import { dehydrate, DehydratedState, QueryClient, useQuery } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import Head from 'next/head';

// TODO: CSR(Client Side Rendering)

export const getStaticProps: GetStaticProps<{
  dehydratedState: DehydratedState;
}> = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: createQueryKey({ queryType: 'MOVIES_PAGE_DATA' }),
    queryFn: queryMoviesPageData,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function MoviesPage() {
  const { data } = useQuery({
    queryKey: createQueryKey({ queryType: 'MOVIES_PAGE_DATA' }),
    queryFn: queryMoviesPageData,
  });

  const moveSubMoviesPage = (subType: 'current' | 'pre') => {
    // TODO: 상영 중인 영화 목록 / 상영 예정인 영화 목록 페이지 라우트
    // TODO: 가능하면 Link 컴포넌트의 href 사용하여 prefetch 기능 활성화
    // push(`/movies/${subType}`);
  };

  return (
    <>
      <Head>
        <title>Movies - Chova Cinema</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Carousel theme="light" height={420} items={data?.carouselItems ?? []} />
        <div className="center" style={{ paddingTop: '32px' }}>
          <section style={{ marginTop: '16px' }}>
            <TopMovies
              title="현재 상영작"
              showNum={5}
              movies={data?.currentMovies ?? []}
              onMoreClick={() => moveSubMoviesPage('current')}
            />
          </section>
          <section style={{ marginTop: '16px' }}>
            <TopMovies
              title="상영 예정작"
              showNum={5}
              movies={data?.preMovies ?? []}
              onMoreClick={() => moveSubMoviesPage('pre')}
            />
          </section>
          <section
            style={{
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              margin: '32px 0 8px 0',
            }}
          >
            <Exhibition
              title={'아트&컬쳐'}
              subTitle={'감성을 적시는'}
              link={{ name: '아르떼 바로가기' }}
              backgroundImage={`/img/exhibition/bg_exhib_01.png`}
              fontColor="#000"
              movies={data?.arteMovies}
            />
            <Exhibition
              title={'해외명작'}
              subTitle={'스크린에서 보는'}
              link={{ name: '오페라 바로가기' }}
              backgroundImage={`/img/exhibition/bg_exhib_02.png`}
              fontColor="#fff"
              movies={data?.operaMovies}
            />
            <Exhibition
              title={'인생영화'}
              subTitle={'초바시네마의'}
              backgroundImage={`/img/exhibition/bg_exhib_03.png`}
              fontColor="#fff"
            />
          </section>
        </div>
      </Layout>
    </>
  );
}
