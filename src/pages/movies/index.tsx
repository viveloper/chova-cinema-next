import Carousel from '@/components/Carousel';
import Exhibition from '@/components/Exhibition';
import Layout from '@/components/Layout';
import TopMovies from '@/components/TopMovies';
import { queryCarousel } from '@/query/carousel';
import { MovieType, queryMovies, querySpecialMovies } from '@/query/movie';
import { dehydrate, DehydratedState, QueryClient, useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps<{
  dehydratedState: DehydratedState;
}> = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ['carousel', { use: 'movie' }],
      queryFn: () => queryCarousel({ use: 'movie' }),
    }),
    queryClient.prefetchQuery({
      queryKey: ['movies', { type: 'current' }],
      queryFn: () => queryMovies({ type: 'current' }),
    }),
    queryClient.prefetchQuery({
      queryKey: ['movies', { type: 'pre' }],
      queryFn: () => queryMovies({ type: 'pre' }),
    }),
    queryClient.prefetchQuery({
      queryKey: ['movies', { type: 'arte' }],
      queryFn: () => querySpecialMovies({ type: 'arte' }),
    }),
    queryClient.prefetchQuery({
      queryKey: ['movies', { type: 'opera' }],
      queryFn: () => querySpecialMovies({ type: 'opera' }),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

// TODO: 페이지네이션(더보기)
export default function Movies() {
  const { push } = useRouter();

  const { data: carouselItems } = useQuery({
    queryKey: ['carousel', { use: 'movie' }],
    queryFn: () => queryCarousel({ use: 'movie' }),
  });

  const { data: currentMovies } = useQuery({
    queryKey: ['movies', { type: 'current' }],
    queryFn: () => queryMovies({ type: 'current' }),
  });

  const { data: preMovies } = useQuery({
    queryKey: ['movies', { type: 'pre' }],
    queryFn: () => queryMovies({ type: 'pre' }),
  });

  const { data: arteMovies } = useQuery({
    queryKey: ['movies', { type: 'arte' }],
    queryFn: () => querySpecialMovies({ type: 'arte' }),
  });

  const { data: operaMovies } = useQuery({
    queryKey: ['movies', { type: 'opera' }],
    queryFn: () => querySpecialMovies({ type: 'opera' }),
  });

  console.log({
    carouselItems,
    currentMovies,
    preMovies,
    arteMovies,
    operaMovies,
  });

  const moveSubMoviesPage = (type: MovieType) => {
    push(`/movies/${type}`);
  };

  const moveTicketingPage = () => {
    push('/ticketing');
  };

  const moveMovieDetailPage = (movieCode: string) => {
    push(`/movies/${movieCode}`);
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
        <Carousel theme="light" height={420} items={carouselItems ?? []} />
        <div className="center" style={{ paddingTop: '32px' }}>
          <section style={{ marginTop: '16px' }}>
            <TopMovies
              title="현재 상영작"
              showNum={5}
              movies={currentMovies ?? []}
              onMoreClick={() => moveSubMoviesPage('current')}
              onTicketingClick={moveTicketingPage}
              onDetailClick={moveMovieDetailPage}
            />
          </section>
          <section style={{ marginTop: '16px' }}>
            <TopMovies
              title="상영 예정작"
              showNum={5}
              movies={preMovies ?? []}
              onMoreClick={() => moveSubMoviesPage('pre')}
              onTicketingClick={moveTicketingPage}
              onDetailClick={moveMovieDetailPage}
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
              movies={arteMovies}
            />
            <Exhibition
              title={'해외명작'}
              subTitle={'스크린에서 보는'}
              link={{ name: '오페라 바로가기' }}
              backgroundImage={`/img/exhibition/bg_exhib_02.png`}
              fontColor="#fff"
              movies={operaMovies}
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
