import React from 'react';

import Logo from './Logo';

/**
 * 헤더 컴포넌트
 */
export default function Header() {
  return (
    <header className='w-full h-10 p-2 fixed'>
      <Logo />
    </header>
  );
}
