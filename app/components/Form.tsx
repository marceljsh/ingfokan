'use client';

import { IoSend } from 'react-icons/io5';
import { postData } from '../action';
import { useRef } from 'react';

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        await postData(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className='p-6 fixed bottom-0 left-0 w-full bg-white flex justify-end'
    >
      <div className='chatbox flex w-full pl-4 outline-none rounded-full bg-gray-200'>
        <input
          type='text'
          name='message'
          placeholder='Type your message...'
          className='bg-gray-200 w-full py-2 pr-2 outline-none rounded-l-full'
        />

        <button
          type='submit'
          className='bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-r-full'
        >
          <IoSend />
        </button>
      </div>
    </form>
  );
}
