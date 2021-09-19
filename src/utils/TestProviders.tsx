import React from 'react';
import { QueryClient, QueryCache, QueryClientProvider } from 'react-query';
import { SpotDataProvider } from '../components';

const queryCache = new QueryCache();

export const queryClient = new QueryClient({
  queryCache,
  defaultOptions: { queries: { retry: false } },
});

export const TestProvider: React.FC = ({ children }) => {
  return (
    <SpotDataProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SpotDataProvider>
  );
};
