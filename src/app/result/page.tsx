import React from 'react';

import ResultBody from 'components/result/ResultBody';
import ReturnButton from 'components/result/ReturnButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz | Result',
  description: 'Random Quiz Website | Result page',
};

/**
 * 결과 페이지
 */
export default function ResultPage() {
  return (
    <main className='w-full min-h-screen pt-12 flex flex-col justify-center items-center gap-y-5'>
      <h2 className='text-2xl font-bold'>RESULT</h2>
      <ResultBody />
      <ReturnButton />
    </main>
  );
}
