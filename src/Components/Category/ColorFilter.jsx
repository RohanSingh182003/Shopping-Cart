import React from 'react'

const ColorFilter = ({color}) => {
  return (
    <button style={{backgroundColor:color}} className='h-6 w-6 rounded-full border-2 border-gray-300 mx-1'></button>
  )
}

export default ColorFilter