'use client';

import { signIn, signOut } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaGoogle } from 'react-icons/fa';

export function Logout() {
  return (
    <button
      onClick={() => signOut()}
      className='flex items-center justify-center gap-2 rounded-full bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white ring-red-300 transition duration-100 hover:bg-red-600 md:text-base'
    >
      Logout
    </button>
  );
}

export function GithubLogin() {
  return (
    <button onClick={() => signIn('github')} className='flex text-3xl'>
      <FaGithub />
    </button>
  );
}

export function GoogleLogin() {
  return (
    <button
      onClick={async () => await signIn('google')}
      className='flex text-3xl'
    >
      <FcGoogle />
    </button>
  );
}

export function MainGithubLogin() {
  return (
    <button
      onClick={() => signIn('github')}
      className='flex items-center justify-center w-full gap-2 rounded-lg bg-black px-8 py-3 text-center text-sm font-semibold text-white ring-teal-300 transition duration-100 hover:bg-gray-900 md:text-base'
    >
      <span className='flex items-center gap-2'>
        <FaGithub />
        Sign in with Github
      </span>
    </button>
  );
}

export function MainGoogleLogin() {
  return (
    <button
      onClick={() => signIn('github')}
      className='flex items-center justify-center w-full gap-2 rounded-lg bg-red-600 px-8 py-3 text-center text-sm font-semibold text-white transition duration-100 hover:bg-red-500 md:text-base'
    >
      <span className='flex items-center gap-2'>
        <FaGoogle />
        Sign in with Google
      </span>
    </button>
  );
}
