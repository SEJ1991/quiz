'use client';

import React from 'react';

import Loading from 'components/common/Loading';
import useNoQuestion from 'hooks/quiz/question/useNoQuestion';

/**
 * 퀴즈 정보가 없을 때 보여지는 리다이렉트 컴포넌트
 */
export default function NoQuestion() {
  useNoQuestion();

  return (
    <div className='w-screen h-screen fixed top-0 left-0 z-10 bg-slate-50 grid justify-center items-center'>
      <Loading />
    </div>
  );
}
