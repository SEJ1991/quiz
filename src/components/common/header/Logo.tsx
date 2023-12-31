import React from 'react';
import Link from 'next/link';

/**
 * 로고 컴포넌트
 */
export default function Logo() {
  return (
    <Link href='/'>
      <h1 className='inline-block text-lg text-cyan-700 font-bold'>QUIZ</h1>
    </Link>
  );
}
