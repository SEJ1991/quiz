import { Context, Quiz, QuizData } from 'types/quiz';
import { shuffle } from './common';

/**
 * 보기 순서 섞은 후에 Context 타입의 배열로 반환하는 함수
 * @param correctAnswer 정답 보기
 * @param contexts 답이 아닌 보기
 * @returns 문제 지문
 */
export const getMixedContexts = (correctAnswer: string, contexts: string[]): Context[] => {
  const mixedArray = shuffle(contexts.concat(correctAnswer));

  return mixedArray.map((context, index) => ({
    order: index + 1,
    context,
    isCorrect: context === correctAnswer,
  }));
};

/**
 * QuiaData[] -> Quiz[] 형변환 함수
 * @param {QuizData[]} datas 퀴즈 API로 받은 퀴즈 목록
 * @returns Quiz[] 형태의 배열
 */
export const refineQuizzes = (datas: QuizData[]): Quiz[] => {
  return datas.map(({ question, correct_answer, incorrect_answers }) => ({
    question,
    contexts: getMixedContexts(correct_answer, incorrect_answers),
  }));
};

/**
 * slug의 값이 유효한지에 대한 판별 함수
 * @param {string | undefined} slug slug
 * @returns 유효하면 true, 유효하지 않으면 false
 */
export const isCorrectParamForQuiz = (slug: string | undefined): boolean => {
  const index = Number(slug);

  if (isNaN(index) || index < 0 || 4 < index) {
    return false;
  }

  return true;
};
