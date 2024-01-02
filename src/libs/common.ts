import DOMPurify from 'dompurify';

/**
 * 배열의 순서를 무작위로 섞어주는 함수
 * @see https://ko.javascript.info/task/shuffle
 * @param param 순서 섞을 배열
 * @returns 순서가 무작위로 섞인 배열
 */
export const shuffle = <T>(param: T[]): T[] => {
  const array = param;
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 무작위 인덱스(0 이상 i 미만)
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

/**
 * innerHTML을 좀 더 안전하게 해주는 함수
 * @see https://record22.tistory.com/100
 * @param param innerHTML
 */
export const protectInnerHTML = (param: string): string => {
  return DOMPurify.sanitize(param);
};
