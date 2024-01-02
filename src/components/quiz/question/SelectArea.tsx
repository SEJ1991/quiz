'use client';

import React from 'react';
import { useAtomValue } from 'jotai';

import useSelectQuiz from 'hooks/quiz/question/useSelectQuiz';
import { quizzesJotai } from 'atoms/quiz';

/**
 * 보기 선택 버튼 목록 컴포넌트
 */
export default function SelectArea({ index }: Props) {
  const quiz = useAtomValue(quizzesJotai)[index];
  const { contexts } = quiz;
  const {
    progress: { green, red },
    handleOnClick,
  } = useSelectQuiz({ index, contexts });
  const isProgress = !!(green || red);

  return (
    <div className='flex justify-center gap-x-2'>
      {contexts.map(({ order }) => (
        <button
          key={order}
          className={`border-2 rounded-md px-5 py-3 text-md transition-colors cursor-pointer hover:text-white disabled:opacity-30 
          ${(order === green && 'green') || (order === red && 'red') || 'cyan'}-button
          `}
          onClick={() => handleOnClick(order)}
          disabled={isProgress && order !== green && order !== red}
        >
          {order}
        </button>
      ))}
    </div>
  );
}

interface Props {
  index: number;
}
