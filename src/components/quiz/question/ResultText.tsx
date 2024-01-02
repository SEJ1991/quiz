'use client';

import React from 'react';
import { useAtomValue } from 'jotai';

import { resultsJotai } from 'atoms/quiz';

/**
 * 정답여부를 표기해주는 컴포넌트
 * @property {number} index index
 */
export default function ResultText({ index }: Props) {
  const { order, isCorrect } = useAtomValue(resultsJotai)[index];
  const result = order ? (isCorrect ? 'correct!' : 'incorrect') : '';

  return (
    <p
      className={`text-2xl font-bold ${result === 'correct!' ? 'text-green-500' : 'text-red-500'}`}
    >
      {result}
    </p>
  );
}

interface Props {
  index: number;
}
