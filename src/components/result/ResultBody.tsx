'use client';

import React from 'react';

import useResult from 'hooks/result/useResult';

/**
 * 결과 컴포넌트
 */
export default function ResultBody() {
  const { correct, incorrect, correctPercentage } = useResult();
  return (
    <div>
      <p className='text-xl text-green-500 font-bold'>correct: {correct}</p>
      <p className='text-xl text-red-500 font-bold'>incorrect: {incorrect}</p>
      <p className='text-xl font-bold'>correct percentage: {correctPercentage}%</p>
    </div>
  );
}
