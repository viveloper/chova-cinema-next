import { GetStaticProps } from 'next';
import Head from 'next/head';
import { dehydrate, DehydratedState, QueryClient, useQuery } from '@tanstack/react-query';
import Carousel from '@/components/Carousel';
import Layout from '@/components/Layout';
import MovieCardList from '@/components/MovieCardList';
import { queryHomePageData } from '@/query/homePageData';
import { HomePageData } from '@/query/types';
import { createQueryKey } from '@/query';

export const getStaticProps: GetStaticProps<{
  dehydratedState: DehydratedState;
}> = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: createQueryKey({ queryType: 'HOME_PAGE_DATA' }),
    queryFn: queryHomePageData,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

interface HomePageProps {
  data: HomePageData;
}

export default function HomePage({ data }: HomePageProps) {
  const {
    data: { carouselItems, movies },
  } = useQuery({
    queryKey: createQueryKey({ queryType: 'HOME_PAGE_DATA' }),
    queryFn: queryHomePageData,
    initialData: data,
  });

  return (
    <>
      <Head>
        <title>Chova Cinema</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout theme="dark">
        <Carousel theme="dark" height={774} items={carouselItems} />
        <section style={{ backgroundColor: '#000', padding: '32px 0' }}>
          <div className="center">
            <MovieCardList
              theme="dark"
              movies={movies}
              showNum={5}
              ticketingPath="/ticketing"
              movieDetailBasePath="/movies"
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
