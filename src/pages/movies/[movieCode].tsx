import Carousel from '@/components/Carousel';
import Layout from '@/components/Layout';
import MovieDetailHead from '@/components/MovieDetailHead';
import { queryMovieDetailPageData } from '@/query/movieDetailPageData';
import { Movie } from '@/query/types';
import { dehydrate, DehydratedState, QueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

// TODO: SSG or ISR

type PathParams = {
  movieCode: string;
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const { data: movies } = await axios.get<Movie[]>(
    `${process.env.NEXT_PUBLIC_API_SERVER_BASE_URL}/api/movies`,
  );

  const paths = movies.map((item) => ({ params: { movieCode: item.RepresentationMovieCode } }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps<
  {
    dehydratedState: DehydratedState;
  },
  PathParams
> = async (context) => {
  const { movieCode } = context.params!;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [`pages/movies`, movieCode],
    queryFn: () => queryMovieDetailPageData(movieCode),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function MovieDetailPage() {
  const router = useRouter();
  const { movieCode } = router.query;

  const { data, isSuccess } = useQuery({
    queryKey: [`pages/movies`, movieCode],
    queryFn: () => queryMovieDetailPageData(movieCode as string),
    enabled: Boolean(movieCode),
  });

  const handleTicketingClick = () => {
    router.push('/ticketing');
  };

  if (!isSuccess) return <></>;

  return (
    <>
      <Head>
        <title>Movie Detail - Chova Cinema</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Carousel height={560} width={840} items={data.carouselItems ?? []} />
        <section style={{ marginTop: '28px' }}>
          <div className="center">
            <MovieDetailHead
              movieDetail={data.movieDetail}
              casting={data.casting}
              specialScreen={data.specialScreen}
              onTicketingClick={handleTicketingClick}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
