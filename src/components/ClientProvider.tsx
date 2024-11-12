'use client';

import { MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

interface ClientProviderProps {
  children: ReactNode;
}

export function ClientProvider({ children }: ClientProviderProps) {
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  );
}