import { resultsJotai } from 'atoms/quiz';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

/**
 * 문제 하단 버튼 로직 커스텀 훅
 * @property {number} index index
 * @property {'Prev' | 'Next'} text 문구
 * @return disabled: 버튼 비활성화 여부 ,moveStep: 퀴즈 뒤로가기, 앞으로 가기 처리 함수
 */
export default function useStep({ index, text }: Props) {
  const router = useRouter();
  const result = useAtomValue(resultsJotai)[index];
  const isNext = text === 'Next';
  const disabled = (isNext && !!!result.order) || (!isNext && !index);

  const moveStep = () => {
    let path = `/quiz/${index + (isNext ? 1 : -1)}`;

    if (index === 0 && !isNext) {
      path = '/quiz';
    }

    if (index === 4 && isNext) {
      path = '/result';
    }

    router.push(path);
  };

  return {
    disabled,
    moveStep,
  };
}

interface Props {
  index: number;
  text: 'Prev' | 'Next';
}
