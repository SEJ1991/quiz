'use client';

import React from 'react';
import { useAtomValue } from 'jotai';

import QuestionBody from './QuestionBody';
import QuestionFooter from './QuestionFooter';
import NoQuestion from './NoQuestion';
import { quizzesJotai } from 'atoms/quiz';

/**
 * 퀴즈 컴포넌트
 * @property {number} index index
 */
export default function Question({ index }: Props) {
  const quiz = useAtomValue(quizzesJotai)[index];

  if (!quiz) {
    return <NoQuestion />;
  }

  return (
    <>
      <QuestionBody index={index} quiz={quiz} />
      <QuestionFooter index={index} />
    </>
  );
}

interface Props {
  index: number;
}
