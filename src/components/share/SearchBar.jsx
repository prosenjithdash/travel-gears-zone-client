import React from 'react'
import { FaSearch } from 'react-icons/fa'

export const SearchBar = ({handleSearch}) => {
  return (
      <form onSubmit={handleSearch} className='flex items-center gap-[2px]'>
          <input type="text" name="search" placeholder='Search Products'
        className='max-w-md p-[11px] border-black  border rounded-l-md'  id="" />
          <button className='btn rounded-l-none rounded-r-md  brn-outline border border-black bg-gray-300'>
              <FaSearch size={20} />
            </button>
    </form>
  )
}
