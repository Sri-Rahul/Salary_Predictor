import './globals.css';
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import { Inter } from 'next/font/google';
import { FooterSocial } from '../src/components/FooterSocial';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    // Professional dark theme palette
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5C5F66',
      '#373A40',
      '#2C2E33',
      '#25262B',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
    blue: [
      '#E7F5FF',
      '#D0EBFF',
      '#A5D8FF',
      '#74C0FC',
      '#4DABF7',
      '#339AF0',
      '#228BE6',
      '#1C7ED6',
      '#1971C2',
      '#1864AB',
    ],
  },
  primaryShade: { light: 6, dark: 8 },
  fontFamily: inter.style.fontFamily,
  headings: {
    fontFamily: inter.style.fontFamily,
    sizes: {
      h1: { fontSize: '2.5rem', lineHeight: '3rem' },
      h2: { fontSize: '2rem', lineHeight: '2.5rem' },
      h3: { fontSize: '1.5rem', lineHeight: '2rem' },
    },
  },
});

export const metadata = {
  title: 'Salary Predictor',
  description: 'Predict your starting salary based on your academic background',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <div style={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ flex: 1 }}>
              {children}
            </div>
            <FooterSocial />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}