import React from 'react';

import ProgressDisplay from 'components/quiz/question/ProgressDisplay';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz | Question',
  description: 'Random Quiz Website | QUIZ Question page',
};

/**
 * 퀴즈 문제 페이지 레이아웃
 */
export default function layout({ children }: Props) {
  return (
    <main className='w-full min-h-screen pt-12 grid grid-cols-[30%_70%]'>
      <aside>
        <ProgressDisplay />
      </aside>
      {children}
    </main>
  );
}

interface Props {
  children: React.ReactNode;
}
