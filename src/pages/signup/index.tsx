import ComingSoon from '@/components/ComingSoon';
import Layout from '@/components/Layout';
import Head from 'next/head';

// TODO: Signup 페이지 구현
export default function Signup() {
  return (
    <>
      <Head>
        <title>Signup - Chova Cinema</title>
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
