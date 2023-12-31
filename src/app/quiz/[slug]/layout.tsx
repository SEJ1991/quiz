import React from 'react';

/**
 * 퀴즈 문제 페이지 레이아웃
 */
export default function layout({ children }: Props) {
  return (
    <main className='w-full min-h-screen pt-12'>
      <aside>aside</aside>
      {children}
    </main>
  );
}

interface Props {
  children: React.ReactNode;
}
