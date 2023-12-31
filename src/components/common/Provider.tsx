'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * 각종 제공자 컴포넌트
 */
export default function Provider({ children }: Props) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

interface Props {
  children: React.ReactNode;
}
