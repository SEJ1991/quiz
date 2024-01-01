'use client';

import React from 'react';
import { useAtomValue } from 'jotai';

import { quizzesJotai } from 'atoms/quiz';
import NoQuestion from './NoQuestion';

/**
 * 문제 센터 컴포넌트
 * @property {number} index index
 */
export default function QuestionBody({ index }: Props) {
  const quiz = useAtomValue(quizzesJotai)[index];

  if (!quiz) {
    return <NoQuestion />;
  }

  const { correct_answer, incorrect_answers, question } = quiz;

  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: `${index + 1}. ${question}` }} />
    </div>
  );
}

interface Props {
  index: number;
}
