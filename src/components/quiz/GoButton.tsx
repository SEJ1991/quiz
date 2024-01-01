'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import ProcessButton from 'components/common/button/ProcessButton';

/**
 * Go 버튼 컴포넌트
 */
export default function GoButton() {
  const router = useRouter();

  return <ProcessButton text='Go!' onClick={() => router.push('/quiz/0')} />;
}
