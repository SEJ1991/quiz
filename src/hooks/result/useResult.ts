import { useAtom, useAtomValue } from 'jotai';

import { resultsJotai } from 'atoms/quiz';
import { useEffect } from 'react';

/**
 * 결과정보 커스텀 훅
 */
export default function useResult() {
  const [results, setResults] = useAtom(resultsJotai);
  const totalQuestion = results.length;
  const correct = results.filter(result => result.isCorrect).length;
  const incorrect = results.length - correct;
  const correctPercentage = (correct / totalQuestion) * 100;

  useEffect(() => {
    const storageResults = localStorage.getItem('results');

    if (!results.length) {
      if (storageResults) {
        setResults(JSON.parse(storageResults));
      }
    }
  }, []);

  return {
    correct,
    incorrect,
    correctPercentage,
  };
}
