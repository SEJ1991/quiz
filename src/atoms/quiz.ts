import { atom } from 'jotai';

import { Quiz, QuizResult } from 'types/quiz';

/**
 * 퀴즈 정보
 */
export const quizzesJotai = atom<Quiz[]>([]);

/**
 * 사용자 퀴즈 결과 정보
 */
export const resultsJotai = atom<QuizResult[]>([]);
