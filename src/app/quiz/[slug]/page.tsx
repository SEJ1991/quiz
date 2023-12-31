import React from 'react';

/**
 * 퀴즈 문재 페이지
 * @property {string} params string 형태의 slug
 */
export default function QustionPage({ params: { slug } }: Props) {
  return <section>{slug}</section>;
}

interface Props {
  params: { slug: string };
}
