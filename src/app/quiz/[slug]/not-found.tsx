import React from 'react';
import Link from 'next/link';

/**
 * Quiz 찾을 수 없는 페이지
 */
export default function NotFound() {
  return (
    <div>
      <h2>Not Found Question</h2>
      <p>Could not find Question</p>
      <Link href='/'>Return</Link>
    </div>
  );
}
