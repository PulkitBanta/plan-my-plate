import React, { Dispatch, SetStateAction } from "react";

type InputRoundedProps = {
  input: string | number | undefined;
  setInput: Dispatch<SetStateAction<any>>;
  placeholder: string;
  icon: JSX.Element;
  type: string;
};

export default function InputRounded({
  input,
  setInput,
  icon,
  placeholder,
  type,
}: InputRoundedProps) {
  return (
    <div className='relative text-gray-600 w-1/4 m-6'>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type={type}
        name='search'
        placeholder={placeholder}
        className='bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none'
      />
      <button type='submit' className='absolute right-0 top-0 mt-3 mr-4'>
        {icon}
      </button>
    </div>
  );
}
