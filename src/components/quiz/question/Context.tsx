import React from 'react';

import { protectInnerHTML } from 'libs/common';
import { Context } from 'types/quiz';

/**
 * 보기 컴포넌트
 * @property {Context} context 보기 정보
 */
export default function Context({ info: { order, context } }: Props) {
  const __html = protectInnerHTML(`${order}. ${context}`);

  return <li dangerouslySetInnerHTML={{ __html }} className='text-lg font-medium' />;
}

interface Props {
  info: Context;
}
