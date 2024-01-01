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
export type Quiz = {
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
