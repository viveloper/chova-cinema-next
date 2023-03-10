import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from '@/components/ErrorBoundary';
import '@/styles/globals.css';
import ErrorScreen from '@/components/ErrorScreen';
import { RecoilRoot } from 'recoil';

// const isMSWEnabled =
//   process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_API_MOCKING_ENABLED === 'true';
// let isMSWReady = false;

// const initMocks = async () => {
//   if (isMSWEnabled) {
//     if (typeof window !== 'undefined') {
//       const { worker } = await import('../mocks/browser');
//       worker.start();
//       isMSWReady = true;
//     } else {
//       const { server } = await import('../mocks/server');
//       server.listen();
//     }
//   }
// };

// initMocks();

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // refetchOnMount: false,
            refetchOnWindowFocus: false,
            useErrorBoundary: true,
          },
        },
      }),
  );

  // const [ready, setReady] = useState(!isMSWEnabled);

  // useEffect(() => {
  //   if (!isMSWEnabled) return;
  //   const timer = setInterval(() => {
  //     if (isMSWReady) {
  //       setReady(true);
  //       clearInterval(timer);
  //     }
  //   }, 100);
  // }, []);

  // if (!ready) return <></>;

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ErrorBoundary fallback={<ErrorScreen />}>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
