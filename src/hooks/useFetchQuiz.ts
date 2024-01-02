import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';

import { getQuiz } from 'api/quiz';
import { quizzesJotai, resultsJotai } from 'atoms/quiz';
import { refineQuizzes } from 'libs/quiz';

/**
 * Quiz 문제 요청 커스텀 훅
 * @return 로딩 여부
 */
export default function useFetchQuiz(): boolean {
  const setQuizzes = useSetAtom(quizzesJotai);
  const setResults = useSetAtom(resultsJotai);

  const { data, isLoading } = useQuery({
    queryKey: ['quizzes'],
    queryFn: getQuiz,
    retry: 10,
  });

  useEffect(() => {
    localStorage.removeItem('quizzes');
    localStorage.removeItem('results');
  }, []);

  useEffect(() => {
    if (data) {
      const quizzes = refineQuizzes(data.results);
      const results = Array.from({ length: 5 }, _ => ({ order: 0, isCorrect: false }));

      setQuizzes(quizzes);
      setResults(results);

      localStorage.setItem('quizzes', JSON.stringify(quizzes));
      localStorage.setItem('results', JSON.stringify(results));
    }
  }, [data]);

  return isLoading;
}
