import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

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

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(!isMSWEnabled);

  useEffect(() => {
    if (!isMSWEnabled) return;
    const timer = setInterval(() => {
      console.log('timer');
      if (isMSWReady) {
        setReady(true);
        clearInterval(timer);
      }
    }, 100);
  }, []);

  if (!ready) return <></>;

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
