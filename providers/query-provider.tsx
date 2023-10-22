"use client";
import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface QueryProviderProps {
    children: ReactNode;
}

const QueryProvider: React.FC<QueryProviderProps> = ( { children } ) => {
    const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default QueryProvider