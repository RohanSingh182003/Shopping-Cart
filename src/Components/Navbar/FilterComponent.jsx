import React from 'react'
import { BiFilter } from "react-icons/bi";


const FilterComponent = () => {
  return (
    <button className='flex justify-between items-center px-2 py-1 space-x-2  hover:underline hover:underline-offset-2 rounded-md text-white'>
        <BiFilter className='text-xl'/>
        <p>Filter</p>
    </button>
  )
}

export default FilterComponent