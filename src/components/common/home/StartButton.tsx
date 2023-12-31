'use client';

import React from 'react';

import useFetchQuiz from 'hooks/useFetchQuiz';

/**
 * 시작버튼 컴포넌트
 */
export default function StartButton() {
  const isLoading = useFetchQuiz();
  const text = isLoading ? 'Loading' : 'Start Quiz';
  return (
    <button
      className='p-2 bg-cyan-700 rounded-md text-lg text-white transition-all hover:-translate-y-0.5 disabled:opacity-30'
      disabled={isLoading}
    >
      {text}
    </button>
  );
}
