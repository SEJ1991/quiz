import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * 퀴즈 정보가 없을 때 보여지는 리다이렉트 컴포넌트
 */
export default function NoQuestion() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, []);

  return <div>NoQuestion</div>;
}
