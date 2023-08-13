import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextAuthProvider } from './components/Providers';
import { getServerSession } from 'next-auth';
import { authOptions } from './lib/auth';
import Image from 'next/image';
import { GithubLogin, GoogleLogin, Logout } from './components/Buttons';
import { headers } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ingfokan',
  description: 'ingfo ingfo, ingfokan maseh',
};

export function getCurrentRoute() {
  'use client';
  const headerList = headers();
  const activePath = headerList.get('x-invoke-path');

  return activePath;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // TODO: extract navbar to a new component
  // TODO: make a single sign-in button, redir to '/login'
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextAuthProvider>
          <nav className='flex px-10 py-5 justify-between fixed top-0 left-0 w-full bg-white'>
            <h1 className='text-black text-4xl font-bold tracking-wide'>
              <a href='/'>
                ingfo<span className='text-teal-500'>kan</span>
              </a>
            </h1>

            {session ? (
              <div className='flex items-center'>
                <Image
                  src={session.user?.image as string}
                  alt='user profile picture'
                  className='w-12 h-12 rounded-full mr-3'
                  width={50}
                  height={50}
                />
                <Logout />
              </div>
            ) : (
              <div>
                {getCurrentRoute() == '/login' ? (
                  ''
                ) : (
                  <div className='flex gap-2'>
                    <GithubLogin />
                    <GoogleLogin />
                  </div>
                )}
              </div>
            )}
          </nav>

          <main>{children}</main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
