import { Inter } from 'next/font/google';

import type { Metadata } from 'next';
import Header from 'components/common/header/Header';
import 'styles/globals.css';
import Provider from 'components/common/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quiz | HOME',
  description: 'Random Quiz Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} w-screen h-auto`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
