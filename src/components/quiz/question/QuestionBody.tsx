import React from 'react';

import Context from './Context';
import Result from './Result';
import { protectInnerHTML } from 'libs/common';
import { Quiz } from 'types/quiz';

/**
 * 문제 센터 컴포넌트
 * @property {number} index index
 */
export default function QuestionBody({ index, quiz }: Props) {
  const { question, contexts } = quiz;
  const __html = protectInnerHTML(`${index + 1}. ${question}`);

  return (
    <div className='flex flex-col gap-y-5'>
      <h2 dangerouslySetInnerHTML={{ __html }} className='text-xl font-bold' />
      <ol className='flex flex-col gap-y-1'>
        {contexts.map(context => (
          <Context key={context.order} info={context} />
        ))}
      </ol>
      <Result index={index} />
    </div>
  );
}

interface Props {
  index: number;
  quiz: Quiz;
}
