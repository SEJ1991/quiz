import axios from 'axios';

import { Quiz } from 'types/quiz';

/**
 * 퀴즈 api 요청 함수
 * @see https://opentdb.com/api_config.php
 */
export const getQuiz = async (): Promise<
  undefined | { response_code: number; results: Quiz[] }
> => {
  const response = await axios.get(
    'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple'
  );

  return response.data;
};
