import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/styles/globals.css';

const isMSWEnabled =
  process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_API_MOCKING_ENABLED === 'true';
let isMSWReady = false;

const initMocks = async () => {
  if (isMSWEnabled) {
    if (typeof window !== 'undefined') {
      const { worker } = await import('../mocks/browser');
      worker.start();
      isMSWReady = true;
    } else {
      const { server } = await import('../mocks/server');
      server.listen();
    }
  }
};

initMocks();

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [ready, setReady] = useState(!isMSWEnabled);

  useEffect(() => {
    if (!isMSWEnabled) return;
    const timer = setInterval(() => {
      if (isMSWReady) {
        setReady(true);
        clearInterval(timer);
      }
    }, 100);
  }, []);

  if (!ready) return <></>;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
