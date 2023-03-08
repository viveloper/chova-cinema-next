import Carousel from '@/components/Carousel';
import Layout from '@/components/Layout';
import MovieDetailHead from '@/components/MovieDetailHead';
import MovieDetailInfo from '@/components/MovieDetailInfo';
import MovieDetailReview from '@/components/MovieDetailReview';
import Tabs from '@/components/Tabs';
import { client, createQueryKey } from '@/query';
import { queryMovieDetailPageData } from '@/query/movieDetailPageData';
import { Movie } from '@/query/types';
import numberWithCommas from '@/utils/numberWithCommas';
import { dehydrate, DehydratedState, QueryClient, useQuery } from '@tanstack/react-query';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

// TODO: SSG or ISR

type PathParams = {
  movieCode: string;
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const { data: movies } = await client.get<Movie[]>(`/movies`);

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
    queryKey: createQueryKey({ queryType: 'MOVIES_DETAIL_PAGE_DATA', params: { movieCode } }),
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

  const [tabValue, setTabValue] = useState<'info' | 'review'>('info');

  const { data, isSuccess } = useQuery({
    queryKey: createQueryKey({
      queryType: 'MOVIES_DETAIL_PAGE_DATA',
      params: { movieCode: movieCode as string },
    }),
    queryFn: () => queryMovieDetailPageData(movieCode as string),
    enabled: Boolean(movieCode),
  });

  if (!isSuccess) return <></>;

  const { movieDetail, trailer, poster, casting, specialScreen } = data;

  return (
    <>
      <Head>
        <title>Movie Detail - Chova Cinema</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Carousel height={560} width={840} items={poster.map((item) => ({ img: item }))} />
        <div className="center">
          <section style={{ marginTop: '28px' }}>
            <MovieDetailHead
              movieDetail={movieDetail}
              casting={casting}
              specialScreen={specialScreen}
              ticketingPath="/ticketing"
            />
          </section>
          <section style={{ margin: '32px 0 28px 0' }}>
            <Tabs
              activeTab={tabValue}
              tabs={[
                {
                  name: '영화정보',
                  value: 'info',
                },
                {
                  name: `평점 및 관람평 (${numberWithCommas(1405)})`, // TODO: data.movieReview.ReviewCounts.TotalReviewCount
                  value: 'review',
                },
              ]}
              onClick={(tabValue) => setTabValue(tabValue as 'info' | 'review')}
            />
          </section>
          <section>
            {tabValue === 'info' ? (
              <MovieDetailInfo
                synopsis={movieDetail.SynopsisKR}
                prefer={{
                  genderPrefer: {
                    manPrefer: Number(movieDetail.ManPrefer),
                    womanPrefer: Number(movieDetail.WomanPrefer),
                  },
                  agePrefer: {
                    agePrefer10: Number(movieDetail.AgePrefer10),
                    agePrefer20: Number(movieDetail.AgePrefer20),
                    agePrefer30: Number(movieDetail.AgePrefer30),
                    agePrefer40: Number(movieDetail.AgePrefer40),
                  },
                }}
                trailerItems={trailer}
                posterUrls={poster}
                castingItems={casting}
              />
            ) : (
              <MovieDetailReview />
            )}
          </section>
        </div>
      </Layout>
    </>
  );
}
