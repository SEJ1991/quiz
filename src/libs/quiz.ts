import { Context } from 'types/quiz';
import { shuffle } from './common';

/**
 * slug의 값이 유효한지에 대한 판별 함수
 * @param {string | undefined} slug slug
 * @returns 유효하면 true, 유효하지 않으면 false
 */
export const isCorrectParamForQuiz = (slug: string | undefined): boolean => {
  const index = Number(slug);

  if (isNaN(index) || (index < 0 && 4 < index)) {
    return false;
  }

  return true;
};

/**
 *
 * @param correctAnswer 정답 보기
 * @param contexts 답이 아닌 보기
 * @returns 문제 지문 목록
 */
export const getMixedContexts = (correctAnswer: string, contexts: string[]) => {
  const a = shuffle(contexts.concat(correctAnswer));
  console.log(a);
};
