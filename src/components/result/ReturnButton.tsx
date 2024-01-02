'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import ProcessButton from 'components/common/button/ProcessButton';

/**
 * 돌아가기 버튼 컴포넌트
 */
export default function ReturnButton() {
  const router = useRouter();

  return <ProcessButton text='Return' onClick={() => router.push('/')} />;
}
