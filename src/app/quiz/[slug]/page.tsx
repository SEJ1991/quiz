import React from 'react';

import NotFound from './not-found';
import Question from 'components/quiz/question/Question';
import { isCorrectParamForQuiz } from 'libs/quiz';

/**
 * 퀴즈 문재 페이지
 * @property {string} params string 형태의 slug
 */
export default function QustionPage({ params: { slug } }: Props) {
  if (!isCorrectParamForQuiz(slug)) {
    return <NotFound />;
  }

  const index = Number(slug);

  return <Question index={index} />;
}

interface Props {
  params: { slug: string };
}
