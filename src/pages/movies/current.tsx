import ComingSoon from '@/components/ComingSoon';
import Layout from '@/components/Layout';
import Head from 'next/head';

// TODO: Static Site Generation (SSG)
// TODO: 페이지네이션(더보기) API 활용
export default function CurrentMoviesPage() {
  return (
    <>
      <Head>
        <title>Current Movies - Chova Cinema</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ComingSoon />
      </Layout>
    </>
  );
}
