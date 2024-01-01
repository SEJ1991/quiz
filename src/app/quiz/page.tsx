import React from 'react';

import GoButton from 'components/quiz/GoButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz | QUIZ',
  description: 'Random Quiz Website | QUIZ page',
};

/**
 * 퀴즈 페이지
 */
export default function QuizPage() {
  return (
    <main className='w-full min-h-screen pt-12 flex flex-col justify-center items-center gap-y-5'>
      <span>quiz page</span>
      <GoButton />
    </main>
  );
}
