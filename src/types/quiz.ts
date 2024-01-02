/**
 * 퀴즈 API 데이터 타입
 * @see https://opentdb.com/api_config.php
 * @property {string} category 퀴즈 카테고리
 * @property {string} correct_answer 정답
 * @property {'easy'} difficulty 난이도
 * @property {string[]} incorrect_answers 정답이 아닌 선택지 목록
 * @property {string} question 질문
 * @property {'multiple'} type 퀴즈 타입
 */
export type QuizData = {
  category: string;
  correct_answer: string;
  difficulty: 'easy';
  incorrect_answers: string[];
  question: string;
  type: 'multiple';
};

/**
 * 퀴즈 보기와 답인지에 대한 여부
 * @property {number} order 순서
 * @property {boolean} isCorrect 정답 여부
 * @property {string} context 보기
 */
export type Context = {
  order: number;
  isCorrect: boolean;
  context: string;
};

/**
 * 가공 후 실제 end user 에게 보여질 퀴즈 타입
 * @property {string} question 질문
 * @property {Context[]} contexts 보기 목록
 */
export type Quiz = {
  question: string;
  contexts: Context[];
};

/**
 * 퀴즈 결과 타입
 * @property {number} order 선택한 보기 번호
 * @property {boolean} isCorreact 정답 여부
 */
export type QuizResult = {
  order: number;
  isCorrect: boolean;
};
