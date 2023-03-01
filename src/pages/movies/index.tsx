import Layout from '@/components/Layout';
import Head from 'next/head';

export default function Movies() {
  return (
    <>
      <Head>
        <title>Movies - Chova Cinema</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="center">Movies</div>
      </Layout>
    </>
  );
}
