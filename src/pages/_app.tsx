import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

const initMocks = async () => {
  if (
    process.env.NODE_ENV === 'development' &&
    process.env.NEXT_PUBLIC_API_MOCKING_ENABLED === 'true'
  ) {
    if (typeof window !== 'undefined') {
      const { worker } = await import('../mocks/browser');
      worker.start();
    } else {
      const { server } = await import('../mocks/server');
      server.listen();
    }
  }
};

initMocks();

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
