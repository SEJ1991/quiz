import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { usePathname, useRouter } from 'next/navigation';

import { quizzesJotai, resultsJotai } from 'atoms/quiz';

/**
 * 퀴즈 정보 유효성이 통과되지 못했을 때 처리해주는 커스텀 훅
 */
export default function useNoQuestion() {
  const router = useRouter();
  const pathname = usePathname();

  const setQuizzes = useSetAtom(quizzesJotai);
  const setResults = useSetAtom(resultsJotai);

  useEffect(() => {
    let path = pathname;
    const storageQuizzes = localStorage.getItem('quizzes');
    const storageResults = localStorage.getItem('results');

    setTimeout(() => {
      if (storageQuizzes && storageResults) {
        setQuizzes(JSON.parse(storageQuizzes));
        setResults(JSON.parse(storageResults));
      } else {
        path = '/';
      }

      router.replace(path);
    }, 500);
  }, []);
}
