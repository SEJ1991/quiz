'use client';

import React from 'react';

import ProcessButton from 'components/common/button/ProcessButton';
import useStep from 'hooks/quiz/question/useStep';

/**
 * 이전 || 다음 버튼 컴포넌트
 * @property {number} index index
 * @property {'Prev' | 'Next'} text 문구
 */
export default function StepButton({ index, text }: Props) {
  const { disabled, moveStep } = useStep({ index, text });

  return <ProcessButton text={text} onClick={moveStep} disabled={disabled} />;
}

interface Props {
  index: number;
  text: 'Prev' | 'Next';
}
