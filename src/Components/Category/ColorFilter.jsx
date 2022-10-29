import React from 'react'

const ColorFilter = ({color}) => {
  return (
    <button style={{backgroundColor:color}} className={`h-6 lg:h-8 w-6 lg:w-8 rounded-full ${color === 'white' ? 'border-2 border-gray-300':null}`}></button>
  )
}

export default ColorFilter