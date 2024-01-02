import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

/**
 * 스피 로딩 컴포넌트
 */
export default function Loading() {
  return <AiOutlineLoading3Quarters className='w-10 h-10 text-cyan-700 animate-spin' />;
}
