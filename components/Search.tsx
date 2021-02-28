import React, { Dispatch, SetStateAction } from 'react'
import { FiSearch } from 'react-icons/fi'

type SearchProps = {
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
}

export default function Search({ input, setInput }: SearchProps) {
    return (
        <div className="relative text-gray-600 w-1/4 m-6">
            <input value={input} onChange={e => setInput(e.target.value)} type="search" name="serch" placeholder="Search" className="bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <FiSearch />
            </button>
        </div>
    )
}
