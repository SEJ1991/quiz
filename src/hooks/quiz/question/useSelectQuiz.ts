import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import { resultsJotai } from 'atoms/quiz';
import { Context } from 'types/quiz';

/**
 * 보기 선택 로직 커스텀 훅
 * @property {number} index 현재 퀴즈 문제 순번
 * @property {Context} contexts 보기정보 목록
 * @returns  progress: {green: 사용자가 선택한 정답 번호, red: 사용자가 선택한 오답 번호}, handleOnClick: 보기 버튼 클릭 이벤트 함수
 */
export default function useSelectQuiz({ index, contexts }: Props) {
  const [results, setResults] = useAtom(resultsJotai);
  const [progress, setProgress] = useState({
    green: 0,
    red: 0,
  });

  /**
   * 퀴즈 보기 번호 버튼 클릭 이벤트 함수
   */
  const handleOnClick = (order: number) => {
    if (!results[index].order) {
      const context = contexts.find(context => context.order === order);

      if (context) {
        const { isCorrect } = context;
        const updateResults = results.map((result, idx) =>
          idx === index ? { order, isCorrect } : result
        );

        setResults(updateResults);
        localStorage.setItem('results', JSON.stringify(updateResults));
      }
    }
  };

  useEffect(() => {
    // NoQuestion.tsx에서 resultsJotai의 상태가 변경 되었을 때가 있기 때문에 useEffect에 setProgress 상태변경을 해줌.
    const { order, isCorrect } = results[index];

    if (order) {
      const green = isCorrect ? order : 0;
      const red = isCorrect ? 0 : order;

      setProgress({ green, red });
    }
  }, [results]);

  return { progress, handleOnClick };
}

interface Props {
  index: number;
  contexts: Context[];
}
