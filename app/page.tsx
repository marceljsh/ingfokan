import { getServerSession } from 'next-auth';
import { MainGithubLogin, MainGoogleLogin } from './components/Buttons';
import { authOptions } from './lib/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/chat');
  }

  return (
    <div className='max-w-xl mx-auto border rounded-lg p-10 mt-32'>
      <h1 className='text-4xl font-semibold text-center'>
        Sign in to&nbsp;
        <span className='text-black text-4xl font-bold tracking-wide inline'>
          ingfo<span className='text-teal-500'>kan</span>
        </span>
        !
      </h1>

      <div className='mt-8 grid grid-cols-1 gap-2'>
        <MainGithubLogin />
        <MainGoogleLogin />
      </div>
    </div>
  );
}
