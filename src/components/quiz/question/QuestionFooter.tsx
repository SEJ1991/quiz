import React from 'react';

import StepButton from './StepButton';
import SelectArea from './SelectArea';

/**
 * 문제 하단 컴포넌트
 * @property {number} index index
 */
export default function QuestionFooter({ index }: Props) {
  return (
    <div className='flex flex-col gap-y-5 col-span-2 '>
      <SelectArea index={index} />
      <div className='flex justify-center items-start gap-x-2'>
        <StepButton text='Prev' index={index} />
        <StepButton text='Next' index={index} />
      </div>
    </div>
  );
}

interface Props {
  index: number;
}
