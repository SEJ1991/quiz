import StartButton from 'components/common/home/StartButton';

/**
 * Home 페이지 컴포넌트
 */
export default function HomePage() {
  return (
    <main className='w-full min-h-screen pt-12 flex flex-col justify-center items-center gap-y-5'>
      <span className='text-3xl text-slate-600'>Hello. It's random quiz.</span>
      <StartButton />
    </main>
  );
}
