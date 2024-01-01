import { useRouter } from 'next/navigation';

/**
 * 문제 하단 버튼 로직 커스텀 훅
 * @property {number} index index
 * @property {'Prev' | 'Next'} text 문구
 */
export default function useStep({ index, text }: Props) {
  const router = useRouter();
  const isNext = text === 'Next';

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
    moveStep,
  };
}

interface Props {
  index: number;
  text: 'Prev' | 'Next';
}
