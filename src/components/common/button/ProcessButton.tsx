import React from 'react';

/**
 * 의미상 프로세스 진행이 되는 공통 버튼 컴포넌트
 * @property {string} text 버튼 문구
 * @property {boolean?} disabled 버튼의 disabled 여부
 * @property {function} onClick 클릭 이벤트 함수
 */
export default function ProcessButton({ text, disabled = false, onClick }: Props) {
  const handleOnClick = () => {
    onClick && onClick();
  };

  return (
    <button
      className='p-2 bg-cyan-700 rounded-md text-lg text-white transition-all hover:-translate-y-0.5 disabled:opacity-30'
      disabled={disabled}
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
}

interface Props {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}
