'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import useFetchQuiz from 'hooks/useFetchQuiz';
import ProcessButton from 'components/common/button/ProcessButton';

/**
 * 시작버튼 컴포넌트
 */
export default function StartButton() {
  const router = useRouter();
  const isLoading = useFetchQuiz();
  const text = isLoading ? 'Loading' : 'Start Quiz';

  return <ProcessButton text={text} disabled={isLoading} onClick={() => router.push('/quiz')} />;
}
