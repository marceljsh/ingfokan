import { GithubLogin, GoogleLogin } from '../components/Buttons';

export default function Login() {
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='grid grid-cols-1 gap-5'>
        <GithubLogin />
        <GoogleLogin />
      </div>
    </div>
  );
}
