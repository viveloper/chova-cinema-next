import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { dehydrate, DehydratedState, QueryClient, useQuery } from '@tanstack/react-query';
import Carousel from '@/components/Carousel';
import Layout from '@/components/Layout';
import MovieCardList from '@/components/MovieCardList';
import getCarousel from '@/query/carousel';
import getMovies from '@/query/movie';
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps<{
  dehydratedState: DehydratedState;
}> = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ['carousel', { use: 'home' }],
      queryFn: getCarousel,
    }),
    queryClient.prefetchQuery({
      queryKey: ['movies', { limit: 21 }],
      queryFn: () => getMovies({ limit: 21 }),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  const { push } = useRouter();

  const { data: carouselItems } = useQuery({
    queryKey: ['carousel', { use: 'home' }],
    queryFn: getCarousel,
  });

  const { data: movies } = useQuery({
    queryKey: ['movies', { limit: 21 }],
    queryFn: () => getMovies({ limit: 21 }),
  });

  const moveTicketingPage = () => {
    push('/ticketing');
  };

  const moveMovieDetailPage = (movieCode: string) => {
    push(`/movies/${movieCode}`);
  };

  return (
    <>
      <Head>
        <title>Chova Cinema</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout theme="dark">
        <Carousel theme="dark" height={774} items={carouselItems ?? []} />
        <section style={{ backgroundColor: '#000', padding: '32px 0' }}>
          <div className="center">
            <MovieCardList
              theme="dark"
              movies={movies ?? []}
              showNum={5}
              onTicketingClick={moveTicketingPage}
              onDetailClick={moveMovieDetailPage}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
