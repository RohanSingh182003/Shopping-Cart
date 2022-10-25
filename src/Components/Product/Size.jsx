import React from "react";
import { TiTick } from 'react-icons/ti';


const Size = ({item , setSize , size}) => {
  return (
    <button
      key={item}
      onClick={() => {
        setSize(item);
      }}
      className={`border-2 border-gray-300 ${item === size?'text-white bg-gray-800':'text-black bg-white'} rounded-md w-10 h-6`}
    >
      {item}
    </button>
  );
};

export default Size;
