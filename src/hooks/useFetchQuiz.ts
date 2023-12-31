import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';

import { getQuiz } from 'api/quiz';
import { quizzesJotai } from 'atoms/quiz';

/**
 * Quiz 문제 요청 커스텀 훅
 */
export default function useFetchQuiz(): boolean {
  const setQuizzes = useSetAtom(quizzesJotai);
  const { data, isLoading } = useQuery({
    queryKey: ['quizzes'],
    queryFn: getQuiz,
    retry: 10,
  });

  useEffect(() => {
    data && setQuizzes(data.results);
  }, [data]);

  return isLoading;
}
