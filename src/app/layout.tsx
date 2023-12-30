import { Inter } from 'next/font/google';

import type { Metadata } from 'next';
import 'styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quiz | HOME',
  description: 'Random Quiz Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} w-screen h-auto`}>{children}</body>
    </html>
  );
}
